import React from 'react';
import logo from "../assets/images/nitap-logo.png";
import instagram from "../assets/images/icons/instagram.png";
import facebook from "../assets/images/icons/facebook.png";
import linkedin from "../assets/images/icons/linkedin.png";
import { useNavigation } from 'react-router-dom';
function Header() {
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
                <a className="nav-link p-0 active" href="/home-page">HOME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link p-0" href="/about">ABOUT</a>
              </li>
              <li className="nav-item">
<<<<<<< HEAD
                <a className="nav-link p-0" href="/eventsection">PROJECTS</a>
=======
                <a className="nav-link p-0" href="/projects">PROJECTS</a>
>>>>>>> 59f90fc658482b76f01b6da0aea3fe32ecd4c5e6
              </li>
              
              
              <li className="nav-item">
                <a className="nav-link p-0" href="/eventsection">EVENTS</a>
              </li>

              
            </ul>
            <div className="header-social-links">
              <ul className="list-unstyled mb-0 d-flex align-items-center">
                <li><a href="https://www.facebook.com/login/"><img className="social-logo" src={facebook} alt="Facebook" /></a></li>
                <li><a href="https://www.linkedin.com/login"><img className="social-logo" src={linkedin} alt="LinkedIn" /></a></li>
                <li><a href="https://twitter.com/i/flow/login"><img className="social-logo" src={instagram} alt="Instagram" /></a></li>
                <li><a href=""><img className="social-logo" src={instagram} alt="Instagram" /></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
