import React from "react";
import second from "../assets/images/harshitadi.jpg"
function Aboutteam(){
    return(
        <div className="about-team-member">
        <figure className="mb-0">
            <img src={second} alt="team-member-img2" loading="lazy" className="teammemberimage"/>
        </figure>
        <div className="about-team-member-details">
            <span>CO SECRETARY</span>
            <h3>HARSHITA GUPTA</h3>
            <div className="header-social-links">
                <ul className="list-unstyled mb-0 d-flex align-items-center">
                    <li><a href="https://www.facebook.com/login/"><i className="fab fa-facebook-f"></i></a></li>
                    <li><a href="https://www.linkedin.com/login"><i className="fab fa-linkedin-in"></i></a></li>
                    <li><a href="https://twitter.com/i/flow/login"><i className="fab fa-twitter"></i></a></li>
                    <li><a
                            href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Faccounts%2Fonetap%2F%3Fnext%3D%252F%26__coig_login%3D1"><i
                                className="fab fa-instagram"></i></a></li>
                </ul>
            </div>
        </div>
    </div>

    )
}
export default Aboutteam;