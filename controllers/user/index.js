const userRouter = require('express').Router();
const controller = require('./controller.js');

userRouter.post('/signup', controller.signup);
userRouter.post('/login', controller.login);
userRouter.put('/:id/series', controller.updateSeries)
userRouter.put('/:id/monthlyCap', controller.updateMonthlyCap)

module.exports = userRouter;
