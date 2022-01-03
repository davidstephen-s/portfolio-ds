import React from "react";
import {HomeContainer,HomeBg,VideoBg,HomeContent,} from './homebg'
import HD0411 from './HD0411.mp4'
import {
  FaLinkedin,
  FaGithub
} from "react-icons/fa";
import{
  SiGmail,
} from "react-icons/si"

const Home = () => {
  const [state] = React.useState({
    title: "David Stephen S",
    text:
      "I,m David Stephen S I'm Passionate FullStack Web Developer(MERN) from India   ",
    image: "/images/man-01.png",
  });
  return (
    <HomeContainer>
      <HomeBg>
                <VideoBg autoPlay loop muted src={HD0411} type='HD0411/mp4' />
            </HomeBg>
            <HomeContent>         
    <header className="header">
      <div className="containe">
        <div className="ow">
          <div className="co-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">

                  <li>
                  <a href ="mailto:davidstephen40@gmail.com" target="_blank" className="headerIcon">
                    <SiGmail className="headerIcon" />
                    </a>
                  </li>
                  <li>
                    <a href ="https://github.com/davidstephen-s" target="_blank" className="headerIcon">
                    <FaGithub className="headerIcon" />
                    </a>
                    </li>
                </ul>
               
                <h1>{state.title}</h1>
                <div >
                <p>{state.text}</p>
                </div>
                <div className="header_ho">
                  <a href="https://drive.google.com/file/d/1foMs4XvuMGqQkjqlg2Yq_sfv_Aeybeq1/view" target="_blank" className="bt bt-outline">
                    View Resume
                  </a>
                  &nbsp;&nbsp;&nbsp;
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </header>
    </HomeContent>
    </HomeContainer>
  );
};

export default Home;
