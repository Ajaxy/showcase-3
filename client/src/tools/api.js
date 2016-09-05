import 'isomorphic-fetch';
import qs from 'qs';

import config from '../config';
import * as auth from './auth';

export function get(url, query, credentials) {
  if (query && Object.keys(query).length) {
    url += `?${qs.stringify(query)}`;
  }

  return request('get', url, null, credentials);
}

export function post(url, params, credentials) {
  return request('post', url, params, credentials);
}

export function put(url, params, credentials) {
  return request('put', url, params, credentials);
}

export function del(url, params, credentials) {
  return request('delete', url, params, credentials);
}

function request(method, url, params, credentials = auth.getCredentials()) {
  const opts = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  };

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
    .then((res) => {
      if (res.error || !res.result) {
        return Promise.reject(res);
      }

      return res.result;
    });
}