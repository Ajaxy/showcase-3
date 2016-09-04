import React from 'react';

export default (props) => (
  <div className="user">
    <img src={props.image} alt="{props.name}" />
    <span className="name">{props.name}</span>

    <button className="btn btn-danger btn-xs" onClick={props.onSignOut}>
      <span className="glyphicon glyphicon-log-out" />&nbsp;Logout
    </button>
  </div>
);
