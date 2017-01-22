import React from 'react';
import Listing from './Listing';
import GuestNumber from './GuestNumber';
import NumberOfResults from './NumberOfResults';
import Search from './Search';
import DatePicker from './DatePicker';
import Flash from './Flash';
import LoaderImg from './LoaderImg';
var moment = require('moment');

class Main extends React.Component {
  constructor() {
    super();

    this.renderListings = this.renderListings.bind(this);
    this.formatSearchUrl = this.formatSearchUrl.bind(this);
    this.search = this.search.bind(this);
    this.checkIfSearchBlank = this.checkIfSearchBlank.bind(this);
    this.removeFlashMessage = this.removeFlashMessage.bind(this);
    this.todaysDate = this.todaysDate.bind(this);
    this.todaysDatePlusThree = this.todaysDatePlusThree.bind(this);
    this.formatErrorMessages = this.formatErrorMessages.bind(this);
    this.applyState = this.applyState.bind(this);

    this.state = {
      location: '',
      guests: '1',
      blank: false,
      checkin: '',
      checkout: '',
      messages: []
    };
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  removeFlashMessage() {
    this.setState({blank: false});
  }

  todaysDate() {
    return moment().format('YYYY-MM-DD');
  }

  todaysDatePlusThree() {
    return moment().add(3, 'days').format('YYYY-MM-DD');
  }

  renderListings(listings) {
    return listings.map(listing => {
      const info = listing.listing;
      return (
        <Listing
          key={info.id}
          info={info}
        />
      );
    });
  }

  checkIfSearchBlank() {
    if (this.state.location === '' || this.state.checkin === '' || this.state.checkout === '') {
      this.formatErrorMessages();
    } else {
      this.setState({blank: false}, function() {
        this.search();
      });
    }
  }

  formatErrorMessages() {
    let messages = [];

    if(this.state.location === '') {
      messages.push('Location cannot be blank!');
    }

    if(this.state.checkin === '') {
      messages.push('Check In Date cannot be blank!');
    }

    if(this.state.checkout === '') {
      messages.push('Check Out Date cannot be blank!');
    }

    this.setState({
      blank: true,
      messages
    });
  }

  applyState(value, selector) {
    this.setState({[selector]: value})
  }

  formatSearchUrl(value, selector) {
    const map = {
      'location': this.applyState,
      'guests': this.applyState,
      'checkin': this.applyState,
      'checkout': this.applyState

    }
    return map[selector](value, selector)
  }

  search() {
    const url = `https://api.airbnb.com/v1/listings/search?key=bcxkf89pxe8srriv8h3rj7w9t&location=${this.state.location}&guests=${this.state.guests}&checkin=${this.state.checkinDate}&checkout=${this.state.checkoutDate}`;
    this.props.searchPlaces(url);
  }

  render() {
    const { places = [], count } = this.props.places || {};
    const loadImg = this.props.places.loading ? <LoaderImg/> : null;
    const flash = this.state.blank ? <Flash message={this.state.messages.join(', ')} removeFlashMessage={this.removeFlashMessage}/> : null;

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
              <DatePicker
                formatSearchUrl={this.formatSearchUrl}
                todaysDate={this.todaysDate}
                todaysDatePlusThree={this.todaysDatePlusThree}
              />
            </div>
          </div>
        </nav>
        <NumberOfResults
          count={count}
        />
        {this.renderListings(places)}
      </div>
    );
  }
}

export default Main;
