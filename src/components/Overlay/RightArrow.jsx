import React from 'react';

export default class LeftArrow extends React.Component {
  render(){
    return (
      <a id="next-arrow" onClick={(e) => {
        e.stopPropagation();
        this.props.onClick();
      }}></a>
    )
  }
}