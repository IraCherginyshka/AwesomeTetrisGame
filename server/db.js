const DB_URL = process.env.DB_URL || 'localhost';
const mongoose = require('mongoose');
const User = require('./models/user.model');
const Result = require('./models/gameResult.model');

const user = process.env.DB_URL ? 'user:user@' : '';

mongoose
  .connect(`mongodb://${user}${DB_URL}:27017/TetrisDB`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('connected to database');
  })
  .catch(() => {
    console.log('failed connected to database');
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
