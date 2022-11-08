import React from "react";
import "./Style.css";
import {Link} from "react-router-dom";

function Maths() {
    return (
        <>
            <div id="pfpsmaindiv">
                <h1 id='pfpstitle'>MATHS-I NOTES</h1>
                <div id="pfpscontent">
                    <Link className="link" to="/subjects/Maths/unit1"><h1 className="h1subject">UNIT 1 : Calculus</h1></Link>
                    <Link className="link" to="/subjects/Maths/unit2"><h1 className="h1subject">UNIT 2 :Matrices</h1></Link>
                    <Link className="link" to="/subjects/Maths/unit3"><h1 className="h1subject">UNIT 3 :Vector spaces I</h1></Link>
                    <Link className="link" to="/subjects/Maths/unit4"><h1 className="h1subject">UNIT 4 :Vector spaces II</h1></Link>
                </div>
            </div>

        </>
    )
}

export default Maths;