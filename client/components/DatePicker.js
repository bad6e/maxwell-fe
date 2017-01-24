import React from 'react';

class DatePicker extends React.Component {
  constructor() {
    super();
    this.handleCheckin = this.handleCheckin.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  handleCheckin(event) {
    this.props.handleParameterUpdates('checkin', event.target.value)
  }

  handleCheckout(event) {
    this.props.handleParameterUpdates('checkout', event.target.value)
  }

  render() {
    return(
      <div>
        <form className="form-inline">
          <div className="navbar-form navbar-right form-group">
            <label className="label-date" htmlFor="exampleInputEmail2">Check Out</label>
            <input type="date" className="form-control" id="exampleInputEmail2" onChange={this.handleCheckout} value={this.props.checkout}/>
          </div>
          <div className="navbar-form navbar-right form-group">
            <label className="label-date" htmlFor="exampleInputName2">Check In</label>
            <input type="date" className="form-control" id="exampleInputName2" onChange={this.handleCheckin} value={this.props.checkin}/>
          </div>
        </form>
      </div>
    );
  }
}

export default DatePicker;
