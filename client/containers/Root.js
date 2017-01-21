import React, { Component } from 'react'
import { Provider } from 'react-redux'

// Import CSS
import css from '../styles/style.css';

// Import Components
import App from '../components/App';

// Import Store
import configureStore from '../store';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}