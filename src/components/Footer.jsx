import React from 'react';

import Policy from './Policy.jsx';
import SocialMedia from './SocialMedia.jsx';

class Header extends React.Component {
  render() {
    return (
      <footer>
        <div class="container">
          <SocialMedia />
          <Policy />
        </div>
      </footer>
    );
  }
}

export default Header;