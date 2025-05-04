const mongoose = require('mongoose');
const encrypt = require('mongoose-encryption');
require('dotenv').config(); // Ensure dotenv is configured here too if run independently, or rely on app.js

// mongoose.connect("mongodb://127.0.0.1:27017/chessgame"); // Remove this if connection is handled in app.js

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

// Encrypt the email field
// userSchema.plugin(encrypt, { secret: process.env.FIELD_ENCRYPTION_SECRET, encryptedFields: ['email'] });

// Only encrypt sensitive fields that do not require unique indexing
userSchema.plugin(encrypt, { secret: process.env.FIELD_ENCRYPTION_SECRET, encryptedFields: [] });

module.exports = mongoose.model('user', userSchema);