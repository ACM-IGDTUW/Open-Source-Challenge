const app = require('./app');
const supertest = require('supertest');
const request = supertest(app);


it('Testing to see if Jest works', () => {
  expect(1).toBe(1);
});

it('gets the root endpoint', async done => {
  const response = await request.get('/');
  expect(response.status).toBe(200);
  done();
});

it('gets the register endpoint', async done => {
  const response = await request.get('/register');
  expect(response.status).toBe(200);
  done();
});
