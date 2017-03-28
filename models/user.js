const db = require('../lib/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

User.login = (user, password) => {
  console.log('hi', user)
  return db.oneOrNone(
    `SELECT *
    FROM users
    WHERE username = $1;`,
    [user.username]
  )
  .then((data) => {
    console.log('here', password, data.password)
    const match = bcrypt.compareSync(password, data.password);
    if (match) {
      const myToken = jwt.sign({ username: data.username }, process.env.SECRET);
      return {token: myToken};
    } else {
      return {message: 'login information incorrect'};
    }
  })
}

module.exports = User;
