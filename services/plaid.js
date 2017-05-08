const fetch = require('node-fetch');
const Plaid = {};

// example call to Plaid's API
// WIP
Plaid.connect = reqObj => {
  return fetch('https://tartan.plaid.com/connect', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      client_id: reqObj.client_id,
      secret: reqObj.secret,
      username: reqObj.username,
      password: reqObj.password,
      type: reqObj.type
    })
  });
};

module.exports = Plaid;
