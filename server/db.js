const DB_URL = process.env.DB_URL || 'localhost';
const mongoose = require('mongoose');

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
