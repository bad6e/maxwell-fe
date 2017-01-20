import {
  FETCH_PLACES,
  FETCH_PLACES_SUCCESS,
  FETCH_PLACES_FAILURE
} from '../actions/actionCreators';

function getPlaces(state = [], action) {
  let error;
  switch(action.type) {
  case FETCH_PLACES:
    console.log("fetching places!");
    return { ...state, placesList: { places: action.payload.payload.listings, count: action.payload.payload.listings_count, error: null, loading: true } };
  default:
    return state;
  }
}

export default getPlaces;
