import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <p className="title"></p>
          </div>
          <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/experience">Experience</NavLink>
              </li>
              {
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                /*
              <li>
                <NavLink to="/contact" className="non-clickable">
                  Blog
                </NavLink>
  
              </li>*/
              }
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
