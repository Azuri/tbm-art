import React from 'react';
import './styles.css';

import {
  next, prev, close
} from '../../actions/touch-gallery';

class TouchGallery extends React.Component {
  constructor(props){
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleKeyPress(e){
    switch(e.keyCode) {
      case 37: this.props.prevImage(); break;
      case 39: this.props.nextImage(); break;
      case 27: this.props.closeOverlay(); break;
    }
  }

  handleTouch(e){
    let touch = e.originalEvent.touches[0] ||
                e.originalEvent.changedTouches[0];
    if (e.origina)
  }

  componentDidMount(){
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount(){
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  render(){
    if (this.state.images.length == 0) {
      return null;
    }

    return (
      <div id="gallery-overlay"
           className="visible"
           style={{ display: 'block' }}
           onClick={this.props.closeOverlay}>
        <div id="gallery-slider" style={{
          left: [' -', this.props.current*100, '%'].join('')
        }}>
          {this.props.images.map((img, idx) => {
            return (
              <div className="placeholder" key={idx}>
                <img src={img.src} />
                <span>foo bar baz</span>
              </div>
            )
          })}
        </div>

        <a id="prev-arrow" onClick={(e) => {
          e.stopPropagation();
          this.props.prevImage();
        }}></a>

        <a id="next-arrow" onClick={(e) => {
          e.stopPropagation();
          this.props.nextImage();
        }}></a>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.touchGallery;
}

const mapDispatchToProps = distpatch => {
  return {
    closeOverlay() {
      distpatch(close());
    },
    nextImage() {
      distpatch(next());
    },
    prevImage() {
      distpatch(prev());
    }
  }
}

import { connect } from 'react-redux';
export default connect(
  mapStateToProps,
  mapDispatchToProps)
(TouchGallery);