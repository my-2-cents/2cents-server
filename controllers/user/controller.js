const User = require('../../models/user.js');

let controller = {};

controller.login = (req, res) => {
  User.login(req.body, req.body.loginPassword)
    .then(data => {
      console.log('here:', data)
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({ failed: 'failed' });
    });
};

controller.signup = (req, res) => {
  if (req.body.signupPassword !== req.body.signupConfirm) {
    return res.status(404).json({ failed: 'Passwords do not match' });
  } else {
    User.signup(req.body, req.body.signupPassword)
      .then(data => {
        User.login(data, req.body.signupPassword).then(data => {
          return res.status(200).json(data);
        });
      })
      .catch(err => {
        return res.status(500).json(err);
      });
  }
};

module.exports = controller;
