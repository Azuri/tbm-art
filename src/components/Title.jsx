import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <h3 className="info_title__indent">
        {this.props.text}
      </h3>
    )
  }
}