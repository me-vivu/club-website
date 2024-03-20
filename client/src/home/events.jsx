import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./home-page.css"
import { Link } from 'react-router-dom';

const EventSection = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:3001/addEvents');
                setEvents(response.data.slice(0, 3));
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);


    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const options = { day: 'numeric', month: 'short' };
        return date.toLocaleDateString('en-US', options);
    };
    

    return (
        <section className="blog-section w-100 float-left padding-top padding-bottom">
            <div className="container">
                <div className="generic-title text-center" data-aos="fade-up" data-aos-duration="700">
                    <h2>WHAT’S HAPPENING</h2>
                    <p>Checkout what we have been doing</p>
                </div>
                <div className="blog-inner-section" data-aos="fade-up" data-aos-duration="700">
                    {events.map(event => (
                        <div key={event._id} className="blog-box position-relative">
                            <figure className="mb-0">
                                <img src={event.eventImage} className="event-img" alt="event-img" loading="lazy" />
                            </figure>
                            <div className="blog-text-details">
                            <div className="posting-date">{formatDate(event.date)}</div>
                                <div className="comments">
                                    <span>BY ADMIN</span>
                                </div>
                                <h4><a href="#">{event.eventName}</a></h4>
                                <p>{event.description.substring(0, 75) + "...."}</p>
                                <div className="blog-btn position-relative">
                                    <Link to={`/viewEvent/${event.eventID}`}>READ MORE</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EventSection;
