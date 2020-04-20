import React from 'react';
import img from '../images/Screenshot (30).png'
import './Header.css';

const Header = () => {
    return (
        <div  className="header">
           <img src={img} alt=""/>
              <nav>
                  <a href="/Friends">Friends</a>
                  <a href="/unknown">unknown Peoples</a>
                  <a href="/requests">Friend Requests</a>
                  <a href="/explore">Explore</a>
              </nav>
        </div>
    );
};

export default Header;