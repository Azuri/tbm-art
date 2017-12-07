import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import SocialMedia from './SocialMedia.jsx';
import Gallery from './Gallery.jsx';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Gallery />
        <Footer />
      </div>
    )
  }
}

export default Home;