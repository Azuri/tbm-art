import {
  TOUCH_GALLERY_CLOSE,
  TOUCH_GALLERY_OPEN,
  TOUCH_GALLERY_NEXT,
  TOUCH_GALLERY_PREV } from './types/touch-gallery';

export function prev() {
  return {
    type: TOUCH_GALLERY_PREV
  }
}

export function next() {
  return {
    type: TOUCH_GALLERY_NEXT
  }
}

export function open(images, index) {
  return {
    type: TOUCH_GALLERY_OPEN,
    images,
    index
  }
}

export function close() {
  return {
    type: TOUCH_GALLERY_CLOSE
  }
}