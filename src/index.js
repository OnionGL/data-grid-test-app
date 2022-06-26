import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SetupStore } from './Redux/store';
import App from './App.js';
import themes from 'devextreme/ui/themes';


const store = SetupStore();
themes.initialized(() => ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
));
