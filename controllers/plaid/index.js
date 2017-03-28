const router = require('express').Router();
const controller = require('./controller');
const plaid = require('../services/plaid.js');

router.get('/connect', plaid.connect)

module.exports = router;
