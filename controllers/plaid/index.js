const router = require('express').Router();
const controller = require('./controller');
const plaid = require('./plaid');

router.get('/', controller.index);
router.get('/connect', plaid.connect)
router.post('/get_access_token', controller.get_access_token)
router.get('/share_public_plaid', controller.share_public_plaid)

module.exports = router;
