import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import axios from 'axios'; // Import Axios
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./home-page.css";
import { useNavigate } from 'react-router-dom';
import 'aos/dist/aos.css';

const CarouselComponent = () => {
    const [carouselItems, setCarouselItems] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch carousel items from server
        axios.get('http://localhost:3001/getCarousels')
            .then(response => {
                if (response.data && response.data.data) {
                    setCarouselItems(response.data.data);
                    console.log(carouselItems);
                }
            })
            .catch(error => console.error('Error fetching carousel items:', error));
    }, []);

    return (
        <Carousel showIndicators={false}
            showStatus={false}
            interval={4000}
            transitionTime={800}
            autoPlay={true}
            showThumbs={false}
            infiniteLoop={true}>

            {carouselItems.map((item, index) => (
                <div key={index} className="banner-inner-section">
                    <span className="d-block">{item.header}</span>
                    <h1>{item.firstLine} <br/> {item.secondLine}</h1>
                    <div className="generic-btn">
                        <a href="./register">DISCOVER MORE</a>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CarouselComponent;
