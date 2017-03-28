const userRouter = require('express').Router();
const controller = require('./controller.js');

userRouter.post('/signup', controller.signup);
userRouter.post('/login', controller.login);

module.exports = userRouter;
