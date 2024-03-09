import React from 'react';
import OngoingProject from '../assets/images/project-ongoing.png';
import CompProject from '../assets/images/complete-proj.png';
import memeberImg from '../assets/images/member.png';
import EventImg from '../assets/images/event.png';

import 'aos/dist/aos.css';

const ProgressCounterSection = () => {
    return (
        <div className="progress-counter-section w-100 float-left">
            <div className="container">
                <div className="customer-counter-inner-sec" data-aos="fade-up" data-aos-duration="700">
                    <div className="customer-counter-box">
                        <figure>
                            <img src={OngoingProject} alt="counter-icon1" loading="lazy" id='progress-img'/>
                        </figure>
                        <div className="count d-inline-block">10</div>
                        <small>+</small>
                        <span className="d-block client-status">ONGOING <br /> PROJECTS</span>
                    </div>
                    <div className="customer-counter-box">
                        <figure>
                            <img src={CompProject} alt="counter-icon2" loading="lazy" id='progress-img' />
                        </figure>
                        <div className="count d-inline-block">15</div>
                        <small>+</small>
                        <span className="d-block client-status">COMPLETED <br /> PROJECTS</span>
                    </div>
                    <div className="customer-counter-box">
                        <figure>
                            <img src={EventImg} alt="counter-icon3" loading="lazy" id='progress-img' />
                        </figure>
                        <div className="count d-inline-block">30</div>
                        <small>+</small>
                        <span className="d-block client-status">EVENTS <br /> CONDUCTED</span>
                    </div>
                    <div className="customer-counter-box">
                        <figure>
                            <img src={memeberImg} alt="counter-icon4" loading="lazy" id='progress-img'/>
                        </figure>
                        <div className="count d-inline-block">35</div>
                        <span className="d-block client-status">ACTIVE <br /> MEMBERS</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgressCounterSection;
