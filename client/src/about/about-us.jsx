import React from "react";

import Footer from "../home/footer";
import Navigation from "../home/navigation";
import ProgressCounterSection from "../home/dataView";

import img2 from "../assets/images/image4.jpeg"
import first from "../assets/images/pronybhyia.jpg"
import second from "../assets/images/harshitadi.jpg"
import third from "../assets/images/bhatibhyia.jpg"
import forth from "../assets/images/vivekbhyia.jpg"
import fifth from "../assets/images/abhilashbhyia.jpg"
import sixth from "../assets/images/dubeybhyia.jpg"
import "./abou-us.css" ; 
import "../home/home-page.css"
import "../css/custom.css"


function AboutUs(){
    return(
        <div>
          
            
            
            <Navigation/>
          

           
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
            
            
            <Footer/>

        </div>
    )
}

export default AboutUs;