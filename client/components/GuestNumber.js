import React from 'react';

class GuestNumber extends React.Component {
  constructor() {
    super();
    this.state = {value: '1'};
    this.handleChange = this.handleChange.bind(this);
    this.renderDropDown= this.renderDropDown.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}, function () {
      this.props.formatSearchUrl(this.state.value, 'guests');
    });
  }

  renderDropDown() {
    const rows = [];
    for (var i = 1; i < 17; i++) {
      rows.push(<option key={i} value={i}>{i}</option>);
    }
    return rows;
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange} className="form-control navbar-right navbar-form">
        {this.renderDropDown()}
      </select>
    );
  }
}

export default GuestNumber;
