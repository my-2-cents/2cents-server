'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const morgan = require('morgan');
const nodemon = require('nodemon');
const path = require('path');
require('dotenv').config();

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/', require('./resources'));

const server = app.listen(process.env.APP_PORT, function () {
    console.log(`soft-shell tacos on ${process.env.APP_PORT}`);
});
