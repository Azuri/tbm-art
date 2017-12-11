import React from 'react';

import Image from './Image.jsx';

import { open } from '../actions/touch-gallery';

class Gallery extends React.Component {
  render(){
    return (
      <div className="container gallery thumbs">
        <ul className="row">
          {this.props.images.map((img, idx) => {
            return (
              <li className="grid_4" key={idx}>
                <Image {...img} onClick={(e) => {
                  e.preventDefault();
                  this.props.onImageClick(this.props.images, idx);
                }} />
              </li> 
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    images: [
      { src: 'images/page-1_img-1.jpg', thumb: 'images/page-1_img-1.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-2.jpg', thumb: 'images/page-1_img-2.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-3.jpg', thumb: 'images/page-1_img-3.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-4.jpg', thumb: 'images/page-1_img-4.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-5.jpg', thumb: 'images/page-1_img-5.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-6.jpg', thumb: 'images/page-1_img-6.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-7.jpg', thumb: 'images/page-1_img-7.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-8.jpg', thumb: 'images/page-1_img-8.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-9.jpg', thumb: 'images/page-1_img-9.jpg', title: 'lorem ipsum' },
    ]
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onImageClick(images, idx) {
      dispatch(open(images, idx));
    }
  }
}

import { connect } from 'react-redux';
export default connect(
  mapStateToProps,
  mapDispatchToProps)
(Gallery);