const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const db = require('./db');
const setHeaders = require('./utils');

const app = express();
setHeaders(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './dist/AwesomeTetrisGame')));

const userData = {};

const errorHandler = (res) => {
  return res.status(404).json({
    massage: 'Auth error',
  });
};

const checkToken = (req, res, next) => {
  if (req.header('Authorization').split(' ')[1] === userData[req.header('Name')]) {
    return next();
  }
  return errorHandler(res);
};

app.post('/sign_up', (req, res) => {
  db.signUpUser(req.body)
    .then(() => {
      res.status(201).json({
        massage: 'User created',
      });
    })
    .catch(() => errorHandler(res));
});

app.post('/login', (req, res) => {
  let fetchedUser;
  db.loginUser(req.body.username)
    .then((user) => {
      if (!user) {
        return errorHandler(res);
      }
      fetchedUser = user;
      if (user.password === req.body.password) {
        const token = jwt.sign({ userName: fetchedUser.userName }, 'secret_loooooong_key');
        userData[user.username] = token;
        return res.status(200).json({
          token,
          user: { ...user.toObject(), password: undefined },
        });
      }
      return errorHandler(res);
    })
    .catch(() => {
      return errorHandler(res);
    });
});

app.get('/logout', (req) => {
  userData[req.header('Name')] = undefined;
});

app.post('/add_result', checkToken, (req, res) => {
  db.addResult(req.body)
    .then(() => {
      res.status(201).json({
        massage: 'Result added',
      });
    })
    .catch(() => errorHandler(res));
});

app.get('/result', (req, res) => {
  db.getSortResults()
    .then((sortResult) => res.send(sortResult))
    .catch(() => errorHandler(res));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/AwesomeTetrisGame/index.html'));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

module.exports = app;
