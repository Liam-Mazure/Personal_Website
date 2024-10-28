import React from "react";
import slidesAR from "./data/carouselData.json";
import slidesRGWeb from "./data/carouselData.json";
import foxVideos from "./data/carouselData.json";
import Carousel from './carouselAR.js';
import CarouselRG from "./carouselRGWeb.js";
import CarouselFox from "./carouselFox.js";

function Projects(){
    return(
        <div>
            <h1 id = "project-title">Projects</h1>

            <div className="sec-1">
                <h2 id = "pro1-sec1-title">Augmented Human Anatomy</h2>
                <div className="textWindow1-sec1">
                    <div>
                        <p>As a part of my culminating project for my undergraduate degree I was able to collaborate with three other students to elevate an augmented anatomical modeling tool. Using the Unity game engine and the Microsoft Hololens.</p>
                        <ul>
                            <li>I helped bring to life full male and female models</li>
                            <li>Updated UI to include additional bodily structures</li>
                            <li>As well as a fully functional magnifying glass to view the models in more notable detail.</li>
                        </ul>
                    </div>
                    <div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/dzr4PxkiGow?si=Gqgmxt2O-TOE6Eb5" title="Augmented Modeling Tool DemoVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            <div className="sec-2">
                <h2 id="pro1-sec2-title">Run Wild Studios</h2>
                <div className="textWindow1-sec2">
                    <p>
                        Run Wild Studios originated out of my passions to create Films & Games for my friends and family to enjoy. 
                        Ever since I was in grade school I have loved to play and watch games/films. 
                        It was not until I reached early adulthood that I began to view them through a new lens. 
                        I figured there was no better way to gain experience in website development than to create a company of my own. 
                        Combining what I love to do best into one culminating projects. Finally allowing others to see the world as I do.
                        <br/>Use this link to view the page:
                        <br/><a href="https://liam-mazure.github.io/Run_Wild/" target="_blank" rel="noreferrer">Click ME</a>
                        <br/><br/>Enjoy! 
                    </p>
                    <div className="picsWindow1-sec2">
                        <img src= {require('./images/Run_Wild_Logo_BlkBck.png')} alt="Run Wild Logo"></img>
                    </div>
                </div>

                <h2 id = "pro2-sec2-title">Running Guide</h2>
                <div id = "textWindow2-sec2">
                        <p>
                            My passion for running led me to pursue a web based application that runners could use as an all in one training diary. 
                            Running Guide allows users to create an account in order to plan out a training plan for specific days of the week, month, and even year. 
                            I utilized the Google maps API to help users find trails to set their sights on the next adventure.
                        </p>
                        <CarouselRG data={slidesRGWeb}/>
                </div>
            </div>

            <div className="sec-3">
                <h2 id = "pro1-sec3-title">Unity Game Development - Traveling Fox</h2>
                <div className="textWindow1-sec3">
                    <p>
                        The Traveling Fox tells the tale of a Fox and its treacherous path to find and save its family at the peak of Mt.Doom.  
                        The player must set off on a journey to find their family and collect the fruits that lie along the way. 
                        Although, the player must be careful as to dodge the sneaky tiger and the hazardous rock slide. 
                        Sit back, relax and navigate the picturesque mountain top view.
                        {/*<br/>
                        During the development of Traveling Fox I was able to accomplish: 
                        <br/>
                        <ul>
                            <li>Opening, ending, and pause menu GUI and event triggers.</li>
                            <li>Rock slide animation loop and event trigger.</li>
                            <li>Background music and spacial sound effects i.e. birds chipping, wind in the trees.</li>
                            <li>Fruit collection with heart retention.</li>
                        </ul>*/}
                    </p>
                    <CarouselFox data={foxVideos}/>
                </div>
                
                <h2 className="pro2-sec3-title">Mobile Roguelike Side Scroller</h2>
                <div className="textWindow2-sec3">

                </div>
            </div>

            <div className="sec-4">
            <h2 id = "pro1-sec4-title">ARCore 3D Model Selector</h2>
                    <div id = "textWindow1-sec4">
                        <p>
                            As a part of my final project for a mobile development course I was challenged with researching an already existing SDK/API and implementing it into a culminating project. 
                            Up to this point in my computing curriculum I had yet to work with AR(Augmented Reality). 
                            I found it fascinating to allow users to interact with the environment around them through the use of AR. 
                            This fascination lead to what you see in front of you today. 
                            This application allows users to select a variety of models and place them directly in front of them. 
                            These models stay where the users selects even if the phones angle changes, allowing the user to orbit each character.
                        </p>
                        <Carousel data={slidesAR}/>
                    </div>
            </div>
        </div>
        
    )
}

export default Projects;