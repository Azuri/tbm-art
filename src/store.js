import { createStore } from 'redux';

import App from './reducers/index';
let store = createStore(App);

const unsubscribe = store.subscribe(() => {
  var state = store.getState();
  console.log(state);
});

export default store;

unsubscribe();