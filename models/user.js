const db = require('../lib/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = {};
// salt is a parameter required by bcryptjs's .hashSync()
const salt = 10;

// signup function
User.signup = user => {
  // hash password
  let hashed = bcrypt.hashSync(user.password, salt);
  // insert a user's info and hashed password, returning all
  return db.oneOrNone(
    `INSERT INTO users
      (username, password, monthlyCap, series)
      VALUES ($1, $2, $3, $4)
      RETURNING *;`,
    [user.username, hashed, user.monthlyCap, user.series]
  );
};

// login function
User.login = (user, password) => {
  // grab the user's data
  return db
    .oneOrNone(
      `SELECT *
    FROM users
    WHERE username = $1;`,
      [user.username]
    )
    .then(data => {
      // compare the entered password to the hashed one in the db
      const match = bcrypt.compareSync(password, data.password);
      if (match) {
        // if they match, create a jwt and...
        const myToken = jwt.sign(
          { username: data.username },
          process.env.SECRET
        );
        // ...return that jwt (along with user info)
        return {
          username: data.username,
          monthlyCap: data.monthlycap,
          series: data.series,
          user_id: data.user_id,
          token: myToken
        };
      } else {
        // error message if mismatch
        return { failed: 'Incorect Password.' };
      }
    });
};

// update the array containing the charities % breakdown (aka 'series')
User.updateSeries = (series, id) => {
  return db.oneOrNone(
    `UPDATE users
    SET series = $1
    WHERE user_id = $2
    RETURNING *;`,
    [series, id]
  );
};

// update the montly cap of a user
User.updateMonthlyCap = (monthlyCap, id) => {
  return db.oneOrNone(
    `UPDATE users
    SET monthlycap = $1
    WHERE user_id = $2
    RETURNING *;`,
    [monthlyCap, id]
  );
};

module.exports = User;
