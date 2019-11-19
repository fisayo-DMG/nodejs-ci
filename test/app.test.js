const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { expect } = chai;
chai.use(chaiHttp);

describe('Server!', () => {
    it('Welcomes user to the api', (done) => {
        chai.request(app).get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.status).to.equal('success');
                expect(res.body.message).to.equal('Welcome To The Testing API');
                done();
            });
    });

    it('adds 2 numbers', (done) => {
        chai.request(app)
            .post('/add')
            .send({ num1: 5, num2: 4 })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body.status).to.equal('success');
                expect(res.body.result).to.equals(9);
                done();
            });
    });
});