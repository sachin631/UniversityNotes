import React from "react";
import "./Style.css";
import {Link} from "react-router-dom";

function English(){
    return(
        <>
        <div id="pfpsmaindiv">
            <h1 id='pfpstitle'>English NOTES</h1>
            <div id="pfpscontent">
            <Link className="link" to="/subjects/English/unit1"> <h1 className="h1subject">UNIT 1 : Basic Writing skills</h1></Link>
            <Link className="link" to="/subjects/English/unit2"> <h1 className="h1subject">UNIT 2 :Vocabulary Building , Creating Grammatical Cohesion</h1></Link>
            <Link className="link" to="/subjects/English/unit3" > <h1 className="h1subject">UNIT 3 :Phonetics</h1></Link>
            <Link className="link" to="/subjects/English/unit4" ><h1 className="h1subject">UNIT 4 :Reading and Writing Practices</h1></Link>
            </div>
        </div>
        
        </>
    )
}

export default English;