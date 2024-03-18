import React, { useState, useEffect } from "react";
import axios from "axios";
import Navigation from "../home/navigation";
import Footer from "../home/footer";
<<<<<<< HEAD

// import img2 from "../assets/images/image4.jpeg"
import first from "../assets/images/pronybhyia.jpg"
import second from "../assets/images/harshitadi.jpg"
import third from "../assets/images/bhatibhyia.jpg"
import forth from "../assets/images/vivekbhyia.jpg"
import fifth from "../assets/images/abhilashbhyia.jpg"

=======
import image from "../assets/images/project-bg.jpg"
import "./project.css";
>>>>>>> 5ed00a0d55e351e6775287a04a1ecce99ce5bdf9

function Projectpage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get("http://localhost:3001/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <Navigation />

      <section className="sub-banner-section about-page-banner w-100 float-left d-flex align-items-center " style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
        <div className="container">
          
        </div>
      </section>

      {projects.map((project, index) => (
        <section
          key={project._id}
          className={`supplementory-section w-100 float-left padding-top padding-bottom ${
            index % 2 === 0 ? "" : "supplementory-reverse-order-section"
          }`}
        >
          <div className="container">
            <div
              className="supplementory-inner-section"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <div className="supplementory-left-box">
                <h2>{project.projectName}</h2>
                <p>{project.description}</p>
                <div className="service-btn">
                  <a href={`single-project/${project.projectID}`}>READ MORE</a>
                </div>
              </div>
              <div className="supplementory-right-box">
                <div className="supplementory-right-img-box">
                  <figure className="mb-0">
                    <img
                      src={project.imgSrc}
                      alt={`project-img-${index}`}
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

export default Projectpage;
