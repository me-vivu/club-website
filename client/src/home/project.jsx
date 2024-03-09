import React from 'react';

const ProjectSection = () => {
    return (
        <section className="consulting-services-section w-100 float-left padding-top padding-bottom">
            <div className="container">
                <div className="consulting-services-outer-section">
                    <div className="generic-title text-center" data-aos="fade-up" data-aos-duration="700">
                        <h2>Projects In Progress</h2>
                        <p>Transforming Visions into Reality.</p>
                    </div>
                    <div className="consulting-services-inner-con" data-aos="fade-up" data-aos-duration="700">
                        <div className="consulting-services-box" id = "proj-1">
                            <h4>Autonomous <br /> Drone</h4>
                            <div className="consulting-services-img-con d-flex align-items-center">
                                <a href="single-service.html">READ MORE</a>
                                
                            </div>
                        </div>
                        <div className="consulting-services-box" id = "proj-2">
                            <h4>Micromouse <br /> Bot </h4>
                            <div className="consulting-services-img-con d-flex align-items-center">
                                <a href="single-service.html">READ MORE</a>
                                
                            </div>
                        </div>
                        <div className="consulting-services-box" id = "proj-3">
                            <h4>Augmented <br /> Reality</h4>
                            <div className="consulting-services-img-con d-flex align-items-center">
                                <a href="single-service.html">READ MORE</a>
                                
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
