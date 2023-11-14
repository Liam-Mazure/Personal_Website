import React from "react";
import { Link } from "react-router-dom";

function Home(){
    return(
        <div>
            <h1 id = "home_title">Home</h1>
            <div className="overall-intro">
                <h3 id = "intro_home_text">Welcome, the intent of this website is to provide a plethora of insight as to what I (Liam Mazure) have accomplished in my 22 years. Mainly focused on my computing related achievements, although I have provided additional information as to how I spend my time, outside of my career aspirations. I hope you find this insightful and gain a better understanding as to who I am along with what I am capable of achieving. I’ll leave you with this quote from Henry David Thoreau to probe the continued exploration of your passions “It’s not what you look at that matters, it’s what you see”.</h3>
            </div>
            <div classname = "projects-intro">
                <h3 id = "intro_pro_text">Over the span of my schooling at Grand  Valley State University I completed a variety of projects both in, and out of the classroom. Below you will find a number of my personal favorite projects I accomplish thus far in my journey.</h3>
                <Link to = "/projects">
                    <button className = "home_btns">Projects</button>
                </Link>
            </div>
            <div className="about-intro">
                <h3 id="intro_about_text">Discover a little extra about what I do outside of my work with software. From endurance sports, photogrophy, and more</h3>
                <Link to= "/about">
                    <button className="home_btns">About Me</button>
                </Link>
            </div>
            <div className="resume-intro">
                <h3 id="intro_resume_text">Interested in a more formal view of the work I have accumulated? Select below to download and view my resume</h3>
                <Link to = "/resume">
                    <button className="home_btns">Resume</button>
                </Link>
            </div>
            <div className="contact-intro">
                <h3 id = "intro_contact_text">If you would like to send me a message you can find my contact information at the bottom of every page. As well as a designated contact page where you can send a message directly from this site.</h3>
                <Link to = "/contact">
                    <button className="home_btns">Contact</button>
                </Link>
            </div>
        
        </div>
    )
}

export default Home;