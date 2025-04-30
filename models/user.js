const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/chessgame");
const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilepic: { type: String, default: 'default.png' },
    gamesPlayed: { type: Number, default: 0 },
    wins: { type: Number, default: 0 },
    losses: { type: Number, default: 0 },
    winRate: { type: Number, default: 0 }
});

module.exports = mongoose.model('user', userSchema);