'use strict';

// require node modules
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const nodemon = require('nodemon');
const path = require('path');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');

require('dotenv').config();

// define port and invoke express
const PORT = process.env.PORT || 3000;
const app = express();

// invoke bodyParser and morgan
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

// setup routes which do not require a valid JWT
app.use(
  expressJWT({ secret: process.env.SECRET }).unless({
    path: ['/favicon.ico', '/user/login', '/user/signup', '/test']
  })
);

// point to all routes in resources.js
app.use('/', require('./resources'));

// run server
const server = app.listen(PORT, () => {
  console.log(`soft-shell tacos on ${PORT}`);
});
