import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProjectSection = () => {

    const [projects, setProjects] = useState([]);
   
    useEffect(() => {
        // Fetch carousel items from server
        axios.get('http://localhost:3001/projects')
            .then(response => {

                if (response.data) {
                    const limitedProjects = response.data.slice(0, 3);
                    setProjects(limitedProjects);
                }
            })
            .catch(error => console.error('Error fetching project items:', error));
    }, []);

    


    return (
        <section className="consulting-services-section w-100 float-left padding-top padding-bottom">
            <div className="container">
                <div className="consulting-services-outer-section">
                    <div className="generic-title text-center" data-aos="fade-up" data-aos-duration="700">
                        <h2>Projects In Progress</h2>
                        <p>Transforming Visions into Reality.</p>
                    </div>
                    <div className="consulting-services-inner-con" data-aos="fade-up" data-aos-duration="700">
                        {projects.map(project => (
                            <div className="consulting-services-box" key={project.projectID} style={{backgroundImage: `url(${project.imgSrc})`, backgroundSize: 'cover'}}>
                                <h4 style={{color: 'white'}}>{project.projectName.split(" ")[0]} <br/> {project.projectName.split(" ")[1]}</h4>
                                <div className="consulting-services-img-con d-flex align-items-center">
                                    <Link to={`/viewProject/${project.projectID}`}>READ MORE</Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
