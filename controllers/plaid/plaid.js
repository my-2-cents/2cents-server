Const User = require('../../models/user.js');

let plaid = {};

plaid.connect = (req, res) => {
  User
    .signup(req.body)
    .then((data) => {
      res
        .status(200)
        .json({message: "plaid connect"})
    })
    .catch((err) => {
      res
        .status(400)
        .json(err)
    })
}

module.exports = plaid;
