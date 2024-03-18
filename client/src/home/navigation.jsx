import React, { useState } from 'react';
import logo from "../assets/images/nitap-logo.png";
import { useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(getActiveLink(location.pathname));

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  // Function to determine the active link based on the current pathname
  function getActiveLink(pathname) {
    if (pathname === '/home-page') return 'home';
    if (pathname === '/about') return 'about';
    if (pathname === '/project-page') return 'projects';
    if (pathname === '/eventsection') return 'events';
    return '';
  }

  return (
    <div className="header-main-con w-100 float-left">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light p-0">
          <a className="navbar-brand" href="index.html">
            <figure className="mb-0">
              <img src={logo} alt="header-logo" className="logo-img" loading="lazy" />
            </figure>
          </a>
          <button
            className="navbar-toggler collapsed"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="/home-page"
                  className={`nav-link p-0 ${activeLink === 'home' ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick('home')}
                >
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/about"
                  className={`nav-link p-0 ${activeLink === 'about' ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick('about')}
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/project-page"
                  className={`nav-link p-0 ${activeLink === 'projects' ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick('projects')}
                >
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="/eventsection"
                  className={`nav-link p-0 ${activeLink === 'events' ? 'active' : ''}`}
                  onClick={() => handleNavLinkClick('events')}
                >
                  EVENTS
                </a>
              </li>
            </ul>
            <div className="header-social-links">
              <ul className="list-unstyled mb-0 d-flex align-items-center">
                <li><a href="https://www.facebook.com/login/"><i className="fa fa-envelope"></i></a></li>
                <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-youtube"></i></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
