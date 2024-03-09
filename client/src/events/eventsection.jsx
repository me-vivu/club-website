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
import "./event.css" ; 
function eventsimage(){
    return(
        <div>
               <Navigation/>
               <UPimg/>
              
        {/* <section className="core-services-section w-100 float-left padding-top padding-bottom">
        <div className="container">
            <div className="generic-title text-center" data-aos="fade-up" data-aos-duration="700">
                <h2>CORE SERVICES</h2>
                <p>WE GO DEEP TO UNLOCK INSIGHT AND HAVE THE COURAGE TO ACT.</p>
            </div>
            <div className="core-services-inner-con" data-aos="fade-up" data-aos-duration="700">
                <div className="core-service-box">
                    <figure>
                        <img src="assets/images/core-service-img1.png" alt="core-service-img1" loading="lazy"/>
                    </figure>
                    <h4>STRATEGY <br/> AND PLANNING</h4>
                    <ul>
                        <li>Executive summary</li>
                        <li>Business description</li>
                        <li>Environment analysis</li>
                        <li>Industry background</li>
                        <li>Competitor analysis</li>
                    </ul>
                    <div className="service-btn">
                        <a href="single-service.html">READ MORE</a>
                    </div>
                </div>
                <div className="core-service-box">
                    <figure>
                        <img src="assets/images/core-service-img2.png" alt="core-service-img2" loading="lazy"/>
                    </figure>
                    <h4>FINANCE AND <br/> RESTRUCTURING</h4>
                    <ul>
                        <li>Cash management</li>
                        <li>Cash generation</li>
                        <li>Reorganization of functions</li>
                        <li>Reduce overhead</li>
                        <li>Improving the efficiency</li>
                    </ul>
                    <div className="service-btn">
                        <a href="single-service.html">READ MORE</a>
                    </div>
                </div>
                <div className="core-service-box">
                    <figure>
                        <img src="assets/images/core-service-img3.png" alt="core-service-img3" loading="lazy"/>
                    </figure>
                    <h4>AUDIT AND <br/> EVALUATION</h4>
                    <ul>
                        <li>Plan and Design</li>
                        <li>Substantive Test</li>
                        <li>Details of Balances</li>
                        <li>Audit Report</li>
                        <li>References</li>
                    </ul>
                    <div className="service-btn">
                        <a href="single-service.html">READ MORE</a>
                    </div>
                </div>
                <div className="core-service-box">
                    <figure>
                        <img src="assets/images/core-service-img4.png" alt="core-service-img4" loading="lazy"/>
                    </figure>
                    <h4>TAXES AND <br/> EFFICIENCY</h4>
                    <ul>
                        <li>Corporation defined</li>
                        <li>Used primarily for a purpose</li>
                        <li>Taxable income</li>
                        <li>Transfer pricing</li>
                        <li>Tax returns</li>
                    </ul>
                    <div className="service-btn">
                        <a href="single-service.html">READ MORE</a>
                    </div>
                </div>
            </div>
        </div> */}
    {/* </section> */}

    {/* <section className="mission-section w-100 float-left padding-top padding-bottom">
        <div className="container">
            <div className="mission-inner-box text-center" data-aos="fade-up" data-aos-duration="700">
                <h2>MISSION IS TO PROTECT <br/> YOUR BUSINESSES & MUCH MORE</h2>
                <p>Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do eiusmod
                    <br/> tempor incididunt ut labore et dolore magna aliqua lonm andhn.
                </p>
                <div className="generic-btn">
                    <a href="single-service.html">DISCOVER MORE</a>
                </div>
            </div>
        </div>
    </section> */}

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
                        <figure className="mb-0 supplementory-icon">
                            <img src="assets/images/market-consumer-icon.png" alt="market-consumer-icon" loading="lazy"/>
                        </figure>
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
                        <figure className="mb-0 supplementory-icon">
                            <img src="assets/images/business-insurence-icon.png" alt="business-insurence-icon"
                                loading="lazy"/>
                        </figure>
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
                        <figure className="mb-0 supplementory-icon">
                            <img src="assets/images/communication-icon.png" alt="communication-icon" loading="lazy"/>
                        </figure>
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
                        <figure className="mb-0 supplementory-icon">
                            <img src="assets/images/business-insurence-icon.png" alt="business-insurence-icon"
                                loading="lazy"/>
                        </figure>
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
                        <figure className="mb-0 supplementory-icon">
                            <img src="assets/images/communication-icon.png" alt="communication-icon" loading="lazy"/>
                        </figure>
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
export default eventsimage;