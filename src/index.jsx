import React from 'react';
import ReactDOM from 'react-dom';

import PageHome from './components/PageHome.jsx';
import PageGallery from './components/PageGallery.jsx';
import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <PageGallery />
  </Provider>,

  document.getElementById('app')
);
