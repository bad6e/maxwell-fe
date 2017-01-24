import {
  RECEIVE_PLACES,
  UPDATE_PARAMS
} from '../actions/actionCreators';

function places(state = {
  places: [],
  numberOfGuests: '1',
  count: '',
  loading: true
}, action) {
  switch(action.type) {
    case RECEIVE_PLACES:
      return Object.assign({}, state, {
        places: action.payload.places.listings,
        count: action.payload.places.listings_count,
        loading: false
      });
    case UPDATE_PARAMS:
      const { selector, value } = action.payload;
      return Object.assign({}, state, {
        [selector]: value,
      });
    default:
      return state;
  }
}

export default places;
