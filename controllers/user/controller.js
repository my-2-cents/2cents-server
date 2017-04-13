const User = require('../../models/user.js');

let controller = {};

controller.login = (req, res) => {
  User.login(req.body, req.body.password)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(400).json({ failed: 'failed' });
    });
};

controller.signup = (req, res) => {
  if (!req.body.username || !req.body.password || !req.body.passwordConfirm) {
    return res.status(404).json({ failed: 'All fields are required' });
  } else if (req.body.password !== req.body.passwordConfirm) {
    return res.status(404).json({ failed: 'Passwords do not match' });
  } else {
    User.signup(req.body, req.body.password)
      .then(data => {
        User.login(data, req.body.password).then(data => {
          return res.status(200).json(data);
        });
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json(err);
      });
  }
};

controller.updateSeries = (req, res) => {
  User.updateSeries(req.body.series, req.params.id)
    .then(data => {
      return res.status(200).json(data)
    })
}

controller.updateMonthlyCap = (req, res) => {
  console.log('controller', req.body, req.params.id)
  User.updateMonthlyCap(req.body.monthlyCap, req.params.id)
    .then(data => {
      return res.status(200).json(data)
    })
}

module.exports = controller;
