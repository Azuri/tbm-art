import { createStore } from 'redux';
import { app } from './reducers/index';

import { add, remove, toggle } from './actions';

let store = createStore(app);

const unsubscribe = store.subscribe(() => {
  var state = store.getState();
});

export default store;