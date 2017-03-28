const client = require('../../lib/client.js');
let controller = {};

controller.index = (req, res) => {
  res.render('index.ejs');
};

controller.share_public_plaid = (req, res) => {
  res.json({
    PLAID_PUBLIC_KEY: process.env.PLAID_PUBLIC_KEY,
    PLAID_ENV: process.env.PLAID_ENV
  });
};

controller.get_access_token = (req, res) => {
  console.log('inside get_AT', client);
  PUBLIC_TOKEN = req.body.public_token;
  client.exchangePublicToken(PUBLIC_TOKEN, (error, tokenResponse) => {
    if (error != null) {
      var msg = 'Could not exchange public_token!';
      console.log(msg + '\n' + error);
      return res.json({ error: msg });
    }
    ACCESS_TOKEN = tokenResponse.access_token;
    console.log('Access Token in controller.get_AT: ' + ACCESS_TOKEN);
    res.json({ error: false });
  });
};

module.exports = controller;
