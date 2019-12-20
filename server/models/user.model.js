require('../db');
const mongoose = require('mongoose');
const uniqueName = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: String, required: true },
  country: { type: String, required: true },
});

userSchema.plugin(uniqueName, { message: 'Name already in use' });

module.exports = mongoose.model('User', userSchema);
