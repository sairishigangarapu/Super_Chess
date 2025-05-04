require('dotenv').config(); // Add at the very top

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

const JWT_SECRET = process.env.JWT_SECRET || 'your-very-strong-secret-key';

const app = express();
const server = http.createServer(app);
const io = socket(server);

// Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/chessgame'); // Remove or comment out this line
mongoose.connect(process.env.DATABASE_URL); // Use the variable from .env

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
        if (!token) return res.redirect('/login');
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        console.error('Auth error:', error.message);
        res.redirect('/login');
    }
}

// Routes
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const existingUser = await userModel.findOne({ email });
        if (existingUser) return res.redirect('/error?message=User%20already%20registered');

        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(password, salt);
        const user = await userModel.create({
            username,
            email,
            password: hash,
            profilepic: 'default.png',
            gamesPlayed: 0,
            wins: 0,
            losses: 0
        });

        const token = jwt.sign({ email: user.email, userid: user._id }, JWT_SECRET, { expiresIn: '2h' });
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Registration error:', error.message);
        res.redirect('/error?message=Registration%20failed');
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        if (!user) return res.redirect('/error?message=Invalid%20credentials');

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.redirect('/error?message=Invalid%20credentials');

        const token = jwt.sign({ email: user.email, userid: user._id }, JWT_SECRET, { expiresIn: '2h' });
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'strict' });
        res.redirect('/dashboard');
    } catch (error) {
        console.error('Login error:', error.message);
        res.redirect('/error?message=Login%20failed');
    }
});

app.get('/logout', (req, res) => {
    res.cookie('token', '', { expires: new Date(0), httpOnly: true });
    res.redirect('/login');
});

app.get('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard');
});

app.get('/profile', isLoggedIn, async (req, res) => {
    try {
        const user = await userModel.findById(req.user.userid);
        res.render('profile', { user });
    } catch (error) {
        console.error('Profile load error:', error.message);
        res.redirect('/error?message=Failed%20to%20load%20profile');
    }
});

app.get('/profile/upload', isLoggedIn, (req, res) => {
    res.render('profileupload');
});

app.post('/upload', isLoggedIn, upload.single('image'), async (req, res) => {
    try {
        if (!req.file) return res.redirect('/error?message=No%20file%20uploaded');
        const user = await userModel.findById(req.user.userid);
        user.profilepic = req.file.filename;
        await user.save();
        res.redirect('/profile');
    } catch (error) {
        console.error('Upload error:', error.message);
        res.redirect('/error?message=Failed%20to%20upload%20file');
    }
});

app.get('/users', isLoggedIn, async (req, res) => {
    try {
        // Include winRate in the fields fetched
        const users = await userModel.find({}, 'username email profilepic winRate');
        res.render('users', { users });
    } catch (error) {
        console.error('Users load error:', error.message);
        res.redirect('/error?message=Failed%20to%20load%20users');
    }
});

app.get('/leaderboard', isLoggedIn, async (req, res) => {
    try {
        const users = await userModel.find().sort({ winRate: -1, wins: -1 });
        res.render('leaderboard', { users });
    } catch (error) {
        console.error('Leaderboard load error:', error.message);
        res.redirect('/error?message=Failed%20to%20load%20leaderboard');
    }
});

app.get('/play', isLoggedIn, async (req, res) => {
    const user = await userModel.findById(req.user.userid);
    res.render('chess', { title: 'Chess Game', user });
});

// Error display route
app.get('/error', (req, res) => {
    const message = req.query.message || 'An unknown error occurred.';
    res.render('error', { message });
});

// Socket.IO Logic
io.on('connection', (socket) => {
    socket.on('joinGame', async ({ userId }) => {
        try {
            const user = await userModel.findById(userId);
            if (!user) {
                socket.emit('error', 'User not found');
                return;
            }

            // Prevent same user from being both players
            if (players.white && players.white.userId === userId) {
                socket.emit('error', 'You are already playing as white. Use another account or a different browser.');
                return;
            }
            if (players.black && players.black.userId === userId) {
                socket.emit('error', 'You are already playing as black. Use another account or a different browser.');
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
        } catch (error) {
            socket.emit('error', 'Failed to join game');
        }
    });

    socket.on('move', async (move) => {
        try {
            if (chess.turn() === 'w' && socket.id !== players.white?.socketId) return;
            if (chess.turn() === 'b' && socket.id !== players.black?.socketId) return;

            const result = chess.move(move);
            if (result) {
                currentPlayer = chess.turn();
                io.emit('move', move);
                io.emit('boardState', chess.fen());

                let status = `Turn: ${chess.turn() === 'w' ? 'White' : 'Black'}`;
                if (chess.in_checkmate()) {
                    status = `Checkmate! ${chess.turn() === 'w' ? 'Black' : 'White'} wins!`;
                    const winner = chess.turn() === 'w' ? players.black : players.white;
                    const loser = chess.turn() === 'w' ? players.white : players.black;
                    await updateGameStats(winner?.userId, loser?.userId);
                } else if (chess.in_draw()) {
                    status = 'Game Over: Draw!';
                }
                io.emit('gameStatus', status);
            } else {
                socket.emit('invalidMove', move);
            }
        } catch (err) {
            socket.emit('invalidMove', move);
        }
    });

    socket.on('disconnect', async () => {
        if (socket.id === players.white?.socketId) {
            if (players.black) {
                await updateGameStats(players.black.userId, players.white.userId);
                io.emit('gameStatus', 'White disconnected. Black wins!');
            }
            delete players.white;
        } else if (socket.id === players.black?.socketId) {
            if (players.white) {
                await updateGameStats(players.white.userId, players.black.userId);
                io.emit('gameStatus', 'Black disconnected. White wins!');
            }
            delete players.black;
        }
        // Reset players if both have disconnected
        if (!players.white && !players.black) {
            players = {};
            chess.reset();
            currentGameId = null;
        }
    });
});

async function updateGameStats(winnerId, loserId) {
    if (winnerId) {
        const winner = await userModel.findById(winnerId);
        if (winner) {
            winner.gamesPlayed += 1;
            winner.wins += 1;
            winner.winRate = winner.wins / winner.gamesPlayed;
            await winner.save();
        }
    }
    if (loserId) {
        const loser = await userModel.findById(loserId);
        if (loser) {
            loser.gamesPlayed += 1;
            loser.losses += 1;
            loser.winRate = loser.wins / loser.gamesPlayed;
            await loser.save();
        }
    }
    chess.reset();
    players = {};
    currentGameId = null;
}

// General error handler middleware (should be last)
app.use((err, req, res, next) => {
    console.error('Unhandled error:', err.stack);
    res.redirect('/error?message=An%20unexpected%20error%20occurred');
});

server.listen(3000, () => {
    console.log('Server running on port 3000');
});