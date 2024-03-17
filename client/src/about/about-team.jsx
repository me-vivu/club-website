import React, { useState, useEffect } from "react";
import axios from "axios";
import second from "../assets/images/harshitadi.jpg";

function Aboutteam() {
    const [teamMemberData, setTeamMemberData] = useState(null);

    useEffect(() => {
        // Define the URL for your backend API endpoint
        const apiUrl = "http://localhost:3001/members";

        // Make a GET request using Axios
        axios.get(apiUrl)
            .then(response => {
                console.log("inside the get statement")
                console.log(response.data); 
                // If the request is successful, set the team member data in state
                setTeamMemberData(response.data);
            })
            .catch(error => {
                // If there's an error, log it to the console
                console.error("Error fetching team member data:", error);
            });
    },teamMemberData ); // The empty array as the second argument ensures the effect runs only once on component mount

    return (
        <div>
            {teamMemberData ? (
                teamMemberData.map((member, index) => (
                    <div className="about-team-member" key={index}>

                        <figure className="mb-0">
                            <img src= {member.image} alt="image" loading="lazy" className="teammemberimage" />
                        </figure>
                        <div className="about-team-member-details">
                            <span>{member.position}</span>
                            <h3>{member.name}</h3>
                            <div className="header-social-links">
                                <ul className="list-unstyled mb-0 d-flex align-items-center">
                                    <li><a href={member.linkedin}><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
    
}

export default Aboutteam;
