const db = require('../lib/db');
const bcrypt = require('bcryptjs');

const salt = 10;
const User = {};

User.signup = (user) => {
  console.log(user)
  if (user.signupPassword === user.signupConfirm) {
    return db.oneOrNone(
      `INSERT INTO users
      (username, password)
      VALUES ($1, $2)
      RETURNING *;`,
      [user.signupUsername, bcrypt.hashSync(user.signupPassword, salt), 0]
    );
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

module.exports = User;
