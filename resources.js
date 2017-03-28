const router = require('express').Router();

router.use('/test', require('./controllers/test'));
router.use('/user', require('./controllers/user'));
router.use('/plaid', require('./controllers/plaid'));

module.exports = router;
