import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../home/navigation";
import Footer from "../home/footer";
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

      <section className="sub-banner-section1 about-page-banner w-100 float-left d-flex align-items-center">
        <div className="container">
          <div className="sub-banner-inner-section">
            <h1 className="texthai">OUR EVENTS</h1>
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
                <p>{event.description}</p>
                <div className="service-btn">
                  <a href="single-service.html">READ MORE</a>
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
