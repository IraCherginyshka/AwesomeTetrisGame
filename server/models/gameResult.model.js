const mongoose = require('mongoose');

const gameResultSchema = new mongoose.Schema({
  username: { type: String, required: true },
  lines: { type: Number, required: true },
  score: { type: Number, required: true },
  level: { type: Number, required: true },
});

module.exports = mongoose.model('Result', gameResultSchema);
