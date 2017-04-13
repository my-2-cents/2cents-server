const db = require('../lib/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const salt = 10;
const User = {};

User.signup = user => {
  let hashed = bcrypt.hashSync(user.password, salt);
  return db.oneOrNone(
    `INSERT INTO users
      (username, password, monthlyCap, series)
      VALUES ($1, $2, $3, $4)
      RETURNING *;`,
    [user.username, hashed, user.monthlyCap, user.series]
  );
};

User.login = (user, password) => {
  return db
    .oneOrNone(
      `SELECT *
    FROM users
    WHERE username = $1;`,
      [user.username]
    )
    .then(data => {
      const match = bcrypt.compareSync(password, data.password);
      if (match) {
        const myToken = jwt.sign(
          { username: data.username },
          process.env.SECRET
        );
        return {
          username: data.username,
          monthlyCap: data.monthlycap,
          series: data.series,
          user_id: data.user_id,
          token: myToken
        };
      } else {
        return { failed: 'Incorect Password.' };
      }
    });
};

User.updateSeries = (series, id) => {
  return db.oneOrNone(
    `UPDATE users
    SET series = $1
    WHERE user_id = $2
    RETURNING *;`,
    [series, id]
  );
};

User.updateMonthlyCap = (monthlycap, id) => {
  console.log('model', monthlycap, id)
  return db.oneOrNone(
    `UPDATE users
    SET monthlycap = $1
    WHERE user_id = $2
    RETURNING *;`,
    [monthlycap, id]
  );
};

module.exports = User;
