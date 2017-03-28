const User = require('../../models/user.js');

let controller = {};

controller.login = (req, res) => {
  console.log('login', req.body)
  User.login(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({ message: 'login failed' });
    });
};

controller.signup = (req, res, next) => {
  console.log('SUP', req.body.signupPassword)
  User.signup(req.body)
    .then(data => {
      console.log(data)
      User.login(data, req.body.signupPassword)
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = controller;
