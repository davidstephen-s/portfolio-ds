import React from 'react'
import './Portfolio.css'
import * as SiIcons from "react-icons/si";
import Invoice from '../images/Invoice.jpg';
import ecommerce from '../images/ecommerce.PNG'

function Portfolio() {
    return (
        <div id='portfolio'>
            <h1 className='logo-text'>Portfolio</h1>
            <div className='allProjects'>
                <div class="card"  data-aos="zoom-in-up">
                    <img src={Invoice} class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">mern-weather-app</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>mern-weather-app-master</div>
                        <div className='img-description'>
                            
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/mern-weather-app-master'>Repo <i class="fab fa-github"></i></a>
          
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href=' https://mernweatherapp.herokuapp.com/ '>Demo <i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
                
                <div class="card" data-aos="zoom-in-up">
                    <img src='https://raw.githubusercontent.com/atanu20/find-restaurant-near-me/master/screenshot-nearbyplace.netlify.app-2021.10.23-14_41_22.png' class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">find-restaurant-near-me-master</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>find-restaurant-near-me-master</div>
                        <div className='img-description'>
        
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/find-restaurant-near-me-master'>Repo<i class="fab fa-github"></i></a>
              
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://nearbyplace.netlify.app/'>Demo<i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>  
                </div>
                <div class="card" data-aos="zoom-in-up">
                    <img src={ecommerce} class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">Simple-ecommerce-site</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>simple-ecommerce-site</div>
                        <div className='img-description'>
        
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/e-commerce-site-master/tree/master'>Repo<i class="fab fa-github"></i></a>
              
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://simple-ecommerce-site.netlify.app/'>Demo<i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
            
        </div>
    )
}

export default Portfolio
