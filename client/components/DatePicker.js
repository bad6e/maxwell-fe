import React from 'react';

class DatePicker extends React.Component {
  constructor() {
    super();

    this.handleCheckin = this.handleCheckin.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);

    this.state = {
      checkin: '',
      checkout: ''
    };
  }

  handleCheckin(event) {
    this.setState({checkin: event.target.value}, () => {
      this.props.formatSearchUrl(this.state.checkin, 'checkin');
    });
  }

  handleCheckout(event) {
    this.setState({checkout: event.target.value}, () => {
      this.props.formatSearchUrl(this.state.checkout, 'checkout');
    });
  }

  render() {
    return(
      <div>
        <form className="form-inline">
          <div className="navbar-form navbar-right form-group">
            <label className="label-date" htmlFor="exampleInputEmail2">Check Out</label>
            <input type="date" className="form-control" id="exampleInputEmail2" onChange={this.handleCheckout} value={this.state.checkout}/>
          </div>
          <div className="navbar-form navbar-right form-group">
            <label className="label-date" htmlFor="exampleInputName2">Check In</label>
            <input type="date" className="form-control" id="exampleInputName2" onChange={this.handleCheckin} value={this.state.checkin}/>
          </div>
        </form>
      </div>
    );
  }
}

export default DatePicker;
