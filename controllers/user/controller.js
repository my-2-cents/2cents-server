const User = require('../../models/user.js');

let controller = {};

controller.signup = (req, res) => {
  console.log('in controller', req.body)
  User
    .signup(req.body)
    .then((data) => {
      console.log('data:', data)
      res
        .status(200)
        .json({message: "signup"})
    })
    .catch((err) => {
      res
        .status(400)
        .json(err)
    })
}

module.exports = controller;
