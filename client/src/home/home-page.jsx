import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "../css/aos.css"
import "../css/custom-style.css"
import "../css/custom.css"
import "../css/mobile.css"
import "../css/owl.carousel.css"
import "../css/responsive.css"
import "../css/special-classes.css"


import 'aos/dist/aos.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight, faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

import CarouselComponent from "./carausel";
import ProjectSection from "./project";
import MentorSection from "./mentor-view";
import MissionSection from "./mission";
import FaqSection from "./qnaView";
import ProgressCounterSection from "./dataView";
import Footer from "./footer";
import EventSection from "./events";
import NavigationSection from "./navigation"
import ScrollToTopButton from "./scrollTop";

import { useNavigate } from "react-router-dom";



import logo from "../assets/images/nitap-logo.png";
import instagram from "../assets/images/icons/instagram.png";
import facebook from "../assets/images/icons/facebook.png";
import linkedin from "../assets/images/icons/linkedin.png";


import "../css/custom.css"
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

// function ScrollToTopButton() {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             if (window.scrollY > 300) {
//                 setIsVisible(true);
//             } else {
//                 setIsVisible(false);
//             }
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({
//             top: 0,
//             behavior: 'smooth'
//         });
//     };

//     return (
//         <button id="button" className={isVisible ? 'show' : ''} onClick={scrollToTop}>
//             Scroll To Top
//         </button>
//     );
// }

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





function HomePage(){

    const navigate = useNavigate();
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
            

            
        <NavigationSection/>
        
        <section className="banner-main-section w-100 float-left align-items-center">
            <CarouselComponent/>
            
        </section>
        

        <ProjectSection/>
        

        <MentorSection/>
        <br/>
        
        <MissionSection/>
        <FaqSection/>
        <ProgressCounterSection/>
        <EventSection/>
        <Footer/>
        <ScrollToTopButton/>


        </div>
    )
}


export default HomePage;