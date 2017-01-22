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
      <form className="form-inline">
        <div className="navbar-form navbar-right form-group">
          <label className="label-date" htmlFor="exampleInputGuests">Guests</label>
          <select value={this.state.value} onChange={this.handleChange} className="form-control navbar-right navbar-form guest-select" id="exampleInputGuests">
            {this.renderDropDown(16)}
          </select>
        </div>
      </form>
    );
  }
}

export default GuestNumber;
