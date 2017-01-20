import axios from 'axios';
import places from '../data/places'

export const FETCH_PLACES = 'FETCH_PLACES';
export const FETCH_PLACES_SUCCESS = 'FETCH_PLACES_SUCCESS';
export const FETCH_PLACES_FAILURE = 'FETCH_PLACES_FAILURE';

const URL = 'https://api.airbnb.com/v1/listings/search?key=bcxkf89pxe8srriv8h3rj7w9t'
const RAILS_URL = 'http://localhost:3001/api/v1/search'

export function fetchPlaces() {
  const data = axios.post(`${RAILS_URL}`, {
    url: `${URL}`
  })
  .then(function (response) {
    return {
      type: 'FETCH_PLACES',
      payload: response.data
    }
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    type: 'FETCH_PLACES',
    payload: data
  };
}

export function searchPlaces(url) {
  const formmated_url = `${URL}&location=${url}`

  const data = axios.post(`${RAILS_URL}`, {
    url: `${formmated_url}`
  })
  .then(function (response) {
    return {
      type: 'FETCH_PLACES',
      payload: response.data
    }
  })
  .catch(function (error) {
    console.log(error);
  });

  return {
    type: 'FETCH_PLACES',
    payload: data
  };
}
