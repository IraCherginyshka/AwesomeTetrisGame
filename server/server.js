const app = require('express')();
const path = require('path');
const jwt = require('jsonwebtoken');
const db = require('./db');
const setMiddleware = require('./utils');
const socketIO = require('socket.io');

setMiddleware(app);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
const io = socketIO(server);

const userData = {};
let games = [];

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

io.on('connection', (socket) => {
  socket.on('join-game', (gameRoom, username) => {
    socket.join(gameRoom);
    socket.to(gameRoom).emit('user-connect', username);
  });

  socket.on('leave-game', (gameRoom, username) => {
    socket.to(gameRoom).emit('user-disconnect', username);
    socket.leave(gameRoom);
  });

  socket.on('new-stats', (newStats) => {
    socket.broadcast.to(newStats.player.username).emit('current-stats', newStats);
  });

  socket.on('new-active-game', (newGame) => {
    const sameGameIndex = games.findIndex(
      ({ player }) => player.username === newGame.player.username,
    );
    if (sameGameIndex === -1) {
      games.push(newGame);
    } else {
      if (games[sameGameIndex].level !== newGame.level) {
        games.splice(sameGameIndex, 1, newGame);
      }
    }

    socket.join(newGame.player.username);
    io.emit('active-games', games);
  });

  socket.on('delete-game', (game) => {
    games = games.filter(({ username }) => username !== game.username);
    io.emit('active-games', games);
  });

  socket.on('all-active-games', () => {
    io.emit('active-games', games);
  });
});

module.exports = app;
