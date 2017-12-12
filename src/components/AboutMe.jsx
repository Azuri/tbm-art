import React from 'react';

import SideImage from './SideImage.jsx';

export default class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <SideImage src="/images/page-1_img-1.jpg"/>
        <div className="info_text-block">
            <p>Fusce euismod consequat ante. Lorem ipsum dolor sit amet,
  consectetuer adipiscing elit. Pellentesque sed dolor. Aliquam congue 
  fermentum nisl. Mauris accumsan nulla vel diam. Sed in lacus ut enim 
  adipiscing aliquet. Nulla venenatis. In pede mi, aliquet sit amet, 
  euismod in, auctor ut, ligula. Aliquam dapibus tincidunt metus. Praesent
  justo dolor, lobortis quis, lobortis dignissim, pulvinar ac, lorem. 
  Vestibulum sed ante. Donec sagittis euismod purus. </p>
            <p className="bold text-block__indent">Fusce euismod consequat 
  ante. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
  Pellentesque sed dolor. Aliquam congue fermentum nisl. Mauris accumsan 
  nulla vel diam. Sed in lacus ut enim adipiscing aliquet. </p>
            <p className="text-block__indent">Nulla venenatis. In pede mi, 
  aliquet sit amet, euismod in, auctor ut, ligula. Aliquam dapibus 
  tincidunt metus. Praesent justo dolor, lobortis quis, lobortis 
  dignissim, pulvinar ac, lorem. Vestibulum sed ante. Donec sagittis 
  euismoaliquet sit amet, euismod in, auctor ut, ligula.Aliquam dapibus 
  tincidunt metus. Praesent justo dolor, lobortis quis, lobortis 
  dignissim, pulvinar ac, lorem. </p>
        </div>
    </div>
    )
  }
}