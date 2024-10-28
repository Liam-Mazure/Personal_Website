import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="homePage">
            
            <div>
                <img id= "home_introImg"src = {require("./images/peaksAboveGrace_glaciarNP.jpg")} alt="Fog in Forest"></img>
            </div>

            <div className="home_title">
                <h1 id = "home_nameTitle">Liam Mazure</h1>
                <h2 id = "home_rhyme">Come with me and you'll see a world of code that’s key. Where logic flows and syntax glows, in harmony</h2>

                <div className="homeTitle_btnContainer">
                    <Link to = "/projects">
                        <button className="homeTitle_btn">Projects</button>
                    </Link>

                    <Link to = "/resume">
                        <button className="homeTitle_btn">Resume</button>
                    </Link>

                    <Link to = "/contact">
                        <button className="homeTitle_btn">Contact</button>
                    </Link>
                </div>
            </div>

            <div className="home_aboutContainer">
                <div className="home_imgContainer">
                    <img id = "home_imgItem1" className = "home_imgItem" src = {require("./images/rockSit_glaciarNP.jpg")} alt="Fog in Forest"></img>

                    <img id = "home_imgItem2" className = "home_imgItem" src = {require("./images/portfolioWebsite_selfPic.jpg")} alt="Liam Mazure"></img>

                    <img id = "home_imgItem3" className = "home_imgItem" src = {require("./images/rearviewMount_GrndTeaton.jpg")} alt="Fog in Forest"></img>
                </div>

                <Link to = "/about">
                    <button id= "home_aboutBtn"className="homeTitle_btn">About</button>
                </Link>
            </div>
        
        </div>
    )
}

export default Home;