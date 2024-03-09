import React from 'react';
import MentorImg from "../assets/images/mentor.png"

const MentorSection = () => {



    return (
        <section className="market-section w-100 float-left padding-top position-relative">
            <div className="container">
                <div className="market-inner-section" data-aos="fade-up" data-aos-duration="700">
                    <div className="market-video-con">
                        <figure className="mb-0 market-main-img">
                            <img src={MentorImg} alt="main-img" loading="lazy" />
                        </figure>
                    
                    </div>
                    <div className="market-text-con">
                        <h3 >Dr. SRI PHANI KRISHNA KARRI</h3>
                        <h4>Faculty Advisor</h4>
                        <p>Our club offers a vibrant community where members engage in workshops, projects, and activities designed to deepen their understanding and practical skills in these cutting-edge fields. Whether you're an experienced enthusiast or new to the world of AI and robotics, there's something here for everyone. </p>
                        
                        
                        
                    </div>
                </div>
    

        
                {/* market bottom boxes */}
                <div className="characteristics-section" data-aos="fade-up" data-aos-duration="700">
                    <div className="characteristics-box d-flex align-items-center">
                        
                        <div className="characteristics-txt">
                            <span className="d-block">EMBRACE FAILURE AS A STEPPING STONE   </span>
                            <p className="mb-0">Failure is not the end but a crucial part of the learning process.
                             Embrace failure as a stepping stone toward success.</p>
                        </div>
                    </div>
                    <div className="characteristics-box characteristics-box2 d-flex align-items-center">
                        
                        <div className="characteristics-txt">
                            <span className="d-block">FOSTER COLLABORATION AND DIVERSITY</span>
                            <p className="mb-0"> collaboration and diversity are key to 
                            driving innovation and creating meaningful solutions.</p>
                        </div>
                    </div>
                </div>
                {/* market bottom boxes */}
            </div>
        </section>
    );
};

export default MentorSection;
