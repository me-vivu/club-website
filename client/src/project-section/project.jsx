import React from "react";
import Navigation from "../home/navigation";
import Footer from "../home/footer";
import UPimg from "../events/belownav";
// import img2 from "../assets/images/image4.jpeg"
import first from "../assets/images/pronybhyia.jpg"
import second from "../assets/images/harshitadi.jpg"
import third from "../assets/images/bhatibhyia.jpg"
import forth from "../assets/images/vivekbhyia.jpg"
import fifth from "../assets/images/abhilashbhyia.jpg"
import sixth from "../assets/images/dubeybhyia.jpg"

import "./project.css" ;


function Projectpage(){
    return(
        <div>
               <Navigation/>
             
               <section className="sub-banner-section2 about-page-banner w-100 float-left d-flex align-items-center">
                <div className="container">
                    <div className="sub-banner-inner-section" >
                        <h1 className="texthai">OUR PROJECTS</h1>
                    </div>
                </div>
            </section>
            
              
     

    <section className="supplementory-section w-100 float-left padding-top padding-bottom">
        <div className="container">
            <div className="generic-title text-center" data-aos="fade-up" data-aos-duration="700">
                <h2>SUPPLEMENTARY SERVICES</h2>
                <p>WE HELP YOU TO ENSURE EVERYONE IS IN THE RIGHT JOBS</p>
            </div>
            <div className="supplementory-inner-section" data-aos="fade-up" data-aos-duration="700">
                <div className="supplementory-left-box">
                    <h2>CONSUMER <br/> MARKETS</h2>
                    <p>Markets dominated by products and services designed for the general consumer.</p>
                    <div className="service-btn">
                        <a href="single-service.html">READ MORE</a>
                    </div>
                </div>
                <div className="supplementory-right-box">
                    <div className="supplementory-right-img-box">
                        <figure className="mb-0">
                            <img src={first} alt="consumer-market-img" loading="lazy" className="imagehai"/>
                        </figure>
                        {/* <figure className="mb-0 supplementory-icon">
                            <img src="assets/images/market-consumer-icon.png" alt="market-consumer-icon" loading="lazy"/>
                        </figure> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section
        className="supplementory-section supplementory-reverse-order-section w-100 float-left padding-top padding-bottom">
        <div className="container">
            <div className="supplementory-inner-section" data-aos="fade-up" data-aos-duration="700">
                <div className="supplementory-left-box">
                    <h2>BUSINESS <br/> INSURANCE</h2>
                    <p>Business Insurance serves business executives who are responsible for the purchase and
                        administration.</p>
                    <div className="service-btn">
                        <a href="single-service.html">READ MORE</a>
                    </div>
                </div>
                <div className="supplementory-right-box">
                    <div className="supplementory-right-img-box">
                        <figure className="mb-0">
                            <img src={second} alt="consumer-market-img2" loading="lazy" className="imagehai"/>
                        </figure>
                        {/* <figure className="mb-0 supplementory-icon">
                            <img src="assets/images/business-insurence-icon.png" alt="business-insurence-icon"
                                loading="lazy"/>
                        </figure> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="supplementory-section supplementory2-section w-100 float-left padding-top padding-bottom">
        <div className="container">
            <div className="supplementory-inner-section" data-aos="fade-up" data-aos-duration="700">
                <div className="supplementory-left-box">
                    <h2>BUSINESS <br/> COMMUNICATION</h2>
                    <p>We go deep to unlock insight and have the courage to act. We bring the right people together to
                        challenge.</p>
                    <div className="service-btn">
                        <a href="single-service.html">READ MORE</a>
                    </div>
                </div>
                <div className="supplementory-right-box">
                    <div className="supplementory-right-img-box">
                        <figure className="mb-0">
                            <img src={third} alt="communication-img" loading="lazy" className="imagehai"/>
                        </figure>
                        {/* <figure className="mb-0 supplementory-icon">
                            <img src="assets/images/communication-icon.png" alt="communication-icon" loading="lazy"/>
                        </figure> */}
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section
        className="supplementory-section supplementory-reverse-order-section w-100 float-left padding-top padding-bottom">
        <div className="container">
            <div className="supplementory-inner-section" data-aos="fade-up" data-aos-duration="700">
                <div className="supplementory-left-box">
                    <h2>BUSINESS <br/> INSURANCE</h2>
                    <p>Business Insurance serves business executives who are responsible for the purchase and
                        administration.</p>
                    <div className="service-btn">
                        <a href="single-service.html">READ MORE</a>
                    </div>
                </div>
                <div className="supplementory-right-box">
                    <div className="supplementory-right-img-box">
                        <figure className="mb-0">
                            <img src={forth} alt="consumer-market-img2" loading="lazy" className="imagehai"/>
                        </figure>
                        {/* <figure className="mb-0 supplementory-icon">
                            <img src="assets/images/business-insurence-icon.png" alt="business-insurence-icon"
                                loading="lazy"/>
                        </figure> */}
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="supplementory-section supplementory2-section w-100 float-left padding-top padding-bottom">
        <div className="container">
            <div className="supplementory-inner-section" data-aos="fade-up" data-aos-duration="700">
                <div className="supplementory-left-box">
                    <h2>BUSINESS <br/> COMMUNICATION</h2>
                    <p>We go deep to unlock insight and have the courage to act. We bring the right people together to
                        challenge.</p>
                    <div className="service-btn">
                        <a href="single-service.html">READ MORE</a>
                    </div>
                </div>
                <div className="supplementory-right-box">
                    <div className="supplementory-right-img-box">
                        <figure className="mb-0">
                            <img src={fifth} alt="communication-img" loading="lazy" className="imagehai"/>
                        </figure>
                        {/* <figure className="mb-0 supplementory-icon">
                            <img src="assets/images/communication-icon.png" alt="communication-icon" loading="lazy"/>
                        </figure> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
    
 
    {/* <section className="best-experience-section w-100 float-left">
        <div className="container-fluid">
            <div className="register-inner-section" data-aos="fade-up" data-aos-duration="700">
                <h2>WE’RE DELIVERING THE BEST CUSTOMER EXPERIENCE</h2>
                <div className="generic-btn">
                    <a href="contact.html">LET’S GET STARTED</a>
                </div>
            </div>
        </div>
    </section> */}

    <Footer/>
   
    
   
    </div>
    
    )
}
export default Projectpage;