import React from 'react';

class GuestNumber extends React.Component {
  render() {

    return(
      <div>
        <select className="form-control navbar-right navbar-form">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    )
  }
}

export default GuestNumber
