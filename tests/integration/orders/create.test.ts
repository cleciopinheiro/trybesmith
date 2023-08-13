import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import OrderModel from '../../../src/database/models/order.model';
import app from '../../../src/app';
import { buildOrderMock, createOrderMock } from '../../mocks/OrdersMock';
import UserModel from '../../../src/database/models/user.model';
import UserMock from '../../mocks/UserMock';
import ProductModel from '../../../src/database/models/product.model';

chai.use(chaiHttp);

const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjkxOTYxMzcyfQ.kiCjQX2I3zStpMtlasRhOSF5C98NS2Gt9pNMZyU8UEs'

describe('##POST /orders', function () { 
  beforeEach(function () { sinon.restore(); });
  it('Teste se é possível criar um novo pedido', async function () {
    const UserInstance = UserModel.build(UserMock);
    const OrderInstance = OrderModel.build(buildOrderMock);
    
    sinon.stub(UserModel, 'findOne').resolves(UserInstance);
    sinon.stub(OrderModel, 'create').resolves(OrderInstance);
    sinon.stub(ProductModel, 'update').resolves();

    const response = await chai.request(app)
      .post('/orders')
      .send(createOrderMock)
      .set("Authorization", token)
      
    expect(response).to.have.status(201);
  });
});
