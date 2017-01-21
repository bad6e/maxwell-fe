import {
  RECEIVE_PLACES
} from '../actions/actionCreators';

function places(state = {
  places: [],
  count: '',
  loading: true
}, action) {
  switch(action.type) {
  case RECEIVE_PLACES:
    return Object.assign({}, state, {
      places: action.places.listings,
      count: action.places.listings_count,
      loading: false
    })
  default:
    return state;
  }
}

export default places
