import React from 'react'
import './Portfolio.css'
import * as SiIcons from "react-icons/si";
import Invoice from '../images/Invoice.jpg';
import Res from '../images/rest.PNG';

import 'bootstrap/dist/css/bootstrap.min.css';



function Portfolio() {
    return (
        <div id='portfolio'>
            <h1 className='logo-text'>Portfolio</h1>
            <div className='allProjects'>
                <div class="card"  data-aos="zoom-in-up">
                    <img src={Invoice} class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">Mern-Weather-App</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>weather App</div>
                        <div className='img-description'>
                            <p>Weathering With You is a weather web app to get the current weather data of the zip code you submit into the form. Consists of 4 main components:



                            the header at the top,
the form to input your zipcode, choose the temperature metric, and save button,
[left-hand panel] Display weather data,
[right-hand panel] 10 most recent weather data queries</p>
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center p-3'>
                                    <a className='bth btn-sm btn-success m3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/mern-weather-app-master/tree/master/client'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/mern-weather-app-master/tree/master/server'>Backend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://mernweatherapp.herokuapp.com/'>Website <i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="card" data-aos="zoom-in-up">
                    <img src='https://camo.githubusercontent.com/b37d8861767fbf16a573f569868e5b3ec1a87d43f99b525ca6ff38a1fd45f4f9/68747470733a2f2f7370696e6f75732d74657874732e303030776562686f73746170702e636f6d2f312e706e67' class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">Spotify-Clone</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Spotify</div>
                        <div className='img-description'>
                            <p>A Spotify web app clone made with React at the frontend and PHP at the backend ,You Can Create Playlists And Save It,Favorites section your Liked Songs will be Shown There</p>
                            
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                   <a className='bth btn-sm btn-success ml-3'  target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/react-spotify-clone-master'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/spotify-clone-backend-php-master'>Backend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://ds-spotify-clone-site.netlify.app/'>Website <i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="card" data-aos="zoom-in-up">
                    <img src={Res} class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">find-restaurant-near-me</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Find Restaurant NearMe</div>
                        <div className='img-description'>
                            <p>Here you can find nearby place like restaurant, hotel ,etc Using Google map React.  Allow Location To Find near By your Places.
                            Npm Library Used::
    axios:0.21.1,
    google-map-react:2.1.10,
    howler:2.2.2,
    react:17.0.2,
    react-dom:17.0.2,
    react-paginate":7.1.3,
    react-router-dom: 5.2.0,
    react-scripts:4.0.3,
    react-star-ratings:2.3.0,
    react-toastify:7.0.4,
    web-vitals": "^1.1.2.
                            </p>
                            
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/find-restaurant-near-me-master'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/find-restaurant-near-me-master'>Backend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://nearbyplace.netlify.app/'>Website <i class="fad fa-link"></i></a>
                                </p>
                            </div>
                        </div>
                    </div>   
                </div>
                <div class="card" data-aos="zoom-in-up">
                    <img src='https://github.com/atanu20/amazon-clone-using-MERN-STACK/blob/master/Screenshot%20(79).png?raw=true' class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">E-commerce</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Ecommerce</div>
                        <div className='img-description'>
                            <p>Ecommerce app with live order tracker,You can Purchase,Order,Add a product to the Cart, Favorite section.</p>
                            
                            
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                   <a className='bth btn-sm btn-success ml-3'  target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/Ecommerce/tree/master/client'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/Ecommerce'>Backend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://amazon-ecommerce.netlify.app/'>Website <i class="fad fa-link"></i></a>
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
