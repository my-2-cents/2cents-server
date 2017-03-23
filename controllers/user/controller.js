const User = require('../../models/user.js');

let controller = {};

controller.signup = (req, res) => {
  User
    .signup(req.body)
    .then((data) => {
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

controller.login = (req, res) => {
  console.log('in controller', req.body)
  User
    .login(req.body)
    .then((data) => {
      console.log('login data:', data)
      res
        .status(200)
        .json({message: "login"})
    })
    .catch((err) => {
      res
        .status(400)
        .json(err)
    })
}

module.exports = controller;
