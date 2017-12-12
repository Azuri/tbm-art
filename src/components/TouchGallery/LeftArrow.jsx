import React from 'react';

export default class LeftArrow extends React.Component {
  render(){
    return (
      <a id="prev-arrow" onClick={(e) => {
        e.stopPropagation();
        this.props.onClick();
      }}></a>
    )
  }
}