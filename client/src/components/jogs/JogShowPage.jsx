import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { mapPageData } from '../../tools/propMappers';
import './jogs.sass';

const JogShowPage = ({ jog }) => (
  <div className="container">
    {jog &&
    <div className="jog-info">
      <h1>Jog #{jog.id}</h1>
      <div>
        Date: {jog.date}
      </div>
      <div>
        Duration: {jog.duration} min
      </div>
      <div>
        Distance: {jog.distance} km
      </div>
      <div>
        Average speed: {jog.avg_speed} km/h
      </div>
      <Link to={`/jogs/${jog.id}/edit`}>Edit</Link>
    </div>
    }

    <Link to="/jogs">Back</Link>
  </div>
);

export default connect(
  mapPageData
)(JogShowPage);
