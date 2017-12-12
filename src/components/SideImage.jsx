import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.title} className="info_img" />
    )
  }
}