import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from '../actions/types';

import { List } from 'immutable';

const initialState = List([
    {
      text: 'first',
      completed: false
    },
    {
      text: 'second',
      completed: false
    }
]);

function todos(state = initialState, action) {
  var newState = state;
  switch(action.type) {
    case ADD_TODO:
      newState = state.push({
        text: action.text,
        completed: false
      });
      break;
    case REMOVE_TODO:
      newState = state.delete(action.index);
      break;
    case TOGGLE_TODO:
      newState = state.update(action.index, (todo) => {
        return Object.assign({}, todo, { completed: !todo.completed });
      });
      break;
    }

    return newState;
};

import { combineReducers } from 'redux';
export const app = combineReducers({
  todos
}); 