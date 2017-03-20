const router = require('express').Router();

router.use('/test', require('./controllers/test'));

module.exports = router;
