const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const setMiddleware = (app) => {
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
};

module.exports = setMiddleware;
