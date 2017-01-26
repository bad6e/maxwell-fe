import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';

import Listing from './Listing';
import GuestNumber from './GuestNumber';
import NumberOfResults from './NumberOfResults';
import Search from './Search';
import DatePicker from './DatePicker';
import Flash from './Flash';
import LoaderImg from './LoaderImg';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.renderListings = this.renderListings.bind(this);
    this.checkIfSearchBlank = this.checkIfSearchBlank.bind(this);
    this.removeFlashMessage = this.removeFlashMessage.bind(this);
    this.formatErrorMessages = this.formatErrorMessages.bind(this);

    this.state = {
      blank: false,
      messages: []
    };
  }

  componentDidMount() {
    this.props.fetchPlaces();
  }

  removeFlashMessage() {
    this.setState({blank: false});
  }

  renderListings(listings) {
    return listings.map((listing, i) => {
      const info = listing.listing;
      return (
        <Listing
          key={info.id}
          info={info}
          number={i + 1}
        />
      );
    });
  }

  checkIfSearchBlank() {
    const {location, checkin, checkout} = this.props.places;
    if (location === ''
        || checkin === ''
        || checkout === '') {
      this.formatErrorMessages();
    } else {
      this.setState({blank: false}, this.props.search);
    }
  }

  formatErrorMessages() {
    const messages = [];

    const validations = {
      checkin: 'Check In',
      checkout: 'Check Out',
      location: 'Location'
    };
    for(const obj in this.props.places) {
      if (this.props.places[obj] === '')
        messages.push(`${validations[obj]} cannot be empty!`);
    }

    this.setState({
      blank: true,
      messages
    });
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
                handleParameterUpdates={this.props.handleParameterUpdates}
                checkIfSearchBlank={this.checkIfSearchBlank}
              />
              <GuestNumber
                handleParameterUpdates={this.props.handleParameterUpdates}
                numberOfGuests={this.props.numberOfGuests}
              />
              <DatePicker
                handleParameterUpdates={this.props.handleParameterUpdates}
                checkin={this.props.checkin}
                checkout={this.props.checkout}
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

const mapStateToProps = (state) => {
  return {
    places: state.places
  };
};

export default connect(mapStateToProps, actionCreators)(Main);
