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
          <div className="ow ">
            <div className="co-6">
              <div className="contactSection-logo">
               <h1 className="h21">
                 Contact
               </h1>
              </div>
              <ul className="contactCircles">
                <li>
                  <div className="">
                  <a href="https://github.com/davidstephen-s" target="_blank" className="ct cI-outline">   <FaGithub className="ic"  />&nbsp;&nbsp;
                    davidstephen-s
                  </a>
                  &nbsp;&nbsp;&nbsp;
                </div>
                </li>

                <li>

                  
                 <div className="header_ho">
                  <a href="mailto:davidstephen40@gmail.com" target="_blank" className="ct cI-outline">  <SiGmail className="ic"/>&nbsp;&nbsp;
                    davidstephen40@gmail.com
                  </a>
                  &nbsp;&nbsp;&nbsp;
                
                </div>
                </li>
                <li>
        
                 <div className="header_ho">
                  <a href="" target="_blank" className="ct cI-outline"> <BsFillTelephoneFill className="ic"  />&nbsp;&nbsp;
                    8667201866
                  </a>
                  &nbsp;&nbsp;&nbsp;
                
                </div>
                  
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
