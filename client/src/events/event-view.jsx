import React, { useState, useEffect } from 'react';
import Navigation from "../home/navigation"
import image from "../assets/images/car02.jpg";
import quote from "../assets/images/quote-img.png"
import Footer from "../home/footer"
import axios from 'axios';

import 'aos/dist/aos.css';
import { Link, NavLink, useParams } from 'react-router-dom';

function BlogPost() {
    const {eventId} = useParams();
  // Define state to hold the blog post data
  const [blogPost, setBlogPost] = useState(null);
  const [breakpoints, setBreakPoints] = useState([]);

  // Fetch blog post data from the server when the component mounts
  useEffect(() => {
    const fetchBlogPost = async (eventId) => {
      try {
        
        const response = await axios.get(`http://localhost:3001/event-view/${eventId}`); 
        
        setBlogPost(response.data)
      } catch (error) {
        console.error('Error fetching blog post:', error);
      }
    };

    fetchBlogPost(eventId);
  }, [eventId]); 

  const handleForm = () => {
    // Redirect the user to google.com when the button is clicked
    window.location.href = blogPost.formLink;
  };

  function formatDate(date) {
    // Assuming date is a string in ISO 8601 format (e.g., "2022-12-20T00:00:00")
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    });
  
    return formattedDate;
  }

  function findBreakpoints (text) {
    const sentences = text.split('. '); // Split the text into sentences
    const totalSentences = sentences.length;

    const breakpoints = [];
    let currentLength = 0;

    // Loop through sentences and find breakpoints
    for (let i = 0; i < totalSentences; i++) {
      currentLength += sentences[i].length + 2; // Add 2 for the period and space
      if (currentLength >= text.length / 3 && breakpoints.length < 2) {
        breakpoints.push(currentLength);
      }
    }

    setBreakPoints(breakpoints);

  };

 



  return (
    <div>
      <Navigation/>

      {/* Single Blog */}
      <section className="singleblog-section blogpage-section">
        <div className="container">
          {blogPost && (
            <div>
              <div className="col-lg-10 col-md-12 col-sm-12 col-12 align-center">
                <div className="main-box">
                  <figure className="image-view-project" data-aos="fade-up" data-aos-duration="700">
                    <img src={blogPost.eventImage} alt="" className="img-fluid" loading="lazy" />
                  </figure>

                  <div className="content1" data-aos="fade-up" data-aos-duration="700">
                    <h3>{blogPost.eventName}</h3>
                    <i className="fas fa-user"></i>
                    <span className="text-size-14 text-mr">By : Admin</span>
                    <i className="fas fa-calendar"></i>
                    <span className="mb-0 text-size-14">{formatDate(blogPost.date)}</span>
                    <p className="text-size-14">{blogPost.description.split(". ").slice(0,8)}</p>
                  </div>

                  <div className="content2" data-aos="fade-up" data-aos-duration="700">
                    <figure className="singleblog-quoteimage">
                        <img src= {quote} alt=""  loading="lazy" />
                    </figure>
                    <p className="mb-0 text-white text-size-18">“Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat”</p>
                </div>

                    <p className="text text-size-14">
                            
                            {blogPost.description.split(". ").slice(8,12)}
                    </p>
                    <div className="content3"  data-aos-duration="700">
                        <figure className="image1" >
                        <img src={blogPost.secondImage} alt="" className="img-fluid" loading="lazy" />
                        </figure>
                        <p className="text text-size-14">
                        {blogPost.description.split(". ").slice(12)}
                        </p>
                    </div>

                  {/* Add other content sections here */}
                </div>

                <button className="register-button" onClick={handleForm}>Register Now</button>
              </div>

              
            </div>
            
          )}

        

          
        </div>

        
      </section>

      <Footer/>
    </div>
  );
}

export default BlogPost;
