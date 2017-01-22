import React from 'react';

class GuestNumber extends React.Component {
  constructor() {
    super();
    this.state = {value: '1'};
    this.handleChange = this.handleChange.bind(this);
    this.renderDropDown= this.renderDropDown.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value}, () => {
      this.props.formatSearchUrl(this.state.value, 'guests');
    });
  }

  renderDropDown(numberOfRows) {
    return Array.from({ length: (numberOfRows)})
                .map((e, i) => {
                  const rows = i + 1;
                  return <option key={rows} value={rows}>{rows}</option>;
                });
  }

  render() {
    return (
      <select value={this.state.value} onChange={this.handleChange} className="form-control navbar-right navbar-form">
        {this.renderDropDown(16)}
      </select>
    );
  }
}

export default GuestNumber;
