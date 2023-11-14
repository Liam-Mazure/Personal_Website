import React from "react";

function About(){
    return(
        <div>
        <h1 id = "about_title">All About Liam</h1>
        <div className="about_container">
            <div className="column_about_1">
                <img src = {require('./images/Headshot.jpg')} alt = "Liam Mazure"></img>
                <img src = {require('./images/LiamGrace_ParkerWedding.jpg')} alt = "Liam Mazure"></img>
                <img src = {require('./images/DetMarathon_21.jpg')} alt = "Liam Mazure"></img>
                <img src = {require('./images/Ironman_MI_Pic.jpg')} alt = "Liam Ironman 70.3 Michigan"></img>
            </div>
            <div className="column_about_2">
                <p>Liam is a recent graduate from Grand Valley State University where he obtained a B.S. in Computer Science. An Eastern Michigan transplant originally from Milford, MI(45 min north of Ann Arbor/45 min NW of Detroit. As a student at GVSU Liam was a part of numerous  organizations and clubs on campus. Including holding an E-board position in a volunteer based organization "Circle-K", obtaining a mentor RA(Resident Assistant) position for 2 years, along with his involvement in Alternative Breaks where he traveled to the Twin Cities to assist a local animal shelter. Outside of his education Liam is passionate about endurance sports from running 5 Marathons to recently completing his first Ironman 70.3. To compliment Liam’s active life style he enjoys reading, cooking, and snuggling on the couch with his two cats Matilda and DaVinci. </p>
                <img src = {require('./images/PittMarathon_Finish.jpg')} alt = "Liam Mazure Pittsburg Marathon"></img>
                <img src = {require('./images/UP_Snow.jpg')} alt = "Michignan Upper Penninsula"></img>
            </div>
        </div>
        </div>

    )
}

export default About;