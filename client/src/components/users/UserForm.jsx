import React from 'react';

class UserForm extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      role: 1
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user) {
      this.setState(nextProps.user);
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      changed: true
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.onSubmit({ user: this.state });

    return false;
  }

  routerWillLeave() {
    if (this.state.changed) {
      return 'User is not saved! Are you sure you want to leave?';
    }

    return true;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
          <tr>
            <td>Name:</td>
            <td>
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Role:</td>
            <td>
              <select
                name="role"
                value={this.state.role}
                onChange={this.handleChange}
                required
              >
                <option value="1">Regular</option>
                <option value="5">Manager</option>
                <option value="10">Admin</option>
              </select>
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button type="submit" className="btn btn-success">Save</button>
            </td>
          </tr>
          </tbody>
        </table>
      </form>
    );
  }
}

export default UserForm;