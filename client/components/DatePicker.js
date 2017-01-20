import React from 'react';

class DatePicker extends React.Component {
  render() {
    return(
      <div>
        <form className="form-inline">
          <div className="navbar-form navbar-right form-group">
            <label htmlFor="exampleInputEmail2">Check Out.></label>
            <input type="date" className="form-control" id="exampleInputEmail2" placeholder="jane.doe@example.com"/>
          </div>
          <div className="navbar-form navbar-right form-group">
            <label htmlFor="exampleInputName2">Check In</label>
            <input type="date" className="form-control" id="exampleInputName2" placeholder="Jane Doe"/>
          </div>
        </form>
      </div>
    )
  }
}

export default DatePicker
