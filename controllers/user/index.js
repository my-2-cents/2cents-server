const userRouter = require('express').Router()
const controller = require('./controller.js')
var plaid = require('plaid');

userRouter.post('/signup', controller.signup)
userRouter.post('/login', controller.login)

module.exports = userRouter;
