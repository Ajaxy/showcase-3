import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { signInFacebook, signOut } from '../../../actions';
import UserInfo from './UserInfo';
import FacebookLogin from './FacebookLogin';
import { mapState } from '../../../tools/propMappers';

import './header.sass';

const Header = (props) => (
  <div id="header" className="navbar navbar-inverse navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button className="navbar-toggle" data-target=".navbar-collapse" data-toggle="collapse" type="button">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <Link to="/" className="navbar-brand">Home</Link>
      </div>

      <div className="user">
        {props.user ?
          <UserInfo {...props.user} onSignOut={props.signOut} /> :
          <FacebookLogin onClick={props.signInFacebook} />
        }
      </div>

      <div className="collapse navbar-collapse">
        {props.user &&
        <ul className="nav navbar-nav">
          <li><Link to="/jogs" activeClassName="active">My jogs</Link></li>
          {props.user.acl.can_manage_users &&
          <li><Link to="/users" activeClassName="active">Users</Link></li>
          }
        </ul>
        }
      </div>
    </div>
  </div>
);

export default connect(
  mapState(['user']),
  { signInFacebook, signOut }
)(Header);
