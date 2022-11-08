import React from "react";
import { Link } from "react-router-dom";
import "./Style.css";

function Physics() {
    return (
        <>
            <div id="pfpsmaindiv">
                <h1 id='pfpstitle'>Physics NOTES</h1>
                <div id="pfpscontent">
                    <Link ClassName='link' style={{ textDecoration: 'none' }} to="/subjects/physics/unit1"> <h1 className="h1subject">UNIT 1 : ElectronicMaterials</h1></Link>
                    <Link className='link' to="/subjects/physics/unit2">  <h1 className="h1subject">UNIT 2 :Semiconductors</h1></Link>
                    <Link className='link' to="/subjects/physics/unit3">  <h1 className="h1subject">UNIT 3 :Light-Semiconductor Interaction</h1></Link>
                    <Link className='link' to="/subjects/physics/unit4">  <h1 className="h1subject">UNIT 4 :Measurements ,Engineered Semiconductor Materials</h1></Link>
                </div>
            </div>

        </>
    )
}

export default Physics;