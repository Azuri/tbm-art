import React from 'react';

import Policy from './Policy.jsx';
import SocialMedia from './SocialMedia.jsx';

class Header extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <SocialMedia />
          <Policy />
        </div>
      </footer>
    );
  }
}

export default Header;