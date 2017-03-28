const router = require('express').Router();
const controller = require('./controller');
const plaid = require('../../services/plaid.js');

router.post('/connect', controller.connect);

module.exports = router;
