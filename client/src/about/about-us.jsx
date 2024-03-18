import React from "react";

import Footer from "../home/footer";
import Navigation from "../home/navigation";
import MembImage from "./about-team";
import img2 from "../assets/images/image4.jpeg"
import image from "../assets/images/team.png"
import "./abou-us.css" ; 
import "../home/home-page.css"
import "../css/custom.css"


function AboutUs(){
    return(
        <div>
          
            
            
            <Navigation/>
          

           
            <section className="sub-banner-section about-page-banner w-100 float-left d-flex align-items-center" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
                <div className="container">
                    
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
                                <figure className="mb-0">
                                    {/* what is problem here */}



                                    <img src={img2} alt="vision-img" loading="lazy" className="image1"/>
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
                        <h2>OUR TEAM</h2>
                        <p>TEAM BEHIND EVERYTHING</p>
                    </div>
                    
                    <MembImage/> 
                       
                </div>
            </section>
            
            
            <Footer/>

        </div>
    )
}

export default AboutUs;