import axios from 'axios';

import {
  DEFAULT_SEARCH_URL,
  RAILS_URL
} from '../constants/constants';

export const RECEIVE_PLACES = 'PLACES-RECEIVE-PLACES';
export const UPDATE_PARAMS = 'PLACES-UPDATE_PARAMS';

export function fetchPlaces() {
  return dispatch => {
    return axios.post(`${RAILS_URL}`, {
      url: `${DEFAULT_SEARCH_URL}`
    })
    .then(response => dispatch(receivePlaces(response)));
  };
}

export function search() {
  return (dispatch, getState) => {
    dispatch(searchPlaces(getState().places))
  }
}

export function searchPlaces(searchParams) {
  const {location, numberOfGuests, checkin, checkout} = searchParams;
  const url = `https://api.airbnb.com/v1/listings/search?key=bcxkf89pxe8srriv8h3rj7w9t&location=${location}&guests=${numberOfGuests}&checkin=${checkin}&checkout=${checkout}`;
  return (dispatch) => {
    return axios.post(`${RAILS_URL}`, {
      url: `${url}`
    })
    .then(response => dispatch(receivePlaces(response)));
  };
}

export function receivePlaces(response) {
  return {
    type: RECEIVE_PLACES,
    payload: {
      places: response.data,
      loading: true
    }
  };
}

export function handleParameterUpdates(selector, value) {
  return {
    type: UPDATE_PARAMS,
    payload: {
      selector,
      value
    }
  };
}
