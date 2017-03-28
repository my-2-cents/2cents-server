'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const nodemon = require('nodemon');
const path = require('path');
const jwt = require('jsonwebtoken');
const expressJWT = require('express-jwt');
require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(
  expressJWT({ secret: process.env.SECRET }).unless({
    path: ['/favicon.ico', '/user/login', '/user/signup']
  })
);

app.use('/', require('./resources'));

const server = app.listen(process.env.APP_PORT, function() {
  console.log(`soft-shell tacos on ${process.env.APP_PORT}`);
});
