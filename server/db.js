const DB_URL = process.env.DB_URL || 'mongodb://user:user@localhost:27017/TetrisDB';
const mongoose = require('mongoose');
const User = require('./models/user.model');
const Result = require('./models/gameResult.model');

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to database');
  })
  .catch((err) => {
    console.log('failed connected to database');
    console.log('error', err);
  })
  .finally(() => {
    console.log('ulr', DB_URL);
  });

const signUpUser = (newUserData) => {
  return new User(newUserData).save();
};

const loginUser = (name) => {
  return User.findOne({ username: name });
};

const addResult = (result) => {
  return new Result(result).save();
};

const getSortResults = () => {
  return Result.find({}).sort({ score: -1 });
};

module.exports = {
  signUpUser,
  loginUser,
  addResult,
  getSortResults,
};
