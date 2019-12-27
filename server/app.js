const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const User = require('./models/user.model');
const Result = require('./models/gameResult.model');

const app = express();

const userData = {};

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization, Name',
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './dist/AwesomeTetrisGame')));

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

app.post('/login', (req, res) => {
  let fetchedUser;
  User.findOne({ username: req.body.username })
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
          user,
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
  const result = new Result(req.body);
  result
    .save()
    .then(() => {
      res.status(201).json({
        massage: 'Result added',
      });
    })
    .catch(() => errorHandler(res));
});

app.get('/result', (req, res) => {
  console.log('result');
  Result.find({})
    .sort({ score: -1 })
    .then((sortResult) => res.send(sortResult));
});
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));

module.exports = app;
