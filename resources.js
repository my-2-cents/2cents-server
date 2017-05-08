const router = require('express').Router();

// used to see if heroku is up
router.use('/test', require('./controllers/test'));

// user controller
router.use('/user', require('./controllers/user'));

// plaid controller
router.use('/plaid', require('./controllers/plaid'));

module.exports = router;
