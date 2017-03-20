const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.test);

module.exports = router;
