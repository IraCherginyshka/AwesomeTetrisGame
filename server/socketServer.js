const express = require('express');
const http = require('http');
const setHeaders = require('./utils');

const app = express();
setHeaders(app);

let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server);

const port = 3030;
let games = [];

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

server.listen(port, () => {
  console.log(`started on port: ${port}`);
});
