import React from 'react';

class JogFilter extends React.Component {
  constructor() {
    super();

    this.state = {
      dateFrom: (new Date()).toISOString().substr(0, 10),
      dateTo: (new Date()).toISOString().substr(0, 10)
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value, type, checked } = e.target;
    const state = this.state;

    state[name] = type == 'checkbox' ? checked : value;
    this.setState({
      [name]: type == 'checkbox' ? checked : value
    });

    if (state.enabled) {
      const { dateFrom, dateTo } = state;
      this.props.setupFilter({ dateFrom, dateTo });
    } else {
      this.props.clearFilter();
    }
  }

  render() {
    return (
      <div className="filters">
        <label>
          <input
            type="checkbox"
            name="enabled"
            value={this.state.enabled ? 'on' : 'off'}
            checked={this.state.enabled}
            onClick={this.handleChange}
          /> &nbsp;
        </label>

        <input
          type="date"
          name="dateFrom"
          value={this.state.dateFrom}
          onChange={this.handleChange}
          max={(new Date()).toISOString().substr(0, 10)}
        />
        &nbsp;—&nbsp;
        <input
          type="date"
          name="dateTo"
          value={this.state.dateTo}
          onChange={this.handleChange}
          max={(new Date()).toISOString().substr(0, 10)}
        />
      </div>
    );
  }
}

export default JogFilter;