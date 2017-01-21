import React from 'react';

class GuestNumber extends React.Component {
  constructor() {
    super();
    this.state = {value: '1'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}, function () {
      this.props.formatSearchUrl(this.state.value, 'guests')
    });
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange} className="form-control navbar-right navbar-form">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    );
  }
}

export default GuestNumber
