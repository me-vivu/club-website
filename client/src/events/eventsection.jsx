import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../home/navigation";
import backgroundImage from "../assets/images/event-bg.png"
import Footer from "../home/footer";
import { Link } from 'react-router-dom';

import "./event.css";


function EventsImage() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get("http://localhost:3001/addEvents");
        setEvents(response.data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Navigation />

      <section className="sub-banner-section about-page-banner w-100 float-left d-flex align-items-center" style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover'}}>
        <div className="container">
          <div className="sub-banner-inner-section">
            
          </div>
        </div>
      </section>

      {events.map((event, index) => (
        <section
          key={event._id}
          className={`supplementory-section w-100 float-left padding-top padding-bottom ${
            index % 2 === 0
              ? ""
              : "supplementory-reverse-order-section"
          }`}
        >
          <div className="container">
            
            <div className="supplementory-inner-section" data-aos="fade-up" data-aos-duration="700">
              <div className="supplementory-left-box">
                <h2>{event.eventName}</h2>
                <p>{event.description.substring(0, 100) + "...."}</p>
                <div className="service-btn">
                <Link to={`/viewEvent/${event.eventID}`}>READ MORE</Link>
                </div>
              </div>
              <div className="supplementory-right-box">
                <div className="supplementory-right-img-box">
                  <figure className="mb-0">
                    <img
                      src={event.eventImage}
                      alt={`event-img-${index}`}
                      loading="lazy"
                      className="events-page-image"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <Footer />
    </div>
  );
}

export default EventsImage;
