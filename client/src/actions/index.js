/* global FB */

import * as api from '../tools/api';
import * as auth from '../tools/auth';
import * as page from '../tools/page';

export const SET_USER = 'SET_USER';
export const SET_PAGE_DATA = 'SET_PAGE_DATA';
export const SET_ERROR = 'SET_ERROR';

export const setUser = (user) => {
  return { type: SET_USER, user };
};

const ERROR_SHOW_TIMEOUT = 3000;
let errorTimeout = null;
export const setError = (message) => (dispatch) => {
  if (errorTimeout) {
    clearTimeout(errorTimeout);
    errorTimeout = null;
  }

  dispatch({ type: SET_ERROR, message });
  if (message) {
    errorTimeout = setTimeout(() => dispatch({ type: SET_ERROR, message: null }), ERROR_SHOW_TIMEOUT);
  }
};

export const signInFacebook = () => (dispatch) => {
  FB.login(({ status, authResponse }) => {
    if (status != 'connected') {
      dispatch(setError('Authentication failed.'));
      return;
    }

    api.get('/auth/facebook', { access_token: authResponse.accessToken })
      .then((user) => {
        auth.setCredentials(user.credentials);
        dispatch(setUser(user));
        page.refresh();
      })
      .catch((err) => dispatch(setError(err)));
  });
};

export const signOut = () => (dispatch) => {
  auth.deleteCredentials();
  dispatch(setUser(null));
  page.refresh();
};

const setPageData = (pageData) => {
  return { type: SET_PAGE_DATA, pageData };
};

export const changePage = (url, query) => (dispatch) => {
  dispatch(setPageData(null));
  dispatch(setError(null));

  api.get(url, query)
    .then((pageData) => {
      if (pageData && pageData.error) {
        dispatch(setError(pageData.error));
      } else if (pageData) {
        dispatch(setPageData(pageData));
      }
    });
};