import React from "react";

import logo from "../assets/images/nitap-logo.png"
import instagram from "../assets/images/icons/instagram.png"
import facebook from "../assets/images/icons/facebook.png"
import linkedin from "../assets/images/icons/linkedin.png"
import img2 from "../assets/images/image4.jpeg"
import first from "../assets/images/pronybhyia.jpg"
import second from "../assets/images/harshitadi.jpg"
import third from "../assets/images/bhatibhyia.jpg"
import forth from "../assets/images/vivekbhyia.jpg"
import fifth from "../assets/images/abhilashbhyia.jpg"
import sixth from "../assets/images/dubeybhyia.jpg"
import "./abou-us.css" ; 

function AboutUs(){
    return(
        <div>
          
            
            
            <div className="header-main-con w-100 float-left">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <a className="navbar-brand" href="index.html">
                            <figure className="mb-0">
                                <img src={logo} alt="header-logo" loading="lazy"  className="logo1"/>
                            </figure>
                        </a>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="index.html">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="services.html">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0 active" href="about.html">ABOUT</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle p-0 " href="#" id="navbarDropdown5" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        PAGES
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown5">
                                        <a className="dropdown-item " href="single-case.html">Single Case</a>
                                        <a className="dropdown-item" href="single-service.html">Single Service</a>
                                        <a className="dropdown-item" href="faq.html">Faq</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="cases.html">CASES</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle p-0" href="blog.html" id="navbarDropdown4" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        BLOGS
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                        <a className="dropdown-item" href="blog.html">Blog</a>
                                        <a className="dropdown-item" href="load-more.html">Load More</a>
                                        <a className="dropdown-item" href="single-blog.html">Single Blog</a>
                                        <a className="dropdown-item" href="one-column.html">One Column</a>
                                        <a className="dropdown-item" href="two-column.html">Two Column</a>
                                        <a className="dropdown-item" href="three-column.html">Three Column</a>
                                        <a className="dropdown-item" href="three-colum-sidbar.html">Three Column Sidbar</a>
                                        <a className="dropdown-item" href="four-column.html">Four Column</a>
                                        <a className="dropdown-item" href="six-colum-full-wide.html">Six Column</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="contact.html">CONTACT</a>
                                </li>
                            </ul>
                            <div className="header-social-links">
                                <ul className="list-unstyled mb-0 d-flex align-items-center">
                                    <li><a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f" src= {facebook}></i></a></li>
                                    <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in" src= {linkedin}></i></a></li>
                                    <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter" src= {instagram}></i></a></li>
                                    <li><a
                                            href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i
                                                className="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="nav-btns d-flex align-items-center">
                            <div className="search-btn">
                                <a href="#">
                                    <figure className="mb-0"><img src="assets/images/Search-icon.png" alt="Search-icon" loading="lazy"/> </figure>
                                </a>
                            </div>
                            <div className="contact-expert">
                                <a href="tel:+61383766284">
                                    <span className="d-block">Need help? Talk to an expert</span>
                                    +61 3 8376 6284
                                </a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            {/* <-- SUB BANNER SECTION START --> */}
            <section className="sub-banner-section about-page-banner w-100 float-left d-flex align-items-center">
                <div className="container">
                    <div className="sub-banner-inner-section" >
                        <h1>ABOUT US</h1>
                    </div>
                </div>
            </section>
            {/* <!-- SUB BANNER SECTION END HERE-->
            <!-- ABOUT VISION SECTION START HERE --> */}
            <section className="about-vision-section w-100 float-left padding-top padding-bottom">
                <div className="container">
                    <div className="vision-inner-section">
                        <div className="vision-text-con" >
                            <h2>OUR VISION
                                SUCCESSFUL
                                BUSINESS</h2>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                                alteration in some form, by injected humour, or randomised words which dont look even slightly
                                believable. </p>
                            <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything
                                embarrassing hidden in the middle of text. </p>
                            <p className="mb-0"><span>It uses a dictionary of over 200 Latin words, combined with a handful of model
                                    sentence structures, to generate Lorem Ipsum which looks reasonable.</span></p>
                        </div>
                        <div className="vision-img-con" data-aos="fade-up" data-aos-duration="700">
                            <div className="vision-imgs-box position-relative">
                                {/* <figure className="mb-0">
                                    {/* what is problem here */}



                                    {/* <img src={img2} alt="vision-img" loading="lazy"/>
                                </figure> */} 
                                <figure className="vision-scope-img mb-0">
                                    <img  src={img2} alt="vision-scope-img" loading="lazy" className="image1"/>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ABOUT VISION SECTION END HERE -->
            <!-- MISSION SECTION START HERE --> */}
            <section className="mission-section w-100 float-left padding-top padding-bottom">
                <div className="container">
                    <div className="mission-inner-box text-center"  >
                        <h2>MISSION IS TO PROTECT <br/> YOUR BUSINESSES & MUCH MORE</h2>
                        <p>Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                            <br/> tempor incididunt ut labore et dolore magna aliqua lonm andhn.
                        </p>
                        <div className="generic-btn">
                            <a href="services.html">DISCOVER MORE</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- MISSION SECTION END HERE -->
            <!-- ABOUT TEAM SECTION START HERE --> */}
            <section className="about-team-section w-100 float-left padding-top padding-bottom">
                <div className="container">
                    <div className="generic-title text-center" >
                        <h2>CONSULTKING TEAM</h2>
                        <p>Podcasting operational change management</p>
                    </div>
                    <div className="about-team-inner-con" >
                        <div className="about-team-member">
                            <figure className="mb-0">
                                <img src={first} alt="team-member-img1" loading="lazy" className="teammemberimage"/>
                            </figure>
                            <div className="about-team-member-details">
                                <span>CHIEF EXECUTIVE</span>
                                <h3>DURAN MOSA</h3>
                                <div className="header-social-links">
                                    <ul className="list-unstyled mb-0 d-flex align-items-center">
                                        <li><a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
                                        <li><a
                                                href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i
                                                    className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="about-team-member">
                            <figure className="mb-0">
                                <img src={second} alt="team-member-img2" loading="lazy" className="teammemberimage"/>
                            </figure>
                            <div className="about-team-member-details">
                                <span>LEAD CONSULTANT</span>
                                <h3>MILANI COSTAL</h3>
                                <div className="header-social-links">
                                    <ul className="list-unstyled mb-0 d-flex align-items-center">
                                        <li><a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
                                        <li><a
                                                href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i
                                                    className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="about-team-member">
                            <figure className="mb-0">
                                <img src={third} alt="team-member-img3" loading="lazy" className="teammemberimage"/>
                            </figure>
                            <div className="about-team-member-details">
                                <span>HR CONSULTANT</span>
                                <h3>ALISHIA JONS</h3>
                                <div className="header-social-links">
                                    <ul className="list-unstyled mb-0 d-flex align-items-center">
                                        <li><a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
                                        <li><a
                                                href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i
                                                    className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="about-team-member">
                            <figure className="mb-0">
                                <img src={forth} alt="team-member-img4" loading="lazy" className="teammemberimage"/>
                            </figure>
                            <div className="about-team-member-details">
                                <span>LAW CONSULTANT</span>
                                <h3>SHING SHONG</h3>
                                <div className="header-social-links">
                                    <ul className="list-unstyled mb-0 d-flex align-items-center">
                                        <li><a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
                                        <li><a
                                                href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i
                                                    className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="about-team-member">
                            <figure className="mb-0">
                                <img src={fifth} alt="team-member-img5" loading="lazy" className="teammemberimage"/>
                            </figure>
                            <div className="about-team-member-details">
                                <span>LAW CONSULTANT</span>
                                <h3>KEMRI MINTHOR</h3>
                                <div className="header-social-links">
                                    <ul className="list-unstyled mb-0 d-flex align-items-center">
                                        <li><a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
                                        <li><a
                                                href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i
                                                    className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="about-team-member">
                            <figure className="mb-0">
                                <img src={sixth} alt="team-member-img6" loading="lazy" className="teammemberimage"/>
                            </figure>
                            <div className="about-team-member-details">
                                <span>LAW CONSULTANT</span>
                                <h3>JOBAN DAR</h3>
                                <div className="header-social-links">
                                    <ul className="list-unstyled mb-0 d-flex align-items-center">
                                        <li><a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
                                        <li><a
                                                href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i
                                                    className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ABOUT TEAM SECTION END HERE -->
            <!-- ABOUT PROGRESS SECTION START HERE --> */}
            <div className="progress-counter-section w-100 float-left">
                <div className="container">
                    <div className="customer-counter-inner-sec" data-aos="fade-up" data-aos-duration="700">
                        <div className="customer-counter-box">
                            <figure>
                                <img src="assets/images/counter-icon1.png" alt="counter-icon1" loading="lazy" />
                            </figure>
                            <div className="count d-inline-block">420</div>
                            <span className="d-block client-status">CONSULTING <br/> SOLUTIONS</span>
                        </div>
                        <div className="customer-counter-box">
                            <figure>
                                <img src="assets/images/counter-icon2.png" alt="counter-icon2" loading="lazy"/>
                            </figure>
                            <div className="count d-inline-block">5000</div>
                            <small>+</small>
                            <span className="d-block client-status">COMPLETED <br/> CASSES</span>
                        </div>
                        <div className="customer-counter-box">
                            <figure>
                                <img src="assets/images/counter-icon3.png" alt="counter-icon3" loading="lazy"/>
                            </figure>
                            <div className="count d-inline-block">4999</div>
                            <span className="d-block client-status">SATISFIED <br/> CUSTOMERS</span>
                        </div>
                        <div className="customer-counter-box">
                            <figure>
                                <img src="assets/images/counter-icon4.png" alt="counter-icon4" loading="lazy"/>
                            </figure>
                            <div className="count d-inline-block">160</div>
                            <span className="d-block client-status">EXPERT <br/> CONSULTANT</span>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- ABOUT PROGRESS SECTION START HERE -->
            <!-- CUSTOMER SLIDER SECTION START HERE --> */}
            <section className="customer-slider-section w-100 float-left padding-top padding-bottom">
                <div className="container">
                    <div className="customer-slider-outer-con">
                        <div className="customer-title-con">
                            <h2>WHAT THEY ARE TALKING ABOUT</h2>
                            <p>Trusted by more than 4,200 customers</p>
                            <div className="btn-wrap">
                                <button className="prev-btn"><i className="fas fa-long-arrow-alt-left"></i></button>
                                <button className="next-btn"><i className="fas fa-long-arrow-alt-right"></i></button>
                            </div>
                        </div>
                        <div className="customer-slider-con">
                            <div id="owl-carousel-customer" className="owl-carousel owl-theme">
                                <div className="item">
                                    <div className="customer-slider-review">
                                        <p>Lorem ipsum is simply free text <br/> dolor sit amet, consectetur notted adipisicing
                                            elit
                                            sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <span className="d-block">KEVIN MARTIN</span>
                                        <small className="d-block">CUSTOMER</small>
                                        <figure className="mb-0">
                                            <img src="assets/images/customer-img1.png" alt="customer-img1" loading="lazy" />
                                        </figure>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="customer-slider-review">
                                        <p>Lorem ipsum is simply free text <br/> dolor sit amet, consectetur notted adipisicing
                                            elit
                                            sed do
                                            eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                        <span className="d-block">CHRISTINE EVE</span>
                                        <small className="d-block">CUSTOMER</small>
                                        <figure className="mb-0">
                                            <img src="assets/images/customer-img2.png" alt="customer-img2" loading="lazy"/>
                                        </figure>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            {/* <!-- CUSTOMER SLIDER SECTION END HERE -->
            <!-- BEST EXPERIENCE SECTION START HERE --> */}
            <section className="best-experience-section w-100 float-left">
                <div className="container-fluid">
                    <div className="register-inner-section" data-aos="fade-up" data-aos-duration="700">
                        <h2>WE’RE DELIVERING THE BEST CUSTOMER EXPERIENCE</h2>
                        <div className="generic-btn">
                            <a href="contact.html">LET’S GET STARTED</a>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- BEST EXPERIENCE SECTION END HERE -->
            <!-- FOOTER SECTION START HERE --> */}
            <section className="footer-main-section w-100 float-left">
                <div className="container">
                    <div className="footer-inner-section">
                        <div className="footer-logo-con">
                            <a href="index.html">
                                <figure>
                                    <img src="assets/images/header-logo.png" alt="header-logo" loading="lazy"/>
                                </figure>
                            </a>
                            <p>Welcome to our consultancy agency. Lore ipsum simply text amet cing elit.</p>
                            <div className="footer-contact-details">
                                <ul className="list-unstyled">
                                    <li className="position-relative"><i className="fas fa-phone-alt"></i> <a
                                            href="tel:+61383766284">+61 3 8376 6284</a></li>
                                    <li className="position-relative"><i className="fas fa-envelope"></i> <a
                                            href="mailto:Info@consultking.com">Info@consultking.com</a></li>
                                    <li className="position-relative"><i className="fas fa-map-marker-alt"></i> 21 King Street
                                        Melbourne, <br/> 3000, Australia</li>
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
                        <div className="footer-newsletter-con">
                            <h4>NEWSLETTER</h4>
                            <div className="subscription-con">
                                <p>Subsrcibe for latest articles and resources</p>
                                <div className="subs-register-con">
                                    <input type="text" placeholder="Email address"/>
                                    <button>REGISTER</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright-con">
                        <p>© Copyright 2024 by consultking.com</p>
                        <div className="header-social-links">
                            <ul className="list-unstyled mb-0 d-flex align-items-center">
                                <li><a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
                                <li><a
                                        href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i
                                            className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            
        </div>
    )
}

export default AboutUs;