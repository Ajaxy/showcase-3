import React from 'react';
import { Router, Route, IndexRedirect, browserHistory } from 'react-router';

import { changePage } from '../actions';
import App from './app/App';
import JogIndexPage from './jogs/JogIndexPage';
import JogShowPage from './jogs/JogShowPage';
import JogNewPage from './jogs/JogNewPage';
import JogEditPage from './jogs/JogEditPage';
import UserIndexPage from './users/UserIndexPage';
import UserEditPage from './users/UserEditPage';

export default (store) => {
  browserHistory.listen((pageState) => {
    if (pageState.pathname != '/') {
      store.dispatch(changePage(pageState.pathname, pageState.query));
    }
  });

  return (
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/jogs" />
        <Route path="/jogs" component={JogIndexPage} />
        <Route path="/jogs/new" component={JogNewPage} />
        <Route path="/jogs/:id" component={JogShowPage} />
        <Route path="/jogs/:id/edit" component={JogEditPage} />
        <Route path="/users" component={UserIndexPage} />
        <Route path="/users/:id/jogs" component={JogIndexPage} />
        <Route path="/users/:id/edit" component={UserEditPage} />
        <Route path="*" component={JogIndexPage} />
      </Route>
    </Router>
  );
};