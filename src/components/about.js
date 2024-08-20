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
                <div className="about_row">
                    <p>I recently graduated from Grand Valley State University where I obtained a B.S. in Computer Science. As an Eastern Michigan transplant originally from Milford, MI(45 min north of Ann Arbor/45 min NW of Detroit). As a student at GVSU I was a part of numerous  organizations and clubs on campus including: </p>
                    <ul>
                        <li>Holding an E-board position in a volunteer based organization "Circle-K"</li>
                        <li>Obtaining a mentor RA(Resident Assistant) position for 2 years in GVSU's Housing department.</li>
                        <li>Along with my involvement in Alternative Breaks where he traveled to the Twin Cities to assist a local animal shelter.</li>
                    </ul>
                    <p>Outside of my education I am passionate about endurance sports from running 5 Marathons to recently completing his first Ironman 70.3. To compliment my active life style I enjoy reading, cooking, and snuggling on the couch with his two cats Matilda and DaVinci. </p>
                </div>

                <img src = {require('./images/PittMarathon_Finish.jpg')} alt = "Liam Mazure Pittsburg Marathon"></img>
                <img src = {require('./images/UP_Snow.jpg')} alt = "Michignan Upper Penninsula"></img>
                <img src = {require('./images/TillyDaVinci_YingYang.jpg')} alt = "Cats Tilly and DaVinci sleeping"></img>
            </div>
        </div>
        </div>

    )
}

export default About;