import React from 'react';
import logo from "../assets/images/nitap-logo.png"

const Footer = () => {
    return (
        <section className="footer-main-section w-100 float-left">
            <div className="container">
                <div className="footer-inner-section">
                    <div className="footer-logo-con">
                        <a href="index.html">
                            <figure>
                                <img src={logo} alt="header-logo" className='footer-logo' loading="lazy" />
                            </figure>
                        </a>
                        <p>Welcome to AI & Robotics Club portal.</p>
                        <div className="footer-contact-details">
                            <ul className="list-unstyled">
                                <li className="position-relative"><i className="fas fa-phone-alt"></i> <a
                                        href="tel:+91 7783847276">+91 7783847276</a></li>
                                <li className="position-relative"><i className="fas fa-envelope"></i> <a
                                        href="mailto:airclub@nitandhra.ac.in">airclub@nitandhra.ac.in</a></li>
                                <li className="position-relative"><i className="fas fa-map-marker-alt"></i> 102, Student
                                    Amenties Centre, <br /> NIT Andhra Pradesh, Tadepalligudem</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-links-box">
                        <h4>EXPLORE</h4>
                        <div className="footer-links-inner-box">
                            <ul className="list-unstyled mb-0">
                                <li><a href="about.html">About</a></li>
                                <li><a href="services.html">Meet our team</a></li>
                                <li><a href="cases.html">Case stories</a></li>
                                <li><a href="blog.html">Latest news</a></li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                            <ul className="list-unstyled mb-0">
                                <li><a href="contact.html">Support</a></li>
                                <li><a href="faq.html">Terms of use</a></li>
                                <li><a href="single-blog.html">Privacy policy</a></li>
                                <li><a href="contact.html">Help</a></li>
                            </ul>
                        </div>
                    </div>
                    
                </div>
                <div className="footer-copyright-con">
                    <p>© Copyright 2024 by AI & Robotics Club</p>
                    <div className="header-social-links">
                        <ul className="list-unstyled mb-0 d-flex align-items-center">
                            <li><a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a>
                            </li>
                            <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a>
                            </li>
                            <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
                            <li><a
                                    href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i
                                        className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
