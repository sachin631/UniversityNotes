import React from "react";
import "./Style.css";
import {Link} from "react-router-dom";

function Pfps(){
    return(
        <>
        <div id="pfpsmaindiv">
            <h1 id='pfpstitle'>PFPS NOTES</h1>
            <div id="pfpscontent">
            <Link className="link" to="/subjects/Pfps/unit1"><h1 className="h1subject">UNIT 1 : Introduction to Programming</h1></Link>
            <Link className="link" to="/subjects/Pfps/unit2"> <h1 className="h1subject">UNIT 2 :Preprocessors</h1></Link>
            <Link className="link" to="/subjects/Pfps/unit3"> <h1 className="h1subject">UNIT 3 :ARRAYS</h1></Link>
            <Link className="link" to="/subjects/Pfps/unit4"> <h1 className="h1subject">UNIT 4 :Pointers</h1></Link>
            </div>
        </div>
        
        </>
    )
}

export default Pfps;