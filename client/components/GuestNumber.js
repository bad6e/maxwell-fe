import React from 'react';
import { connect } from 'react-redux';
import { handleParameterUpdates } from '../actions/actionCreators';

class GuestNumber extends React.Component {
  constructor() {
    super();
    this.renderDropDown= this.renderDropDown.bind(this);
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
          <select value={this.props.numberOfGuests} onChange={(event) => this.props.handleParameterUpdates('numberOfGuests', event.target.value)} className="form-control navbar-right navbar-form guest-select" id="exampleInputGuests">
            {this.renderDropDown(16)}
          </select>
        </div>
      </form>
    );
  }
}

export default GuestNumber;
