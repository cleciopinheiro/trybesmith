import sinon from 'sinon';
import chai, { expect } from 'chai';
import app from '../../../src/app';
import chaiHttp from 'chai-http';
import UserModel from '../../../src/database/models/user.model';
import { nonExistingUser, nonExistingPassword, userInvalid,
userExisting, userValid } from '../../mocks/LoginMock';

chai.use(chaiHttp);

describe('##POST /login', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Teste se não enviar o campo "username" retorna um erro', async function () {
    const response = await chai.request(app)
      .post('/login')
      .send(nonExistingUser);

    expect(response).to.have.status(400);
  });

  it('Teste se não enviar o campo "password" retorna um erro', async function () {
    const response = await chai.request(app)
      .post('/login')
      .send(nonExistingPassword);

    expect(response).to.have.status(400);
  });

  it('Teste se enviar um usuário não cadastrado retorna um erro', async function () {
    sinon.stub(UserModel, 'findOne').resolves(null);
    const response = await chai.request(app)
      .post('/login')
      .send(userInvalid);

    expect(response).to.have.status(401);
  });

  it('Teste se ao enviar um usuário válido retorna um token', async function () {
    const LoginInstance = UserModel.build(userExisting);
    sinon.stub(UserModel, 'findOne').resolves(LoginInstance);
    const response = await chai.request(app)
      .post('/login')
      .send(userValid);

    expect(response).to.have.status(200);
  });
});
