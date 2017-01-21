import React from 'react';

class Listing extends React.Component {
  render() {
    const info = this.props.info;
    return(
      <div className="row listing">
        <div className="col-md-3">
          <a href={`http://www.airbnb.com/rooms/${info.id}`}>
            <img className="img-responsive" src={info.picture_url} alt={info.name}/>
          </a>
        </div>
        <div className="col-md-9">
          <h3 className="price">{info.price_formatted}<span className="per-night">  per night</span></h3>
          <a href={`http://www.airbnb.com/rooms/${info.id}`}>
            <h3>{info.name}</h3>
          </a>
          <h6>{info.smart_location}</h6>
        </div>
      </div>
    );
  }
}

export default Listing;
