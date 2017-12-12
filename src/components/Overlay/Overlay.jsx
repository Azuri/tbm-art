import React from 'react';

import LeftArrow from './LeftArrow.jsx';
import RightArrow from './RightArrow.jsx';
import Slider from './Slider.jsx';

export default class Overlay extends React.Component {
  render() {
    return (
      <div 
        id="gallery-overlay"
        className="visible"
        style={{ display: 'block' }}
        onClick={this.props.onClick}>
        
        <Slider images={this.props.images} current={this.props.current} />
        
        <LeftArrow onClick={this.props.onLeftClick} />
        <RightArrow onClick={this.props.onRightClick} />
      </div>
    )
  }
}