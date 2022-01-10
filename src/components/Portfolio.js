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
            <div class="row row-cols-2  row-cols-md-4 g-0   ">
                <div class="card"  data-aos="zoom-in-up">
                    <img src={Invoice} class="card-img-top" alt="..." />
                    <div class="title_heading">
                        <h5 class="card-title">Mern-Notes-App</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Notes App</div>
                        <div className='img-description'>
                            <p>Notes web app You create your Notes with date and time and save.Login system , Your notes Dash Board and Logout option.  </p>
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center p-3'>
                                    <a className='bth btn-sm btn-success m3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/mern-notes-app/tree/master/client'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/mern-notes-app'>Backend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://devat-notes.herokuapp.com/'>Website <i class="fad fa-link"></i></a>
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
                                <i class="fab fa-php "></i> &nbsp;
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
                        <h5 class="card-title">Travel App</h5>
                    </div>
                    <div className='card-img-overlay'>
                        <div className='img-title'>Travel App</div>
                        <div className='img-description'>
                            <p>Travel web app used to find where you can travel , Also find how much the travel cost, Login/Signup page, Featured dashboard .
                            
                            </p>
                            
                            <div className='tech_used'>
                                <i class="fab fa-react react"></i> &nbsp;
                                <i class="fab fa-node node"></i> &nbsp;
                                <SiIcons.SiMongodb className='mongodb' /> &nbsp;
                                <p className='codeLinks text-center pt-3'>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/Travelapp-frontend'>Frontend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://github.com/davidstephen-s/TravelApp-backend'>Backend <i class="fab fa-github"></i></a>
                                    <a className='bth btn-sm btn-success ml-3' target='_blank' rel="noreferrer" href='https://travelmainn-app.netlify.app/'>Website <i class="fad fa-link"></i></a>
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
        </div>
    )
}

export default Portfolio
