import React from "react";

function Contact(){
    return(
        <div>
            <h1 id = "cont_title">Send Me A Message</h1>
            <form id = "contact_form_container">
                <label >Name: </label>
                <input type = "text" ></input>

                <label >Email: </label>
                <input type = "email" ></input>

                <label >Message: </label>
                <textarea  rows={4}></textarea>

                <input type = "submit"></input>

            </form>
        </div>
        
    )
}

export default Contact;