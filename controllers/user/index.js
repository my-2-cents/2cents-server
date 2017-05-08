const userRouter = require('express').Router();
const controller = require('./controller.js');

// assign each route with the relevant functionality
userRouter.post('/signup', controller.signup);
userRouter.post('/login', controller.login);
userRouter.put('/:id/series', controller.updateSeries);
userRouter.put('/:id/monthlyCap', controller.updateMonthlyCap);

module.exports = userRouter;
