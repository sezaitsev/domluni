const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  telegram_user_id: { type: String, required: true, unique: true },
  name: String,
  birth_date: String,
  birth_time: String,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
