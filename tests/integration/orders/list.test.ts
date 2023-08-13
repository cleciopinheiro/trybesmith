import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import OrderModel from '../../../src/database/models/order.model';
import { OrdersMock } from '../../mocks/OrdersMock';

chai.use(chaiHttp);

describe('##GET /orders', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Teste se é possível listar todos os pedidos', async function () {
    const OrderInstance = OrdersMock.map((order) => OrderModel.build(order))
    sinon.stub(OrderModel, 'findAll').resolves(OrderInstance);

    const response = await chai.request(app)
      .get('/orders');
      
    expect(response).to.have.status(200);
  });
});
