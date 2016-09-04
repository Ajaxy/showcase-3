import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { update } from '../../actions/jogs';
import JogForm from './JogForm';
import { mapPageData } from '../../tools/propMappers';

const JogEditPage = ({ update, jog }) => (
  <div className="container">
    <h1>Update jog</h1>
    <JogForm onSubmit={(data) => update(jog.id, data)} jog={jog} />
    <Link to="/jogs">Back</Link>
  </div>
);

export default connect(
  mapPageData,
  { update }
)(JogEditPage);
