import React from "react";
import "./Style.css";
import {Link} from "react-router-dom";

function Maths(){
    return(
        <>
        <div id="pfpsmaindiv">
            <h1 id='pfpstitle'>MATHS II</h1>
            <div id="pfpscontent">
            <Link className="link" to="/subjects/MathsII/unit1"><h1 className="h1subject">UNIT 1 : Vector Calculus</h1></Link>
            <Link className="link" to="/subjects/MathsII/unit2"><h1 className="h1subject">UNIT 2 :Ordinary Differential Equations:</h1></Link>
            <Link className="link" to="/subjects/MathsII/unit3"><h1 className="h1subject">UNIT 3 :Laplace Transforms and its Applications</h1></Link>
            <Link className="link" to="/subjects/MathsII/unit4"><h1 className="h1subject">UNIT 4 :Partial Differential Equations</h1></Link>
            </div>
        </div>
        
        </>
    )
}

export default Maths;