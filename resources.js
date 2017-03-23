const router = require('express').Router();

router.use('/test', require('./controllers/test'));
router.use('/plaid', require('./controllers/plaid'));
router.use('/user', require('./controllers/user'));

module.exports = router;
