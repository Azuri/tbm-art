import { createStore } from 'redux';

import App from './reducers/index';
let store = createStore(App);

const unsubscribe = store.subscribe(() => {
  var state = store.getState();
});

export default store;