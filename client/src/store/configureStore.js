import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import { setError } from '../actions';
import reducer from '../reducers';
import * as page from '../tools/page';

const api = ({ dispatch }) => (next) => (action) => {
  if (action && action.redirect) {
    return page.change(action.redirect);
  }

  if (action && action.error) {
    return dispatch(setError(action.error));
  }

  return next(action);
};

export default () => {
  return createStore(
    reducer,
    applyMiddleware(
      thunk,
      promise,
      api
    )
  );
};
