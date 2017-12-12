import React from 'react';

import Placeholder from './Placeholder.jsx';

export default class Slider extends React.Component {
  render() {
    return (
      <div id="gallery-slider" style={{ left: `-${this.props.current*100}%` }}>
        {this.props.images.map((img, idx) => {          
          return (
            <Placeholder key={idx} image={img} />
          );
        })}
      </div>
    )
  }
}