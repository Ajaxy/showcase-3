import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import JogFilter from './JogFilter';
import { remove, setupFilter, clearFilter } from '../../actions/jogs';
import { mapPageData } from '../../tools/propMappers';

const JogIndexPage = ({ jogs, manageable, remove, setupFilter, clearFilter }) => (
  <div className="container">
    <h1>Jogs</h1>

    <JogFilter setupFilter={setupFilter} clearFilter={clearFilter} />

    {jogs && jogs.length ?
      <table className="index">
        <tbody>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Duration</th>
          <th>Distance</th>
          <th>Average speed</th>
          <th />
        </tr>
        {jogs.map((jog) => (
          <tr key={jog.id}>
            <td><Link to={`/jogs/${jog.id}`}>#{jog.id}</Link></td>
            <td>{jog.date}</td>
            <td>{jog.duration} min</td>
            <td>{jog.distance} km</td>
            <td>{jog.avg_speed} km/h</td>
            <td className="tools">
              {manageable &&
              <div>
                <Link to={`/jogs/${jog.id}/edit`} className="btn btn-success btn-xs">
                  <span className="glyphicon glyphicon-edit" />
                </Link>
                <button className="btn btn-danger btn-xs" onClick={() => remove(jog.id)}>
                  <span className="glyphicon glyphicon-remove" />
                </button>
              </div>
              }
            </td>
          </tr>
        ))}
        </tbody>
      </table> :
      <div className="empty-index">No jogs created so far.</div>
    }

    <Link to="/jogs/new" className="btn btn-success">
      <span className="glyphicon glyphicon-flash" />&nbsp;Create jog
    </Link>
  </div>
);

export default connect(
  mapPageData,
  { remove, setupFilter, clearFilter }
)(JogIndexPage);
