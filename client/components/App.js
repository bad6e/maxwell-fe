import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

const mapStateToProps = (state) => {
  return {
    placesList: state.places.placesList
  };
}

const mapDispachToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
