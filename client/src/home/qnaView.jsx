import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import contImg from "../assets/images/data-bg.jpg";


const FaqSection = () => {
    const [openItem, setOpenItem] = useState(1);

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? 0 : index);
    };

    const faq_ques = [
        "What kind of activities does the AI and Robotics Club offer?",
        "Do I need prior experience in AI or robotics to join the club?",
        "How can I get involved in projects within the club?",
        "What resources does the club provide for learning AI and robotics?"

    ]

    const faq_ans = [
        "The club offers a range of activities including hands-on workshops, project building sessions, guest lectures, and discussions on topics related to artificial intelligence and robotics.",
        "No prior experience is required! The club welcomes members with varying levels of expertise, from beginners to advanced enthusiasts. Our activities cater to all skill levels and provide opportunities for learning and growth.",
        "Members can get involved in projects by attending project brainstorming sessions, expressing interest in ongoing projects, or proposing new project ideas. Collaborative teamwork is encouraged, and members can contribute their skills and ideas to various projects.",
        "The club provides access to a range of hardware resources essential for learning about AI and robotics, including microcontrollers, sensors, actuators, and other electronic components. Additionally, members have access to hands-on workshops, tutorials, and projects that utilize these hardware tools. "
    ]

    return (
        <section className="faq-main-section w-100 float-left padding-top padding-bottom">
            <div className="container">
                <div className="generic-title text-center" data-aos="fade-up" data-aos-duration="700">
                    <h2>QUESTION ANSWERS</h2>
                    <p>If you have any more questions, Contact us</p>
                </div>
                <div className="faq-outer-con">
                    <div className="faq-box">
                        <div id="accordion">
                            {[1, 2, 3, 4].map((index) => (
                                <div className="card" key={index} data-aos="fade-up" data-aos-duration="700">
                                    <div className="card-header" id={`heading${index}`}>
                                        <h5 className="mb-0">
                                            <button
                                                className={`btn btn-link ${openItem === index ? '' : 'collapsed'}`}
                                                onClick={() => toggleItem(index)}
                                                aria-expanded={openItem === index ? 'true' : 'false'}
                                                aria-controls={`collapse${index}`}
                                            >
                                                {faq_ques[index-1]}
                                                {' '}
                                                
                                            </button>
                                        </h5>
                                    </div>
                                    <div
                                        id={`collapse${index}`}
                                        className={`collapse ${openItem === index ? 'show' : ''}`}
                                        aria-labelledby={`heading${index}`}
                                        data-parent="#accordion"
                                    >
                                        <div className="card-body">
                                            {faq_ans[index-1]}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="faq-img-con">
                        <figure data-aos="fade-up" data-aos-duration="700">
                            <img src={contImg} alt="faq-img" loading="lazy" />
                        </figure>
                        
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FaqSection;
