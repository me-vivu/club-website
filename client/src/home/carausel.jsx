import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft, faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import 'aos/dist/aos.css';

const CarouselComponent = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const nextSlide = () => {
        const lastIndex = 2; // Number of slides - 1
        const newIndex = activeIndex === lastIndex ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
    };

    const prevSlide = () => {
        const lastIndex = 2; // Number of slides - 1
        const newIndex = activeIndex === 0 ? lastIndex : activeIndex - 1;
        setActiveIndex(newIndex);
    };

    return (
        <div className="container">
            <div className="banner-outer-section" data-aos="fade-up" data-aos-duration="700">
                <div id="demo" className="carousel slide">
                    {/* <!-- The slideshow --> */}
                    <div className="carousel-inner">
                        <div className={`carousel-item ${activeIndex === 0 ? 'active' : ''}`}>
                            <div className="banner-inner-section">
                                <span className="d-block">IGNITE YOUR PASSION</span>
                                <h1>DIVE DEEP INTO<br /> THE WORLD OF AI AND ROBOTICS</h1>
                                <div className="generic-btn">
                                    <a href="services.html">DISCOVER MORE</a>
                                </div>
                            </div>
                        </div>

                        <div className={`carousel-item ${activeIndex === 1 ? 'active' : ''}`}>
                            <div className="banner-inner-section">
                                <span className="d-block">WELCOMING IN PRO CONSULTANCY!</span>
                                <h1>ROBOTICS RENAISSANCE <br/>ENGINEERING EXCELLENCE</h1>
                                <div className="generic-btn">
                                    <a href="services.html">DISCOVER MORE</a>
                                </div>
                            </div>
                        </div>

                        <div className={`carousel-item ${activeIndex === 2 ? 'active' : ''}`}>
                            <div className="banner-inner-section">
                                <span className="d-block">WELCOMING IN PRO CONSULTANCY!</span>
                                <h1>ROBOTICS RENAISSANCE <br/>ENGINEERING EXCELLENCE</h1>
                                <div className="generic-btn">
                                    <a href="services.html">DISCOVER MORE</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- Left and right controls --> */}
            <a className="carousel-control-prev" href="#demo" data-slide="prev" onClick={prevSlide}>
                <span className="carousel-control-prev-icon"><FontAwesomeIcon icon={faLongArrowAltLeft} /></span> NEXT
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next" onClick={nextSlide}>
                <span className="carousel-control-next-icon">PREV <FontAwesomeIcon icon={faLongArrowAltRight} /></span>
            </a>
        </div>
    );
};

export default CarouselComponent;