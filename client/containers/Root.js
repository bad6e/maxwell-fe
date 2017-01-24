import React, { Component } from 'react';
import { Provider } from 'react-redux';

// Import CSS
import css from '../styles/style.css';

// Import Components
import Main from '../components/Main';

// Import Store
import configureStore from '../store';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}