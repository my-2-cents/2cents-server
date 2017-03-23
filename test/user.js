const request = require('supertest');
const expect = require('chai').expect;
const app = require('../index.js');
const User = require('../models/user.js');

describe('Users', () => {
  let user;
  // before((done) => {
  //   User
  //   .create({
  //     signupUsername: 'East of Eden',
  //     signupPassword: 'John Steinbeck',
  //     signupConfirm: 'img.jpg'
  //   })
  //   .then((new_user_record) => {
  //     user = new_user_record;
  //     console.log(new_user_record);
  //     done();
  //   })
  // });
  //
  // it('POST /users/login returns a 200 status code and a user object', (done) => {
  //   request(app)
  //   .post('/users/login')
  //   .send({
  //     loginUsername: new_user_record.signupUsername,
  //     loginPassword: new_user_record.signupPassword
  //   })
  //   .end((err, results) => {
  //     expect(results.statusCode).to.equal(200);
  //     expect(results.body).to.be.an.instanceOf(Array);
  //     done();
  //   });
  // });
});
