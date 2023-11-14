import React from "react";

function Projects(){
    return(
        <div>
            <h1 id = "project-title">Projects</h1>

            <div className="pro-1">
                <h2 id = "pro-1-title">Augmented Human Anatomy</h2>
                <div className="text-window-1">
                    As a part of Liam's culminating project for his undergraduate degree he was able to collaborate with three other students to elevate an augmented anatomical modeling tool. Using the Unity game engine and the Microsoft Hololens. Liam helped bring to life full male and female models, updated UI to include additional bodily structures, as well as a fully functional magnifying glass to view the models in more notable detail.
                </div>
                <div className="pic-window-1">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/dzr4PxkiGow?si=Gqgmxt2O-TOE6Eb5" title="Augmented Modeling Tool DemoVideo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                </div>
            </div>

            <div className="pro-2">
                <h2 id = "pro-2-title">Unity Game Development - Traveling Fox</h2>
                <div className="text-window-2">
                    The Traveling Fox tells the tale of a Fox and its treacherous path to find and save its family at the peak of Mt.Doom.  The player must set off on a journey to find their family and collect the fruits that lie along the way. Although, the player must be careful as to dodge the sneaky tiger and the hazardous rock slide. Sit back, relax and navigate the picturesque mountain top view.
                </div>
                <div className="pic-window-2">
                    <video width="560" height="315" controls>
                        <source src= {require("./images/FoxGame_StartScreen.mp4")} type="video/mp4"/>
                    </video>
                    <video width="560" height="315" controls>
                        <source src= {require("./images/FoxGame_FruitCollection.mp4")} type="video/mp4"/>
                    </video>
                    <video width="560" height="315" controls>
                        <source src= {require("./images/FoxGame_Rockslide.mp4")} type="video/mp4"/>
                    </video>
                    <video width="560" height="315" controls>
                        <source src= {require("./images/FoxGame_FamilyReunion.mp4")} type="video/mp4"/>
                    </video>
                    <img src = {require("./images/FoxGame-Boulder.jpg")} alt="Traveling Fox Boulder"></img>
                </div>
            </div>

            <div className="pro-3">
                <h2 id = "pro-3-title">Running Guide Web Application</h2>
                <div id = "text-window-3">Liam's passion for running led him to pursue a web based application that runners could use as an all in one training diary. Running Guide allows users to create an account in order to plan out a training plan for specific days of the week, month, and even year. Liam utilized the Google maps API to help users find trails to set their sights on the next adventure. </div>
                <div className="pic-window-3">
                    <img src = {require("./images/running_guide_home.png")} alt="Running Guide Home"></img>
                    <img src = {require("./images/running_guide_createPlan.png")} alt="Running Guide Plan Creation"></img>
                    <img src = {require("./images/running_guide_account.png")} alt="Running Guide Account"></img>
                    <img src = {require("./images/running_guide_calander.png")} alt="Running Guide Calander"></img>
                    <img src = {require("./images/running_guide_log1.png")} alt="Running Guide Log Note 1"></img>
                    <img src = {require("./images/running_guide_log2.png")} alt="Running Guide Log Note 2"></img>
                    <img src = {require("./images/running_guide_log3.png")} alt="Running Guide Log Note 3"></img>
                </div>
                <div className="text-window-3">

                </div>

                <div className="pro-4">
                    <h2 id = "pro-4-title">ARCore 3D Model Selector</h2>
                    <div id = "text-window-4">As a part of Liam's final project for his mobile development course he was challenged with researching an already existing SDK/API and implementing it into a culminating project. Up to this point in his computing curriculum Liam had yet to work with AR. He found it fascinating to allow users to interact with the environment around them through the use of augmented reality. This fascination lead to what you see in front of you today. His application allows users to select a variety of models and place them directly in front of them. These models stay where the users selects even if the phones angle changes, allowing the user to orbit each character.</div>
                    <div className="pic-window-4">
                        <img src = {require("./images/ARCore_Initial.jpg")} alt = "ARCore Initial Set Up"></img>
                        <img src = {require("./images/ARCore_PlaceFigures1.jpg")} alt = "ARCore Two Models Placed"></img>
                        <img src = {require("./images/ARCore_PlaceFigures2.jpg")} alt = "ARCore Additional Models Placed"></img>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Projects;