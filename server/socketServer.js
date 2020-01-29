const express = require('express');
const http = require('http');
const setHeaders = require('./utils');

const app = express();
setHeaders(app);
// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Headers',
//     'Origin, X-Requested-With, Content-Type, Accept, Authorization, Name',
//   );
//   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, PUT, OPTIONS');
//   res.setHeader('Access-Control-Allow-Credentials', 'true');
//   next();
// });

let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = 3030;
let games = [];

io.on('connection', (socket) => {
  socket.on('join-game', (gameRoom, username) => {
    console.log(`${username} join`); //next feature
    socket.join(gameRoom);
  });

  socket.on('leave-game', (gameRoom, username) => {
    console.log(`${username} join`);
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
    io.emit('active-games', games);
  });

  socket.on('delete-game', (game) => {
    games = games.filter(({ username }) => username !== game.username);
    io.emit('active-games', games);
  });
});

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});
