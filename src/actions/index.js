import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

export function add(text){
  return {
    type: ADD_TODO,
    text
  };
};

export function remove(index) {
  return {
    type: REMOVE_TODO,
    index
  };
};

export function toggle(index) {
  return {
    type: TOGGLE_TODO,
    index
  };
};