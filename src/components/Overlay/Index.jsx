import React from 'react';
import './styles.css';

import {
  next, prev, close
} from '../../actions/touch-gallery';

import Overlay from './Overlay.jsx';

class TouchGallery extends React.Component {
  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.cache = {};
  }
  
  handleKeyPress(e){
    switch(e.keyCode) {
      case 37: this.props.onLeftClick(); break;
      case 39: this.props.onRightClick(); break;
      case 27: this.props.onClick(); break;
    }
  }

  handleTouch(e){
    let touch = e.originalEvent.touches[0] ||
                e.originalEvent.changedTouches[0];
  }

  componentDidMount(){
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(){
    window.removeEventListener('keyup', this.handleKeyPress);
  }
/*
  // some optimizations maybe?
  renderImg(img, idx){
    let min = Math.max(this.props.current-1, 0),
        max = Math.min(this.props.current+1, this.props.images.length);
    
    if (this.cache[idx] || idx >= min && idx <= max) {
      this.cache[idx] = true;
      return (
        <img src={img.src} />
      )
    }

    return null;
  }
*/

  render(){
    if (this.props.images.length == 0) {
      return null;
    }

    return (
      <Overlay {...this.props} onKeyPress={this.handleKeyPress}/>
    )
  }
}

const mapStateToProps = state => {
  return state.touchGallery;
}

const mapDispatchToProps = distpatch => {
  return {
    onClick() {
      distpatch(close());
    },
    onRightClick() {
      distpatch(next());
    },
    onLeftClick() {
      distpatch(prev());
    }
  }
}

import { connect } from 'react-redux';
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TouchGallery);