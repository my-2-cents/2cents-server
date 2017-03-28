const fetch = require('node-fetch');
const Plaid = {};

Plaid.connect = reqObj => {
  console.log(reqObj);
  return fetch('https://tartan.plaid.com/connect', {
    method: 'GET',
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

// {
// 	"client_id": "test_id",
// 	"secret": "test_secret",
// 	"username": "plaid_test",
// 	"password": "plaid_good",
// 	"type": "wells"
// }
