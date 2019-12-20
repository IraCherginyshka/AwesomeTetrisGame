const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const User = require('./models/user.model');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Content-Type', 'application/json');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/../dist')));

const errorHandler = (res) => {
  return res.status(404).json({
    massage: 'Auth error',
  });
};

app.route('/sign_up').post((req, res) => {
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      res.status(201).json({
        massage: 'User created',
      });
    })
    .catch(() => errorHandler(res));
});

app.route('/login').post((req, res) => {
  let fetchedUser;
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return errorHandler(res);
      }
      fetchedUser = user;
      if (user.password === req.body.password) {
        const token = jwt.sign({ userName: fetchedUser.userName }, 'secret_loooooong_key');
        return res.status(200).json({
          token,
          user,
        });
      }
      return errorHandler(res);
    })
    .catch(() => {
      errorHandler(res);
    });
});

module.exports = app;
