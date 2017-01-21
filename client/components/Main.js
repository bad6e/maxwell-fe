import React from 'react';
import { Link } from 'react-router';
import Listing from './Listing';
import GuestNumber from './GuestNumber';
import NumberOfResults from './NumberOfResults';
import Search from './Search';
import DatePicker from './DatePicker';
import Flash from './Flash';
import LoaderImg from './LoaderImg';

class Main extends React.Component {
  constructor() {
    super();

    this.renderListings = this.renderListings.bind(this);
    this.formatSearchUrl = this.formatSearchUrl.bind(this);
    this.search = this.search.bind(this);
    this.checkIfSearchBlank = this.checkIfSearchBlank.bind(this);
    this.removeFlashMessage = this.removeFlashMessage.bind(this);

    this.state = {
      location: '',
      guests: '1',
      blank: false
    }
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  removeFlashMessage() {
    this.setState({blank: false})
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

  checkIfSearchBlank(value) {
    if (value === '') {
      this.setState({blank: true})
    } else {
      this.setState({blank: false}, function() {
        this.search();
      })
    }
  }

  formatSearchUrl(value, selector) {
    if (selector === 'location') {
      this.setState({ location: value });
    }

    if (selector === 'guests') {
      this.setState({ guests: value });
    }
  }

  search() {
    const url = `https://api.airbnb.com/v1/listings/search?key=bcxkf89pxe8srriv8h3rj7w9t&location=${this.state.location}&guests=${this.state.guests}`
    this.props.searchPlaces(url);
  }

  render() {
    const { places = [], count } = this.props.places || {};
    const loadImg = this.props.places.loading ? <LoaderImg/> : null;
    const flash = this.state.blank ? <Flash message="Location can't be blank!" removeFlashMessage={this.removeFlashMessage}/> : null;

    return (
      <div className="row">
        {loadImg}
        {flash}
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <Search
                formatSearchUrl={this.formatSearchUrl}
                checkIfSearchBlank={this.checkIfSearchBlank}
                search={this.search}
              />
              <GuestNumber
                formatSearchUrl={this.formatSearchUrl}
              />
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
