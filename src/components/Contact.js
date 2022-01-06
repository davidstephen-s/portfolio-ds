
import React from 'react'
import './Contact.css'
import {
  FaGithub, 
} from "react-icons/fa";
import{BsFillTelephoneFill} from "react-icons/bs"
import{
  SiGmail,
} from "react-icons/si"
function Contact() {
    return (
        <div id='contact'>
            <h1 className='logo-text'>Contact</h1>
           
            <div className='mail-contact mb-5'>
            <a href='https://github.com/davidstephen-s' target="_blank" rel="noreferrer" className='at' >
                <div className='contacts p-4 text-center'>
                <FaGithub className='ic' /> &nbsp;&nbsp; <span>davidstephen-s</span>
                </div></a> 
                <a href='mailto:davidstephen40@gmail.com' target="_blank" rel="noreferrer" className='at' >
                <div className='contacts p-4 text-center'>
                <SiGmail className='ic' /> &nbsp;&nbsp; <span>davidstephen40@gmail.com</span>
                </div></a> 
                <div className='contacts p-4 text-center'>
                    <BsFillTelephoneFill className='ic'/> &nbsp;&nbsp; <span>+91 8667201866</span>
                </div>
              
            </div>
           
        </div>
    )
}

export default Contact
