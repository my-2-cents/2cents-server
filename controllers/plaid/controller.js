const client = require('../../lib/client.js')
let controller = {};

controller.index = (req, res) => {
  res.json({
    PLAID_PUBLIC_KEY: process.env.PLAID_CLIENT_ID,
    PLAID_ENV: process.env.PLAID_ENV
  })
};

controller.get_access_token = (req, res) => {
  PUBLIC_TOKEN = req.body.public_token;
  client.exchangePublicToken(PUBLIC_TOKEN, (error, tokenResponse) => {
    if (error != null) {
        var msg = 'Could not exchange public_token!';
        console.log(msg + '\n' + error);
        return res.json({error: msg});
    }
    ACCESS_TOKEN = tokenResponse.access_token;
    console.log('Access Token: ' + ACCESS_TOKEN);
    res.json({'error': false});
  });
}

module.exports = controller;
