import React from 'react';

class Menu extends React.Component {
    render() {
        return (
        <div id="stuck_container">
                <div className="container">
                    <nav>
                        <ul className="sf-menu sf-js-enabled sf-arrows">
                            <li className="current sf-menu_first-child"><a href="#">Home</a></li>
                            <li>/</li>
                            
                            <li><a href="#">Biography</a></li>
                            <li>/</li>
                            
                            <li><a href="#"> Gallery</a></li>
                            <li>/</li>
                            
                            <li><a href="#">Exhibitions</a></li>
                            <li>/</li>
                            
                            <li className="sf-menu_last-child"><a href="#">Contact</a></li>
                            <li>/</li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Menu;