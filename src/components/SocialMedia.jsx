import React from 'react';

class SocialMedia extends React.Component {
  render(){
    let links = [
      { name: 'twitter', url: '#' },
      { name: 'facebook', url: '#' },
      { name: 'instagram', url: '#' }
    ];

    return (
      <ul className="social">
        {links.map((link, index) => {
          return (
            <li key={index}>
              <a href={link.url}>
                  {link.name}
              </a>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default SocialMedia;