import React from 'react';

class Image extends React.Component {
  render(){
    return (
      <li className="grid_4">
        <a href={this.props.src} className="thumbs_img">
          <div>
            <div className="lbHover">
              <i className="fa fa-search"></i>
            </div>
            <img src={this.props.thumb} alt={this.props.title} title={this.props.description} />
          </div>
        </a>
        <h5>
          <a href="#">{this.props.title}</a>
          /
          <time datetime="2014-01">
            <a href="#">January 2014</a>
          </time>
        </h5>
      </li>
    )
  }
}

export default Image;