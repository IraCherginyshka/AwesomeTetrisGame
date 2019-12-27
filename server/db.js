const DB_URL = process.env.DB_URL || 'localhost';
const mongoose = require('mongoose');

mongoose
  .connect(`mongodb://${DB_URL}:27017/TetrisDB`, {
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
