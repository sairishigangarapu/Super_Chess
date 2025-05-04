const socket = io();
socket.emit('joinGame', { userId: window.USER_ID });

const chess = new Chess();
const boardElement = document.querySelector('.chessboard');

let draggedPiece = null;
let sourceSquare = null;
let playerRole = null;

// Function to show temporary in-page error message
const showErrorMessage = (message) => {
    let errorDiv = document.getElementById('errorMessage');
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.id = 'errorMessage';
        errorDiv.className = 'text-red-500 text-lg font-semibold mb-4';
        document.querySelector('.min-h-screen').insertBefore(errorDiv, document.getElementById('gameStatus'));
    }
    errorDiv.innerText = message;
    setTimeout(() => {
        errorDiv.innerText = '';
    }, 3000);
};

const renderBoard = () => {
    const board = chess.board();
    boardElement.innerHTML = '';
    board.forEach((row, rowIndex) => {
        row.forEach((square, squareIndex) => {
            const squareElement = document.createElement('div');
            squareElement.classList.add('square', (rowIndex + squareIndex) % 2 === 0 ? 'light' : 'dark');
            squareElement.dataset.row = rowIndex;
            squareElement.dataset.col = squareIndex;

            if (square) {
                const pieceElement = document.createElement('div');
                pieceElement.classList.add('piece', square.color === 'w' ? 'white' : 'black');
                pieceElement.innerText = getPieceUnicode(square);
                pieceElement.draggable = playerRole === square.color;

                pieceElement.addEventListener('dragstart', (e) => {
                    if (pieceElement.draggable) {
                        draggedPiece = pieceElement;
                        sourceSquare = { row: rowIndex, col: squareIndex };
                        e.dataTransfer.setData('text/plain', '');
                    }
                });
                pieceElement.addEventListener('dragend', () => {
                    draggedPiece = null;
                    sourceSquare = null;
                });
                squareElement.appendChild(pieceElement);
            }

            squareElement.addEventListener('dragover', (e) => {
                e.preventDefault();
            });
            squareElement.addEventListener('drop', (e) => {
                e.preventDefault();
                if (draggedPiece) {
                    const targetSource = {
                        row: parseInt(squareElement.dataset.row),
                        col: parseInt(squareElement.dataset.col)
                    };
                    handleMove(sourceSquare, targetSource);
                }
            });
            boardElement.appendChild(squareElement);
        });
    });

    if (playerRole === 'b') {
        boardElement.classList.add('flipped');
    } else {
        boardElement.classList.remove('flipped');
    }
};

const handleMove = (source, target) => {
    const move = {
        from: `${String.fromCharCode(97 + source.col)}${8 - source.row}`,
        to: `${String.fromCharCode(97 + target.col)}${8 - target.row}`,
        promotion: 'q'
    };
    socket.emit('move', move);
};

const getPieceUnicode = (piece) => {
    const pieces = {
        'w': { 'p': '♙', 'r': '♖', 'n': '♘', 'b': '♗', 'q': '♕', 'k': '♔' },
        'b': { 'p': '♟', 'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚' }
    };
    return pieces[piece.color][piece.type];
};

socket.on('playerRole', (role) => {
    playerRole = role;
    renderBoard();
});

socket.on('spectatorRole', () => {
    playerRole = null;
    renderBoard();
});

socket.on('boardState', (fen) => {
    chess.load(fen);
    renderBoard();
});

socket.on('move', (move) => {
    chess.move(move);
    renderBoard();
});

socket.on('gameStatus', (status) => {
    const gameStatusElement = document.getElementById('gameStatus');
    gameStatusElement.innerText = status;
    gameStatusElement.style.fontWeight = 'bold';
    gameStatusElement.style.color = status.includes('White') ? '#f0d9b5' : '#b58863';
});

socket.on('error', (message) => {
    window.location.href = `/error?message=${encodeURIComponent(message)}`;
});

socket.on('invalidMove', (data) => {
    showErrorMessage(data.message || 'Invalid move. Please try again.');
});

socket.on('gameOver', (message) => {
    showErrorMessage(message);
    setTimeout(() => {
        window.location.href = `/error?message=${encodeURIComponent(message)}`;
    }, 2000);
});

socket.on('gameReset', () => {
    console.log('Game has been reset by the server.');
    chess.reset();
    renderBoard();
    document.getElementById('gameStatus').innerText = 'Waiting for players...';
});

renderBoard();