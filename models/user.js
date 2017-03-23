const db = require('../lib/db');
const bcrypt = require('bcryptjs');

const salt = 10;
const User = {};

User.signup = (user) => {
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

User.login = (user) => {
  console.log('in model user', user)
  return db.oneOrNone(
    `SELECT *
    FROM users
    WHERE username = $1;`,
    [user.loginUsername]
  )
  .then((data) => {
    console.log('in model data', data)
    const match = bcrypt.compareSync(user.loginPassword, data.password);
    if (match) {
      return data;
    } else {
      next();
      return 'nope';
    }
  })
}

module.exports = User;
