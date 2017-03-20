const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.index);
router.post('/get_access_token', controller.get_access_token)

module.exports = router;
