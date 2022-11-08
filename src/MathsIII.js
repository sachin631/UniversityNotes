import React from "react";
import "./Style.css";
import {Link} from "react-router-dom";

function Maths(){
    return(
        <>
        <div id="pfpsmaindiv">
            <h1 id='pfpstitle'>MathsIII NOTES</h1>
            <div id="pfpscontent">
            <Link className="link" to="/subjects/MathsIII/unit1"><h1 className="h1subject">UNIT 1 : maths3</h1></Link>
            <Link className="link" to="/subjects/MathsIII/unit2"><h1 className="h1subject">UNIT 2 :maths3</h1></Link>
            <Link className="link" to="/subjects/MathsIII/unit3"><h1 className="h1subject">UNIT 3 :maths3</h1></Link>
            <Link className="link" to="/subjects/MathsIII/unit4"><h1 className="h1subject">UNIT 4 :mahs3</h1></Link>
            </div>
        </div>
        
        </>
    )
}

export default Maths;