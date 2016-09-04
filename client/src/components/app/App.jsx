import React from 'react';
import { connect } from 'react-redux';

import Header from './header/Header';
import Error from './Error';
import { mapState } from '../../tools/propMappers';

import './app.sass';

const App = ({ pageData, errorMessage, children }) => (
  <div id="app-container">
    <Header />
    <Error>{errorMessage}</Error>
    <div id="page" className={!Object.keys(pageData).length ? 'loading' : ''}>
      {children}
    </div>
  </div>
);

export default connect(
  mapState(['pageData', 'errorMessage'])
)(App);
