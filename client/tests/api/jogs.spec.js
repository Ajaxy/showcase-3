/* globals describe, it */

import { expect } from 'chai';

import * as api from '../../src/tools/api';
import * as schemas from './schemas/jogs';
import credentials from './credentials';

describe('jogs', () => {
  it('/index [regular]', () => {
    return api.get('/jogs', null, credentials.regular)
      .then((res) => expect(res).to.be.jsonSchema(schemas.index));
  });

  it('/index [manager]', () => {
    return api.get('/jogs', null, credentials.manager)
      .then((res) => expect(res).to.be.jsonSchema(schemas.index));
  });

  it('/index [admin]', () => {
    return api.get('/jogs', null, credentials.admin)
      .then((res) => expect(res).to.be.jsonSchema(schemas.index));
  });
});