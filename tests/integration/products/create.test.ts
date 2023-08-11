import sinon from 'sinon';
import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';

import app from '../../../src/app';
import ProductsModel from '../../../src/database/models/product.model';
import { productMock } from '../../mocks/ProductsMock';

chai.use(chaiHttp);

describe('##POST /products', function () { 
  beforeEach(function () { sinon.restore(); });

  it('Teste se é possível cadastrar um produto', async function () {
    const ProductInstance = ProductsModel.build(productMock);
    sinon.stub(ProductsModel, 'create').resolves(ProductInstance);

    const response = await chai.request(app)
      .post('/products')
      .send(productMock);

    expect(response).to.have.status(201);
    expect(response.body).to.be.an('object');
  });
});
