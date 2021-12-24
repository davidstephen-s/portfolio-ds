import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
    
  });
  const [state] = React.useState([
    { id: 1, title: "Name:", text: "David Stephen s" },
    { id: 2, title: "Email:", text: "davidstephen40@gmail.com" },
    { id: 3, title: "Phone:", text: "8667201866" },
  ]);
  return (
    <div className="about">
      <div className="containe">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="ow  h-650 alignCenter">
         
          <div className="co-6">
            <div className="about__info">
              <h1>Hi There ,</h1>
              <div className="about__info-p1">
              I'm a passionate Full stack developer with the goal of working on a project that solves problems with thoughtful UI design, creating intuitive, dynamic user experiences powered by strong frontend. I primarily work with MERN stack among the full stack technologies. The satisfaction that I get while working and completing every project made me do more and more. And I believe, I have did something creatively. 
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
