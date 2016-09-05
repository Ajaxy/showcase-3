import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { setError } from '../actions';
import reducer from '../reducers';
import * as page from '../tools/page';

const api = ({ dispatch }) => (next) => (action) => {
  if (action && typeof action.then == 'function') {
    return action.then(
      (result) => (result.redirect ? page.change(result.redirect) : next(result)),
      (response) => dispatch(setError(response.error))
    );
  }

  return next(action);
};

export default () => {
  return createStore(
    reducer,
    applyMiddleware(
      thunk,
      api
    )
  );
};
