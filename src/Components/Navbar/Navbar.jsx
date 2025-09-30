import React, { useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/penguin.svg';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomeRoute = location.pathname === '/';

  const sections = [
    { id: 'home', label: 'Home' },
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 769) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLinkClick = (id) => {
    setActiveSection(id);
    setIsMenuOpen(false);
  };

  const handleRouteClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="navbar">
        <Link to="/" onClick={handleRouteClick}>
          <img src={logo} alt="Website Logo" className="penguin" />
        </Link>

      <button
        className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMenuOpen}
        aria-controls="primary-navigation"
        onClick={() => setIsMenuOpen((v) => !v)}
      >
        <span className="hamburger" />
      </button>

      <ul
        id="primary-navigation"
        className={`nav-menu ${isMenuOpen ? 'nav-menu--open' : ''}`}
      >
        {sections.map((section) => (
          <li key={section.id}>
            {isHomeRoute && section.id !== 'home' ? (
              <AnchorLink
                className={`anchor-link ${
                  activeSection === section.id ? 'active' : ''
                }`}
                offset={50}
                href={`#${section.id}`}
                onClick={() => handleLinkClick(section.id)}
              >
                {section.label}
              </AnchorLink>
            ) : section.id === 'home' ? (
              isHomeRoute ? (
                <AnchorLink
                  className={`anchor-link ${
                    activeSection === section.id ? 'active' : ''
                  }`}
                  href={`#${section.id}`}
                  onClick={() => handleLinkClick(section.id)}
                >
                  {section.label}
                </AnchorLink>
              ) : (
                <Link className="anchor-link" to="/" onClick={handleRouteClick}>
                  {section.label}
                </Link>
              )
            ) : null}
          </li>
        ))}
        <li>
          <Link className="anchor-link" to="/streaming" onClick={handleRouteClick}>
            Most Recent Article
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
