import React from 'react';
import { connect } from 'react-redux';

import { mapPageData } from '../../tools/propMappers';

const JogIndexPage = ({ weeks }) => (
  <div className="container">
    <h1>Jogging progress by week</h1>

    {weeks && weeks.length ?
      <table className="index">
        <tbody>
        <tr>
          <th>#</th>
          <th>Week</th>
          <th>Jogs</th>
          <th>Average duration</th>
          <th>Average distance</th>
          <th>Average speed</th>
        </tr>
        {weeks.map((week, i) => (
          <tr key={i}>
            <td>#{i + 1}</td>
            <td>{week.dates}</td>
            <td>{week.jogs_count}</td>
            <td>{week.avg_duration} min</td>
            <td>{week.avg_distance} km</td>
            <td>{week.avg_speed} km/h</td>
          </tr>
        ))}
        </tbody>
      </table> :
      <div className="empty-index">No jogs available.</div>
    }
  </div>
);

export default connect(
  mapPageData
)(JogIndexPage);
