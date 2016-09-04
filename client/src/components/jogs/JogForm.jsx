import React from 'react';

class JogForm extends React.Component {
  constructor() {
    super();

    this.state = {
      date: (new Date()).toISOString().substr(0, 10),
      duration: 10,
      distance: 2
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.jog) {
      this.setState(nextProps.jog);
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

    this.props.onSubmit({ jog: this.state });

    return false;
  }

  routerWillLeave() {
    if (this.state.changed) {
      return 'Jog is not saved! Are you sure you want to leave?';
    }

    return true;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <table>
          <tbody>
          <tr>
            <td>Date:</td>
            <td>
              <input
                type="date"
                name="date"
                value={this.state.date}
                onChange={this.handleChange}
                max={(new Date()).toISOString().substr(0, 10)}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Duration:</td>
            <td>
              <input
                type="number"
                name="duration"
                value={this.state.duration}
                onChange={this.handleChange}
                min="1"
                required
              /> min
            </td>
          </tr>
          <tr>
            <td>Distance:</td>
            <td>
              <input
                type="number"
                step="0.1"
                name="distance"
                value={this.state.distance}
                onChange={this.handleChange}
                min="0.1"
                required
              /> km
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

export default JogForm;