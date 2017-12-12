import React from 'react';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AboutMe from './AboutMe.jsx';

class PageHome extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <AboutMe />
        <Footer />
      </div>
    )
  }
}

export default PageHome;