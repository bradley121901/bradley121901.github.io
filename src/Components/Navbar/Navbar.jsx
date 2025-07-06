import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from '../../assets/penguin.svg';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="navbar">
      <img src={logo} alt="Website Logo" className="penguin" />
      <ul className="nav-menu">
        {sections.map((section) => (
          <li key={section.id}>
            <AnchorLink
              className={`anchor-link ${
                activeSection === section.id ? 'active' : ''
              }`}
              offset={50}
              href={`#${section.id}`}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </AnchorLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Navbar;
