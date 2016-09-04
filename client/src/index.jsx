import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import config from './config';
import { setUser } from './actions';
import configureStore from './store/configureStore';
import router from './components/router';
import * as api from './tools/api';
import * as auth from './tools/auth';
import facebookSdk from './vendor/facebookSdk';

import './global.sass';

const store = configureStore();

facebookSdk(config.facebook_app_id);

if (auth.hasCredentials()) {
  api.get('/auth/info')
    .then((res) => store.dispatch(setUser(res)))
    .catch(() => {
    })
    .then(render);
} else {
  render();
}

function render() {
  ReactDOM.render(
    <Provider store={store}>{router(store)}</Provider>,
    document.getElementById('app')
  );
}