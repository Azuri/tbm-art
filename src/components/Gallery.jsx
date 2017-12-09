import React from 'react';

import Image from './Image.jsx';

import { open } from '../actions/touch-gallery';

class Gallery extends React.Component {
  render(){
    let images = [
      { src: 'images/page-1_img-1_b.jpg', thumb: 'images/page-1_img-1.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-2_b.jpg', thumb: 'images/page-1_img-2.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-3_b.jpg', thumb: 'images/page-1_img-3.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-4_b.jpg', thumb: 'images/page-1_img-4.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-5_b.jpg', thumb: 'images/page-1_img-5.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-6_b.jpg', thumb: 'images/page-1_img-6.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-7_b.jpg', thumb: 'images/page-1_img-7.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-8_b.jpg', thumb: 'images/page-1_img-8.jpg', title: 'lorem ipsum' },
      { src: 'images/page-1_img-9_b.jpg', thumb: 'images/page-1_img-9.jpg', title: 'lorem ipsum' },
    ]
    return (
      <div className="container gallery thumbs">
        <ul className="row">
          {images.map((img, idx) => {
            return <Image {...img} onClick={(e) => {
              this.props.onImageClick(images, idx);
            }} />
          })}
        </ul>
      </div>
    )
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
export default connect()(Gallery);