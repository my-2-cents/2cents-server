const router = require('express').Router();

router.use('/test', require('./controllers/test'));
router.use('/plaid', require('./controllers/plaid'));

module.exports = router;
