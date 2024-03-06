import React from "react";

import "../css/aos.css"
import "../css/custom-style.css"
import "../css/custom.css"
import "../css/mobile.css"
import "../css/owl.carousel.css"
import "../css/responsive.css"
import "../css/special-classes.css"

import 'aos/dist/aos.css';

import logo from "../assets/images/nitap-logo.png";
import instagram from "../assets/images/icons/instagram.png";
import facebook from "../assets/images/icons/facebook.png";
import linkedin from "../assets/images/icons/linkedin.png";

import "./home-page.css"

function OwlCarouselCustomer() {
    useEffect(() => {
        const owl = $("#owl-carousel-customer");
        owl.owlCarousel();
        $(".next-btn").click(() => {
            owl.trigger("next.owl.carousel");
        });
        $(".prev-btn").click(() => {
            owl.trigger("prev.owl.carousel");
        });
        $(".prev-btn").addClass("disabled");
        $(owl).on("translated.owl.carousel", () => {
            if ($(".owl-prev").hasClass("disabled")) {
                $(".prev-btn").addClass("disabled");
            } else {
                $(".prev-btn").removeClass("disabled");
            }
            if ($(".owl-next").hasClass("disabled")) {
                $(".next-btn").addClass("disabled");
            } else {
                $(".next-btn").removeClass("disabled");
            }
        });
    }, []);

    return (
        <div id="owl-carousel-customer" className="owl-carousel">
            {/* Add your carousel items here */}
        </div>
    );
}

function Preloader() {
    useEffect(() => {
        $('.loader').fadeOut();
        $('.loader-mask').delay(350).fadeOut('slow');
    }, []);

    return null;
}

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <button id="button" className={isVisible ? 'show' : ''} onClick={scrollToTop}>
            Scroll To Top
        </button>
    );
}

function SkillBarsAnimation() {
    useEffect(() => {
        const startAnimation = () => {
            $('.skills').each(function () {
                $(this).find('.skillbar').animate({
                    width: $(this).attr('data-percent')
                }, 6000);
            });
        };

        startAnimation();
    }, []);

    return null;
}

function CounterAnimation() {
    useEffect(() => {
        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 6000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    }, []);

    return null;
}

function Lightbox({ videoId }) {
    const [isOpen, setIsOpen] = useState(false);

    const lightboxOpen = () => {
        setIsOpen(true);
        document.getElementById('VisaChipCardVideo').play();
    };

    const lightboxClose = () => {
        setIsOpen(false);
        document.getElementById('VisaChipCardVideo').pause();
    };

    return (
        <>
            <div id="light" style={{ display: isOpen ? 'block' : 'none' }}>
                {/* Add your lightbox content here */}
            </div>
            <div id="fade" style={{ display: isOpen ? 'block' : 'none' }} onClick={lightboxClose}></div>
            <button onClick={lightboxOpen}>Open Lightbox</button>
            <video id="VisaChipCardVideo">
                {/* Add your video source here */}
            </video>
        </>
    );
}



function HomePage(){
    return(
        <div>

            {/* <div className="loader-mask">
                <div className="loader">
                    <div></div>
                    <div></div>
                </div>
            </div> */}
            {/* <!-- Preloader -->
            <!-- HEADER SECTION START--> */}
            <div className="header-main-con w-100 float-left">
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-light p-0">
                        <a className="navbar-brand" href="index.html">
                            <figure className="mb-0">
                                <img src={logo} alt="header-logo" className="logo-img" loading="lazy"/>
                            </figure>
                        </a>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link p-0 active" href="index.html">HOME</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="services.html">SERVICES</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="about.html">ABOUT</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle p-0 " href="#" id="navbarDropdown5" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        PAGES
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown5">
                                        <a className="dropdown-item " href="single-case.html">Single Case</a>
                                        <a className="dropdown-item" href="single-service.html">Single Service</a>
                                        <a className="dropdown-item" href="faq.html">Faq</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="cases.html">CASES</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle p-0" href="blog.html" id="navbarDropdown4" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        BLOGS
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown4">
                                        <a className="dropdown-item" href="blog.html">Blog</a>
                                        <a className="dropdown-item" href="load-more.html">Load More</a>
                                        <a className="dropdown-item" href="single-blog.html">Single Blog</a>
                                        <a className="dropdown-item" href="one-column.html">One Column</a>
                                        <a className="dropdown-item" href="two-column.html">Two Column</a>
                                        <a className="dropdown-item" href="three-column.html">Three Column</a>
                                        <a className="dropdown-item" href="three-colum-sidbar.html">Three Column Sidbar</a>
                                        <a className="dropdown-item" href="four-column.html">Four Column</a>
                                        <a className="dropdown-item" href="six-colum-full-wide.html">Six Column</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link p-0" href="contact.html">CONTACT</a>
                                </li>
                            </ul>
                            <div className="header-social-links">
                                <ul className="list-unstyled mb-0 d-flex align-items-center">
                                    <li><a href="https://www.facebook.com/login/"><img className= "social-logo" src= {facebook} ></img></a></li>
                                    <li><a href="https://www.linkedin.com/login"><img className= "social-logo" src= {linkedin} ></img></a></li>
                                    <li><a href="https://twitter.com/i/flow/login"><img className= "social-logo" src= {instagram} ></img></a></li>
                                    <li><a href="" ><img className= "social-logo" src= {instagram} ></img> </a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </nav>
                </div>
            </div>
            {/* <!-- HEADER SECTION END -->
            <!-- BANNER SECTION START --> */}
            <section className="banner-main-section w-100 float-left d-flex align-items-center">
                <div className="container">
                    <div className="banner-outer-section" >
                        <div id="demo" className="carousel slide" data-ride="carousel">
                            {/* <!-- The slideshow --> */}
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="banner-inner-section">
                                        <span className="d-block">WELCOME TO PRO CONSULTANCY</span>
                                        <h1>CONSULTING FOR <br/> EVERY BUSINESS</h1>
                                        <div className="generic-btn">
                                            <a href="services.html">DISCOVER MORE</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="carousel-item">
                                    <div className="banner-inner-section">
                                        <span className="d-block">WELCOMING IN PRO CONSULTANCY!</span>
                                        <h1>CONSULTING FOR <br/> VARIOUS</h1>
                                        <div className="generic-btn">
                                            <a href="services.html">DISCOVER MORE</a>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="carousel-item">
                                    <div className="banner-inner-section">
                                        <span className="d-block">GREETINGS FROM PRO CONSULTANCY!</span>
                                        <h1>CONSULTANCY FOR <br/> ALL TYPE OF BUSINESS</h1>
                                        <div className="generic-btn">
                                            <a href="services.html">DISCOVER MORE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* <!-- Left and right controls --> */}
                    <a className="carousel-control-prev" href="#demo" data-slide="prev">
                        <span className="carousel-control-prev-icon"><i className="fas fa-long-arrow-alt-left"></i> PREV</span>
                    </a>
                    <a className="carousel-control-next" href="#demo" data-slide="next">
                        <span className="carousel-control-next-icon">NEXT <i className="fas fa-long-arrow-alt-right"></i></span>
                    </a>
                </div>
            </section>
            
            

        </div>
    )
}


export default HomePage;