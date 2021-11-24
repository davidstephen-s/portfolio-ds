import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaLocationArrow,
  
  
} from "react-icons/fa";
import{FcBusinessContact} from "react-icons/fc"
import{
  SiGmail,
} from "react-icons/si"
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
               <h1 className="h21">
                 Contact
               </h1>
              </div>
              <ul className="contactCircles">
                <li>
                <a href ="https://github.com/davidstephen-s" target="_blank" className="contactIcon">
                  <FaGithub className="contactIcon"  />
                  </a>
                </li>
                <li>
                <a href ="https://www.linkedin.com/in/david-stephen/-204794135" target="_blank" className="contactIcon">
                  <FaLinkedin className="contactIcon" />
                  </a>
                </li>
                <li>
                <a href ="mailto:davidtephen40@gmail.com" target="_blank" className="contactIcon">
                  <SiGmail className="contactIcon" /> Lets Discuss.
                  </a>
                </li>
                <li>
                  <FaLocationArrow className="contactIcon" /> Tiruchirappalli 
                </li>
                <li>
                  <FcBusinessContact className="contactIcon" />8667201866
                </li>
              </ul>
      
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
