import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Import Xss
import css from './styles/style.css';

// Import Components
import App from './components/App';

// Import Store
import configureStore from './store';

const store = configureStore();

const router = (
  <Provider store={store}>
    <App/>
  </Provider>
)

render(router, document.getElementById('root'));
