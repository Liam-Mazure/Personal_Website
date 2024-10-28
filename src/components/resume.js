import React from "react";

function Resume(){
    return(
        <div classname = "container-res-1">
            <h1 id = "resume-title">Liam's Resume</h1>
            <iframe id = "resume" title = "resume" src = {require('./images/LiamMazure_Resume_F24.pdf')}></iframe>
        </div>

    )
}

export default Resume;