import React from "react";
import "./Style.css";
import {Link} from "react-router-dom";

function Workshoptechnology(){
    return(
        <>
        <div id="pfpsmaindiv">
            <h1 id='pfpstitle'>Workshop Technology NOTES</h1>
            <div id="pfpscontent">
            <Link className='link' to="/subjects/Workshoptechnology/unit1"><h1 className="h1subject">UNIT 1 : Manufacturing Processes</h1></Link>
            <Link className='link' to="/subjects/Workshoptechnology/unit2"><h1 className="h1subject">UNIT 2 :Carpentry, Fitting , Forming Processes</h1></Link>
            <Link className='link' to="/subjects/Workshoptechnology/unit3"><h1 className="h1subject">UNIT 3 :Casting and Machine Tools</h1></Link>
            <Link className='link' to="/subjects/Workshoptechnology/unit4"><h1 className="h1subject">UNIT 4 :Welding</h1></Link>
            </div>
        </div>
        
        </>
    )
}

export default Workshoptechnology;