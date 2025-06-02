const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
  telegram_user_id: { type: String, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Session', sessionSchema);
