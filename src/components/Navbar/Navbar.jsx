import React from 'react'
import './Navbar.css'
import { ccit, prmsu } from '../../assets';
import { navLinks } from '../../constants';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='navbar__upper'>
          <img 
            src={prmsu}
            className='logo'
            alt='prmsu-logo'
          />
          <div className='navbar__upper-text'>
            <p>President Ramon Magsaysay State University</p>
            <h1>COLLEGE OF COMMUNICATION AND INFORMATION TECHNOLOGY</h1>
            <p>IBA, ZAMBALES - MAIN CAMPUS</p>
          </div>
          <img 
            src={ccit}
            className='logo'
            alt='ccit-logo'
          />
        </div>

        <div className="navbar__lower">
          {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className="navlinks"
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
        </div>
    </div>
  )
}

export default Navbar