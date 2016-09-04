import { fromJS } from 'immutable';

import {
  SET_USER, SET_PAGE_DATA, SET_ERROR
} from '../actions';

function setFromJs(state, key, value) {
  return state.set(key, fromJS(value));
}

export default (state = fromJS({
  user: null,
  pageData: {},
  errorMessage: ''
}), action) => {
  switch (action.type) {
    case SET_USER:
      return setFromJs(state, 'user', action.user);
    case SET_PAGE_DATA:
      return setFromJs(state, 'pageData', action.pageData || {});
    case SET_ERROR:
      return setFromJs(state, 'errorMessage', action.message);
  }

  return state;
};
