const router = require('express').Router();
const controller = require('./controller');

// just one route, which returns a json
router.get('/', controller.test);

module.exports = router;
