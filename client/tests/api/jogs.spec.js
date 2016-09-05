/* globals describe, it */

import { expect } from 'chai';

import * as api from '../../src/tools/api';
import * as schemas from './schemas/jogs';
import * as commonSchemas from './schemas/common';
import credentials from './credentials';

describe('jogs', () => {
  it('own index for [regular] ', () => {
    return api.get('/jogs', null, credentials.regular)
      .then((res) => expect(res).to.be.jsonSchema(schemas.index));
  });

  it('own index for [manager]', () => {
    return api.get('/jogs', null, credentials.manager)
      .then((res) => expect(res).to.be.jsonSchema(schemas.index));
  });

  it('own index for [admin]', () => {
    return api.get('/jogs', null, credentials.admin)
      .then((res) => expect(res).to.be.jsonSchema(schemas.index));
  });

  it('foreign index for [regular] ', () => {
    return api.get('/users/7/jogs', null, credentials.regular)
      .catch((err) => err)
      .then((res) => expect(res).to.be.jsonSchema(commonSchemas.forbidden));
  });

  it('foreign index for [manager]', () => {
    return api.get('/users/7/jogs', null, credentials.manager)
      .then((res) => expect(res).to.be.jsonSchema(schemas.index));
  });

  it('foreign index for [admin]', () => {
    return api.get('/users/8/jogs', null, credentials.admin)
      .then((res) => expect(res).to.be.jsonSchema(schemas.index));
  });

  it('foreign edit for [regular] ', () => {
    return api.get('/jogs/6/edit', null, credentials.regular)
      .catch((err) => err)
      .then((res) => expect(res).to.be.jsonSchema(commonSchemas.forbidden));
  });

  it('foreign edit for [manager]', () => {
    return api.get('/jogs/6/edit', null, credentials.manager)
      .catch((err) => err)
      .then((res) => expect(res).to.be.jsonSchema(commonSchemas.forbidden));
  });

  it('foreign edit for [admin]', () => {
    return api.get('/jogs/1/edit', null, credentials.admin)
      .then((res) => expect(res).to.be.jsonSchema(schemas.show));
  });
});