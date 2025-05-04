const express = require('express');
const socket = require('socket.io');
const http = require('http');
const { Chess } = require('chess.js');
const path = require('path');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const userModel = require('./models/user');
const upload = require('./config/multerconfig');

const app = express();
const server = http.createServer(app);
const io = socket(server);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/chessgame');

// Game state
const chess = new Chess();
let players = {};
let currentPlayer = 'w';
let currentGameId = null;

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use('/images/uploads', express.static(path.join(__dirname, 'public', 'images', 'uploads')));

// Middleware to check if user is logged in
function isLoggedIn(req, res, next) {
    try {
        const token = req.cookies.token;
        if (!token) {
            const err = new Error('Please log in to continue.');
            err.status = 401;
            throw err;
        }
        const decoded = jwt.verify(token, 'secret');
        req.user = decoded;
        next();
    } catch (error) {
        next(error);
    }
}

// Routes
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res, next) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) {
            const err = new Error('This email is already registered. Try a different one.');
            err.status = 409;
            throw err;
        }

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await userModel.create({
            username,
            email,
            password: hash,
            profilepic: 'default.png',
            gamesPlayed: 0,
            wins: 0,
            losses: 0,
            winRate: 0
        });

        const token = jwt.sign({ email: user.email, userid: user._id }, 'secret');
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/dashboard');
    } catch (error) {
        next(error);
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) {
            const err = new Error('Invalid email or password.');
            err.status = 401;
            throw err;
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            const err = new Error('Invalid email or password.');
            err.status = 401;
            throw err;
        }

        const token = jwt.sign({ email: user.email, userid: user._id }, 'secret');
        res.cookie('token', token, { httpOnly: true });
        res.redirect('/dashboard');
    } catch (error) {
        next(error);
    }
});

app.get('/logout', (req, res) => {
    res.cookie('token', '', { expires: new Date(0), httpOnly: true });
    res.redirect('/login');
});

app.get('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard');
});

app.get('/profile', isLoggedIn, async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user.userid);
        if (!user) {
            const err = new Error('User not found.');
            err.status = 404;
            throw err;
        }
        res.render('profile', { user });
    } catch (error) {
        next(error);
    }
});

app.get('/profile/upload', isLoggedIn, (req, res) => {
    res.render('profileupload');
});

app.post('/upload', isLoggedIn, upload.single('image'), async (req, res, next) => {
    try {
        if (!req.file) {
            const err = new Error('No image file uploaded. Please choose a JPG or PNG.');
            err.status = 400;
            throw err;
        }
        const user = await userModel.findById(req.user.userid);
        if (!user) {
            const err = new Error('User not found.');
            err.status = 404;
            throw err;
        }
        user.profilepic = req.file.filename;
        await user.save();
        res.redirect('/profile');
    } catch (error) {
        next(error);
    }
});

app.get('/users', isLoggedIn, async (req, res, next) => {
    try {
        const users = await userModel.find({}, 'username email profilepic');
        res.render('users', { users });
    } catch (error) {
        next(error);
    }
});

app.get('/leaderboard', isLoggedIn, async (req, res, next) => {
    try {
        const users = await userModel.find().sort({ winRate: -1, wins: -1 });
        res.render('leaderboard', { users });
    } catch (error) {
        next(error);
    }
});

app.get('/play', isLoggedIn, async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user.userid);
        res.render('chess', { title: 'Chess Game', user });
    } catch (error) {
        next(error);
    }
});

// Error route for client-side errors
app.get('/error', (req, res) => {
    const message = req.query.message || 'An unexpected error occurred.';
    res.status(400).render('error', { message });
});

// Socket.IO Logic
io.on('connection', (socket) => {
    socket.on('joinGame', async ({ userId }) => {
        try {
            const user = await userModel.findById(userId);
            if (!user) {
                socket.emit('error', 'User not found. Please log in again.');
                return;
            }

            if (players.white && players.white.userId === userId) {
                socket.emit('error', 'You are already playing as white. Use another account or browser.');
                return;
            }
            if (players.black && players.black.userId === userId) {
                socket.emit('error', 'You are already playing as black. Use another account or browser.');
                return;
            }

            if (!players.white) {
                players.white = { socketId: socket.id, userId };
                console.log('Assigned white to:', userId);
                socket.emit('playerRole', 'w');
                currentGameId = Date.now().toString();
            } else if (!players.black) {
                players.black = { socketId: socket.id, userId };
                console.log('Assigned black to:', userId);
                socket.emit('playerRole', 'b');
            } else {
                socket.emit('spectatorRole');
            }

            socket.emit('gameStatus', `Turn: ${chess.turn() === 'w' ? 'White' : 'Black'}`);
            socket.emit('boardState', chess.fen());
        } catch (error) {
            socket.emit('error', 'Failed to join game. Try refreshing the page.');
        }
    });

    socket.on('move', async (move) => {
        try {
            const playerRole = (players.white && players.white.socketId === socket.id) ? 'w' : ((players.black && players.black.socketId === socket.id) ? 'b' : null);

            if (!playerRole) {
                console.log(`Move attempt by non-player socket: ${socket.id}`);
                return;
            }

            if (chess.turn() !== playerRole) {
                socket.emit('invalidMove', { message: "It's not your turn." });
                return;
            }

            const result = chess.move(move);
            if (result) {
                currentPlayer = chess.turn();
                io.emit('move', move);
                io.emit('boardState', chess.fen());

                let status = `Turn: ${chess.turn() === 'w' ? 'White' : 'Black'}`;
                let gameOver = false;

                if (chess.isCheckmate()) {
                    status = `Checkmate! ${chess.turn() === 'w' ? 'Black' : 'White'} wins!`;
                    const winner = chess.turn() === 'w' ? players.black : players.white;
                    const loser = chess.turn() === 'w' ? players.white : players.black;
                    await updateGameStats(winner?.userId, loser?.userId);
                    gameOver = true;
                } else if (chess.isDraw()) {
                    status = 'Game Over: Draw!';
                    if (players.white?.userId && players.black?.userId) {
                        await updateGameStats(null, null, true);
                    }
                    gameOver = true;
                } else if (chess.isStalemate()) {
                    status = 'Game Over: Stalemate!';
                    if (players.white?.userId && players.black?.userId) {
                        await updateGameStats(null, null, true);
                    }
                    gameOver = true;
                } else if (chess.isThreefoldRepetition()) {
                    status = 'Game Over: Draw by Threefold Repetition!';
                    if (players.white?.userId && players.black?.userId) {
                        await updateGameStats(null, null, true);
                    }
                    gameOver = true;
                } else if (chess.isInsufficientMaterial()) {
                    status = 'Game Over: Draw by Insufficient Material!';
                    if (players.white?.userId && players.black?.userId) {
                        await updateGameStats(null, null, true);
                    }
                    gameOver = true;
                }

                io.emit('gameStatus', status);

                if (gameOver) {
                    io.emit('gameOver', status);
                    resetGame();
                }
            } else {
                socket.emit('invalidMove', { message: 'Invalid move. Please try again.' });
            }
        } catch (err) {
            console.error('Error processing move:', err);
            socket.emit('error', 'An error occurred while processing your move.');
        }
    });

    socket.on('disconnect', async () => {
        if (socket.id === players.white?.socketId) {
            if (players.black) {
                await updateGameStats(players.black.userId, players.white.userId);
                io.emit('gameStatus', 'White disconnected. Black wins!');
                io.emit('gameOver', 'White disconnected. Black wins!');
            }
            delete players.white;
        } else if (socket.id === players.black?.socketId) {
            if (players.white) {
                await updateGameStats(players.white.userId, players.black.userId);
                io.emit('gameStatus', 'Black disconnected. White wins!');
                io.emit('gameOver', 'Black disconnected. White wins!');
            }
            delete players.black;
        }
        if (!players.white && !players.black) {
            players = {};
            chess.reset();
            currentGameId = null;
        }
    });
});

async function updateGameStats(winnerId, loserId, isDraw = false) {
    const updatePlayer = async (playerId, won, lost, drew) => {
        if (!playerId) return;
        try {
            const player = await userModel.findById(playerId);
            if (player) {
                player.gamesPlayed = (player.gamesPlayed || 0) + 1;
                if (won) player.wins = (player.wins || 0) + 1;
                if (lost) player.losses = (player.losses || 0) + 1;
                player.winRate = player.gamesPlayed > 0 ? player.wins / player.gamesPlayed : 0;
                await player.save();
            }
        } catch (error) {
            console.error(`Failed to update stats for player ${playerId}:`, error);
        }
    };

    if (isDraw) {
        await updatePlayer(players.white?.userId, false, false, true);
        await updatePlayer(players.black?.userId, false, false, true);
    } else {
        await updatePlayer(winnerId, true, false, false);
        await updatePlayer(loserId, false, true, false);
    }
}

function resetGame() {
    console.log("Resetting game state...");
    chess.reset();
    players = {};
    currentPlayer = 'w';
    currentGameId = null;
    io.emit('gameReset');
}

// Global Error Handler
app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err.stack || err);
    const statusCode = err.status || 500;
    const errorMessage = process.env.NODE_ENV === 'production'
        ? 'Oops! Something went wrong. Please try again.'
        : err.message || 'An unexpected error occurred.';
    if (res.headersSent) {
        return next(err);
    }
    res.status(statusCode);
    try {
        res.render('error', { message: errorMessage });
    } catch (renderError) {
        console.error('Error rendering error page:', renderError);
        res.type('txt').send(`Server Error: ${errorMessage}`);
    }
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});