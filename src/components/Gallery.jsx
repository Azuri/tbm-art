import React from 'react';

import Image from './Image.jsx';

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
          {images.map((image, index) => {
            return <Image {...image} />
          })}
        </ul>
      </div>
    )
  }
}

export default Gallery;