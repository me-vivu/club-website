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


import "../css/custom.css"
import "./home-page.css"








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