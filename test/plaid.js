const request = require('supertest');
const expect = require('chai').expect;

describe('Plaid', () => {

  let plaid;
  before((done) => {
    // Book
    // .addBook({
    //   title: 'East of Eden',
    //   author: 'John Steinbeck',
    //   image: 'img.jpg'
    // })
    // .then((new_book_record) => {
    //   book = new_book_record;
    //   console.log(new_book_record);
    //   done();
    // })
  });

  it('GET /books/my_books returns a 200 status code and an array of all books ', (done) => {
    request(app)
    .get('/books/my_books')
    .end((err, results) => {
      expect(results.statusCode).to.equal(200);
      expect(results.body).to.be.an.instanceOf(Array);
      done();
    });
  });
});
