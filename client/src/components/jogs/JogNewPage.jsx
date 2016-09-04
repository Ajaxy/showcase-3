import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { create } from '../../actions/jogs';
import JogForm from './JogForm';

const JogNewPage = ({ create }) => (
  <div className="container">
    <h1>Create jog</h1>
    <JogForm onSubmit={create} />
    <Link to="/jogs">Back</Link>
  </div>
);

export default connect(
  null,
  { create }
)(JogNewPage);
