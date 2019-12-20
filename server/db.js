const mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/TetrisDB', {
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