import React from 'react';

class LoaderImg extends React.Component {
  render () {
    return(
      <div className='loading-animation-overlay'>
        <div className='loading-animation-container'>
          <img alt="" id="loader-img-plane" src="https://s3.amazonaws.com/toomanymiles-svgs/island.svg" />
          <p className="loading-cards-text">Loading Listings...</p>
        </div>
      </div>
    )
  }
}

export default LoaderImg;
