import React from "react";
import {
  FaGithub,
  
  
  
} from "react-icons/fa";
import{BsFillTelephoneFill} from "react-icons/bs"
import{
  SiGmail,
} from "react-icons/si"
const Contact = () => {
  return (
    <div className="contact">
      <div className="containe">
        <div className="contactSection">
          <div className="ow justifyConter">
            <div className="co-6">
              <div className="contactSection-logo">
               <h1 className="h21">
                 Contact
               </h1>
              </div>
              <ul className="contactCircles">
                <li>
                <a href ="https://github.com/davidstephen-s" target="_blank" rel="noreferrer" className="contactIcon">
                  <FaGithub className="contactIcon"  />
                  </a>
                </li>
<<<<<<< HEAD
              
=======
                <li>
                <a href ="http://linkedin.com/in/davidstephens5405" target="_blank" className="contactIcon">
                  <FaLinkedin className="contactIcon" />
                  </a>
                </li>
>>>>>>> cfc427db6a678fc6f7b4e1e1dcacc96f8e4ca958
                <li>
                <a href ="mailto:davidstephen40@gmail.com" target="_blank" className="contactIcon">
                  <SiGmail className="contactIcon" />
                  </a>
                </li>
                <li>
                <p className="contactnum">
                <BsFillTelephoneFill  />
                 8667201866</p>
            
                  
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
