import {
  TOUCH_GALLERY_CLOSE,
  TOUCH_GALLERY_OPEN,
  TOUCH_GALLERY_NEXT,
  TOUCH_GALLERY_PREV } from '../actions/types/touch-gallery';

const defaultState = {
  images: [],
  current: null
}

export default function(state = defaultState, action){
  switch(action.type){
    case TOUCH_GALLERY_OPEN:
      return Object.assign({}, state, {
        images: action.images,
        current: action.index
      });
    
    case TOUCH_GALLERY_CLOSE:
      return Object.assign({}, defaultState);
    
    case TOUCH_GALLERY_NEXT:
      return Object.assign({}, state, {
        current: Math.min(state.current +1, state.images.length -1)
      });
    
    case TOUCH_GALLERY_PREV:
      return Object.assign({}, state, {
        current: Math.max(state.current -1, 0)
      });
    
    default:
      return state;
  }
}