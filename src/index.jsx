import React from 'react';
import ReactDOM from 'react-dom';

import PageHome from './components/PageHome.jsx';

import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <PageHome />
  </Provider>,

  document.getElementById('app')
);
