import React from 'react';
import image from "../assets/images/drone.jpeg"
import "./home-page.css"

const EventSection = () => {
    return (
        <section className="blog-section w-100 float-left padding-top padding-bottom">
            <div className="container">
                <div className="generic-title text-center" data-aos="fade-up" data-aos-duration="700">
                    <h2>WHAT’S HAPPENING</h2>
                    <p>Checkout what we have been doing</p>
                </div>
                <div className="blog-inner-section" data-aos="fade-up" data-aos-duration="700">
                    <div className="blog-box position-relative">
                        <figure className="mb-0">
                            <img src={image} className="event-img" alt="blog-img1" loading="lazy" />
                        
                        </figure>
                        <div className="blog-text-details">
                            <div className="posting-date">13 OCT</div>
                            <div className="comments">
                                <span>BY ADMIN / <small>2 COMMENTS</small></span>
                            </div>
                            <h4><a href="blog.html">COLLOQUIUM</a></h4>
                            <p>Aellentesque porttitor lacus quis enim varius sed efficitur turpis gilla sed sit amet.</p>
                            <div className="blog-btn position-relative">
                                <a href="blog.html">READ MORE</a>
                            </div>
                        </div>
                    </div>

                    <div className="blog-box position-relative">
                        <figure className="mb-0">
                            <img src={image} alt="blog-img1" className="event-img"  loading="lazy" />
                        </figure>
                        <div className="blog-text-details">
                            <div className="posting-date">13 OCT</div>
                            <div className="comments">
                                <span>BY ADMIN / <small>2 COMMENTS</small></span>
                            </div>
                            <h4><a href="blog.html">DRONE WORKSHOP</a></h4>
                            <p>Aellentesque porttitor lacus quis enim varius sed efficitur turpis gilla sed sit amet.</p>
                            <div className="blog-btn position-relative">
                                <a href="blog.html">READ MORE</a>
                            </div>
                        </div>
                    </div>

                    <div className="blog-box position-relative">
                        <figure className="mb-0">
                            <img src={image} alt="blog-img1" className="event-img" loading="lazy" />
                        </figure>
                        <div className="blog-text-details">
                            <div className="posting-date">13 OCT</div>
                            <div className="comments">
                                <span>BY ADMIN / <small>2 COMMENTS</small></span>
                            </div>
                            <h4><a href="blog.html">20'S IN 90'S</a></h4>
                            <p>Aellentesque porttitor lacus quis enim varius sed efficitur turpis gilla sed sit amet.</p>
                            <div className="blog-btn position-relative">
                                <a href="blog.html">READ MORE</a>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the above structure for other blog boxes */}
                </div>
            </div>
        </section>
    );
};

export default EventSection;
