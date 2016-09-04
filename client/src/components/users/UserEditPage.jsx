import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import { update } from '../../actions/users';
import UserForm from './UserForm';
import { mapPageData } from '../../tools/propMappers';

const UserEditPage = ({ update, user }) => (
  <div className="container">
    <h1>Update user</h1>
    <UserForm onSubmit={(data) => update(user.id, data)} user={user} />
    <Link to="/users">Back</Link>
  </div>
);

export default connect(
  mapPageData,
  { update }
)(UserEditPage);
