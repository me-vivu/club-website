import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navigation from '../home/navigation';
import Footer from '../home/footer';
import { useParams } from 'react-router-dom';

const ProjectView = () => {
    const { projectId } = useParams();
    const [projectData, setProjectData] = useState(null);

    const fetchProjectData = async (projectId) => {
        try {
            const response = await axios.get(`http://localhost:3001/project-view/${projectId}`);
            setProjectData(response.data);
        } catch (error) {
            console.error('Error fetching project data:', error);
        }
    };

    useEffect(() => {
        fetchProjectData(projectId);
    }, [projectId]);

    return (
        <div>
            <Navigation />
            <section className="single-service-main-sec w-100 float-left padding-top padding-bottom">
                <div className="container">
                    <div className="single-service-inner-con">
                        {projectData && (
                            <div>
                                <div className="position-relative single-service-img-con" data-aos="fade-up" data-aos-duration="700">
                                    <figure className="mb-0">
                                        <img src={projectData.imgSrc} alt="single-case-main-img" loading="lazy" className='project-view-disp' />
                                    </figure>
                                </div>
                                <div className="single-service-consumer-market">
                                    <h2 data-aos="fade-up" data-aos-duration="700">{projectData.projectName}</h2>
                                    <p data-aos="fade-up" data-aos-duration="700">{projectData.description}</p>
                                    <p className="mb-0" data-aos="fade-up" data-aos-duration="700">Status: {projectData.status}</p>
                                </div>

                                <div className="single-service-sub-section">
                                    <div className="single-service-sub-img-con" data-aos="fade-up" data-aos-duration="700">
                                        <figure className="mb-0">
                                            <img src={projectData.secondImg} alt="single-case-sub-img" loading="lazy" className='project-view-second'/>
                                        </figure>
                                    </div>
                                    <div className="single-service-sub-text-con">
                                        <p data-aos="fade-up" data-aos-duration="700">{projectData.description} </p>
                                        <p data-aos="fade-up" data-aos-duration="700">{projectData.description}</p>
                                        <p className="mb-0" data-aos="fade-up" data-aos-duration="700"><span>It uses a dictionary of over
                                                200 Latin words, combined with a handful of model sentence
                                                structures, to generate Lorem Ipsum which looks reasonable. </span></p>
                                </div>
                            </div>




                        </div>

                            



                        )}

                        {/* Add the provided HTML code here */}
                        
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default ProjectView;
