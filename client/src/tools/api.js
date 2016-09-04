import 'whatwg-fetch';
import qs from 'qs';

import config from '../config';
import * as auth from './auth';

export function get(url, query) {
  if (query && Object.keys(query).length) {
    url += `?${qs.stringify(query)}`;
  }

  return request('get', url);
}

export function post(url, params) {
  return request('post', url, params);
}

export function put(url, params) {
  return request('put', url, params);
}

export function del(url, params) {
  return request('delete', url, params);
}

function request(method, url, params) {
  const opts = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };
  const credentials = auth.getCredentials();

  if (credentials) {
    opts.headers['X-User-Email'] = credentials.email;
    opts.headers['X-User-Token'] = credentials.token;
  }

  if (params) {
    opts.body = JSON.stringify(params);
  }

  return fetch(`${config.url_api}${url}`, opts)
    .then((res) => res.json())
    .catch(() => ({ error: '500: Server error' }))
    .then((res) => (res.error ? res : res.result));
}