import axios from 'axios';

export const FETCH_PLACES = 'FETCH_PLACES';
export const RECEIVE_PLACES = 'RECEIVE_PLACES';
export const SEARCH_PLACES = 'SEARCH_PLACES';

const URL = 'https://api.airbnb.com/v1/listings/search?key=bcxkf89pxe8srriv8h3rj7w9t'
const RAILS_URL = 'http://localhost:3001/api/v1/search'

export function fetchPlaces() {
  return dispatch => {
    return axios.post(`${RAILS_URL}`, {
      url: `${URL}`
    })
    .then(response => dispatch(receivePlaces(response)))
    .then(console.log('fetching places...'))
  }
}

export function searchPlaces(url) {
  return dispatch => {
    return axios.post(`${RAILS_URL}`, {
      url: `${url}`
    })
    .then(response => dispatch(receivePlaces(response)))
    .then(console.log('fetching places...'))
  }
}

export function receivePlaces(response) {
  return {
    type: RECEIVE_PLACES,
    places: response.data
  }
}
