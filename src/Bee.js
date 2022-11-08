import React from "react";
import "./Style.css";
import {Link} from "react-router-dom";

function Bee() {
    return (
        <>
            <div id="pfpsmaindiv">
                <h1 id='pfpstitle'>BEE NOTES</h1>
                <div id="beecontent">
                    <Link className="link" to="/subjects/Bee/unit1" > <h1 className="h1subject">UNIT 1 : DC Circuits,AC Circuits</h1></Link>
                    <Link className="link" to="/subjects/Bee/unit2" > <h1 className="h1subject">UNIT 2 :Transformers,Polyphase Circuits</h1></Link>
                    <Link className="link" to="/subjects/Bee/unit3" > <h1 className="h1subject">UNIT 3 :Electrical Machines</h1></Link>
                    <Link className="link" to="/subjects/Bee/unit4" > <h1 className="h1subject">UNIT 4 :Measuring Instruments,Electrical Installations</h1></Link>
                </div>
            </div>

        </>
    )
}

export default Bee;