import React from 'react';
import MentorImg from "../assets/images/profile.jpg"

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
                        <div className="characteristics-numb">01</div>
                        <div className="characteristics-txt">
                            <span className="d-block">GET PROFESSIONAL ADVICE</span>
                            <p className="mb-0">There are many variations of available but the majority have suffered
                                alteration.</p>
                        </div>
                    </div>
                    <div className="characteristics-box characteristics-box2 d-flex align-items-center">
                        <div className="characteristics-numb">02</div>
                        <div className="characteristics-txt">
                            <span className="d-block">TRUSTED & PROFESSIONAL</span>
                            <p className="mb-0">There are many variations of available but the majority have suffered
                                alteration.</p>
                        </div>
                    </div>
                </div>
                {/* market bottom boxes */}
            </div>
        </section>
    );
};

export default MentorSection;
