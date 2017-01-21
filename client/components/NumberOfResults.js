import React from 'react';

class NumberOfResults extends React.Component {
  render() {
    return(
      <div className="row number-of-results">
        <h5 className="results">{this.props.count} Results</h5>
      </div>
    );
  }
}

export default NumberOfResults;
