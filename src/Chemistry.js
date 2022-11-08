import React from "react";
// import "./Style.css";
import { Link } from "react-router-dom";

function Chemistry() {
    return (
        <>
            <div id="pfpsmaindiv">
                <h1 id='pfpstitle'>CHEMISTRY NOTES</h1>
                <div id="pfpscontent">
                    <Link className="link" to="/subjects/Chemistry/unit1" ><h1 className="h1subject">UNIT 1 : Atomic and molecular structure and Periodic properties</h1></Link>
                    <Link className="link" to="/subjects/Chemistry/unit2" ><h1 className="h1subject">UNIT 2 :Stereochemistry and Organic reaction ,synthesis of a drug molecules</h1></Link>
                    <Link className="link" to="/subjects/Chemistry/unit3" ><h1 className="h1subject">UNIT 3 :Intermolecular Forces and water chemistry and corrosion</h1></Link>
                    <Link className="link" to="/subjects/Chemistry/unit4" ><h1 className="h1subject">UNIT 4 :Spectroscopic techniques and applications</h1></Link>
                </div>
            </div>

        </>
    )
}

export default Chemistry;