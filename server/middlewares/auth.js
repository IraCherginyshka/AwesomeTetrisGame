const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.header('Authorization').split(' ')[1];
    jwt.verify(token, 'secret_loooooong_key');
    next();
  } catch (error) {
    res.status(401).json({ message: 'Please authenticate!' });
  }
};

module.exports = auth;
