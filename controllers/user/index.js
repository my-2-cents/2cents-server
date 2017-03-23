const userRouter = require('express').Router()
const controller = require('./controller.js')
var plaid = require('plaid');

userRouter.post('/signup', controller.signup)
userRouter.post('/login', plaidClient)

// Initialize a client
var plaidClient = new plaid.Client('test_id', 'test_secret', plaid.environments.tartan);

plaidClient.addAuthUser('bofa', {
  username: 'plaid_test',
  password: 'plaid_good',
}, function(err, response) {
  if (err != null) {
    // Bad request - invalid credentials, account locked, etc.
    console.error(err);
  } else {
    // No MFA required - response body has accounts
    console.log(response.accounts);
  }
});

module.exports = userRouter;
