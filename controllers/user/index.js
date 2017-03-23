const userRouter = require('express').Router()
const controller = require('./controller.js')
//
// userRouter.route('/signup')
//   .post(createUser, (req, res, next) => res.json(res.signupResult));
//
// userRouter.route('/login')
//   .post(authenticate, (req, res, next) => res.json(res.loginResult));

userRouter.post('/signup', controller.signup)
userRouter.post('/login', controller.login)

module.exports = router;
