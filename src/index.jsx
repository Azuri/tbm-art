import React from 'react';
import ReactDOM from 'react-dom';

import TouchGallery from './components/TouchGallery/TouchGallery.jsx';

import { Provider } from 'react-redux';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <TouchGallery />
  </Provider>,

  document.getElementById('app')
);
