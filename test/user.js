const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js');
const User = require('../models/user.js');

describe('Users', () => {
  let user;
  before((done) => {
    User
    .create({
      signupUsername: 'East of Eden',
      signupPassword: 'John Steinbeck',
      signupConfirm: 'img.jpg'
    })
    .then((new_user_record) => {
      user = new_user_record;
      console.log(new_user_record);
      done();
    })
  });

  it('GET /users/login returns a 200 status code and an array of all users ', (done) => {
    request(app)
    .get('/users/my_users')
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Array);
      done();
    });
  });

  it('POST /users returns a status code of 201 and returns the new user as an object', (done) => {
    request(app)
    .post('/users/my_users')
    .send({
      user: {
        title: 'Less Than Zero',
        author: 'Brett Easton Ellis',
        image: 'img.jpg'
      }
    })
    .end((err, results) => {
      expect(results.statusCode).to.equal(201);
      expect(results.body).to.not.be.an.instanceOf(Array);
      expect(results.body).to.be.an.instanceOf(Object);
      done();
    });
  });

  it('UPDATE /users/:user_id returns a statys code of 200 and returns the updated user', (done) => {
    request(app)
    .put(`/users/my_users/${user.id}`)
    .send({
      user: {
        title: 'The Road to Wigan Pier',
        author: 'George Orwell',
        image: 'img.jpg'
      }
    })
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      done();
    });
  });

  it('DELETE /users/:user_id returns a status code of 200 and returns the deleted user', (done) => {
    request(app)
    .delete(`/users/my_users/${user.id}`)
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      done();
    });
  });

});
