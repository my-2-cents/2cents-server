const db = require('../lib/db');
const bcrypt = require('bcryptjs');

const salt = 10;
const User = {};

User.create = (user) => {
  if (user.signupPassword === user.signupConfirm) {
    return db.oneOrNone('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *;',
      [req.body.signupUsername, bcrypt.hashSync(req.body.signupPassword, salt), 0])
      .then( () => {
        res.signupResult = {signup: true}
        next()
      })
    .catch(error => console.log(error))
  } else {
    res.signupResult = {signup: false}
    next();
    return;
  }
}

User.authenticate = (user) => {
  db.one('SELECT * FROM users WHERE username = ($1);', [user.loginUsername])
    .then((data) => {
      const match = bcrypt.compareSync(user.loginPassword, data.password);
      if (match) {
        res.loginResult = data
        next();
      } else {
        res.loginResult = {failed: "failed"}
        next();
        return
      }
    })
  .catch(error => console.log(error))
}

module.exports = {
  createUser,
  authenticate
}
