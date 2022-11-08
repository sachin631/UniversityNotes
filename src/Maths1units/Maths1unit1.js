import React from "react";
import allapinotes from "../allapinotes.json";
// import  "../tailwind.css";

function maths1unit1() {
    return (
        <>
            <div className="maindiv bg-orange-100 w-screen h-auto">
                <div className="contentdi" >
                {
                    allapinotes.map((curelem) => {
                        return (
                            <>
                                <h1 className="bg-red-500 flex items-center justify-center h-10 text-lg sticky top-0 ">{curelem.maths1titleunit1} </h1>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph1} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph2} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph3} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph4} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph5} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph6} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.maths1unit1paragraph8} </p>


                            </>
                        )
                    })
                }
               </div>
            </div>
        </>
    )
}

export default maths1unit1;