const User = require('../../models/user.js');

let controller = {};

// login function
controller.login = (req, res) => {
  // call login function from model
  User.login(req.body, req.body.password)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      // pass json of what exactly went wrong
      res.status(400).json({ failed: 'Incorrect password.' });
    });
};

// signup function
controller.signup = (req, res) => {
  // if any of the signup fields are empty...
  if (!req.body.username || !req.body.password || !req.body.passwordConfirm) {
    // ...json an error message (which is rendered in the front end)
    return res.status(404).json({ failed: 'All fields are required' });
    // if the passwords don't match...
  } else if (req.body.password !== req.body.passwordConfirm) {
    // ...json an error message (which is rendered in the front end)
    return res.status(404).json({ failed: 'Passwords do not match' });
  } else {
    // call signup function from model
    User.signup(req.body, req.body.password)
      .then(data => {
        // log the user in
        User.login(data, req.body.password).then(data => {
          // respond with user data
          return res.status(200).json(data);
        });
      })
      .catch(err => {
        console.log(err);
        return res.status(500).json(err);
      });
  }
};

// update the array containing the charities % breakdown (aka 'series')
controller.updateSeries = (req, res) => {
  // call updateSeries from model
  User.updateSeries(req.body.series, req.params.id)
    .then(data => {
      // then json the user data (not just the series)
      return res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
};

// update the montly cap of a user
controller.updateMonthlyCap = (req, res) => {
  // call updateMC from model
  User.updateMonthlyCap(req.body.monthlyCap, req.params.id)
    .then(data => {
      // then json the user data (not just the cap)
      return res.status(200).json(data);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json(err);
    });
};

module.exports = controller;
