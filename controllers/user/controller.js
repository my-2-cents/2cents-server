const User = require('../../models/user.js');

let controller = {};

controller.login = (req, res) => {
  User.login(req.body, req.body.password)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({ message: 'login failed' });
    });
};

controller.signup = (req, res) => {
  User.signup(req.body)
    .then(data => {
      console.log('what is passed', data)
      User.login(data, req.body.signupPassword)
        .then(data => {
          res.status(200).json(data)
        })
    })
    .catch(err => {
      res.status(400).json(err);
    });
};

module.exports = controller;
