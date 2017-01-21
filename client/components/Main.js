import React from 'react';
import { Link } from 'react-router';
import Listing from './Listing';
import GuestNumber from './GuestNumber';
import NumberOfResults from './NumberOfResults';
import Search from './Search';
import DatePicker from './DatePicker';

class Main extends React.Component {
  constructor() {
    super();

    this.renderListings = this.renderListings.bind(this);
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  renderListings(listings) {
    return listings.map(listing => {
      const info = listing.listing;
      return (
        <Listing
          key={info.id}
          info={info}
        />
      )
    })
  }

  render() {
    const { places = [], count } = this.props.places || {};
    return (
      <div className="row">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <Search/>
              <GuestNumber/>
              <DatePicker/>
            </div>
          </div>
        </nav>
        <NumberOfResults
          count={count}
        />
        {this.renderListings(places)}
      </div>
    )
  }
};

export default Main;
