import React from 'react';

export default class Placeholder extends React.Component {
  render(){
    return (
      <div className="placeholder">
        <img src={this.props.image.src} />
      </div>
    )
  }
}