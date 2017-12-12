import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import SocialMedia from './SocialMedia.jsx';
import Gallery from './Gallery.jsx';
import Overlay from './Overlay/Index.jsx';

class PageHome extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Gallery />
        <Overlay />
        <Footer />
      </div>
    )
  }
}

export default PageHome;