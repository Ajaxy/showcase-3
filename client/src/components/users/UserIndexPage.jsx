import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { remove } from '../../actions/users';
import { mapPageData } from '../../tools/propMappers';

const UserIndexPage = ({ users, remove }) => (
  <div className="container">
    <h1>Users</h1>

    {users && users.length ?
      <table className="index">
        <tbody>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Jogs</th>
          <th />
        </tr>
        {users.map((user) => (
          <tr key={user.id}>
            <td>#{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role_name}</td>
            <td><Link to={`/users/${user.id}/jogs`}>{user.jogs_count}</Link></td>
            <td className="tools">
              <Link to={`/users/${user.id}/edit`} className="btn btn-success btn-xs">
                <span className="glyphicon glyphicon-edit" />
              </Link>
              <button className="btn btn-danger btn-xs" onClick={() => remove(user.id)}>
                <span className="glyphicon glyphicon-remove" />
              </button>
            </td>
          </tr>
        ))}
        </tbody>
      </table> :
      <div className="empty-index">No users available.</div>
    }
  </div>
);

export default connect(
  mapPageData,
  { remove }
)(UserIndexPage);
