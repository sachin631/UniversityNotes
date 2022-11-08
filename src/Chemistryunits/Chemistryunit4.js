import React from "react";
import allapinotes from "../allapinotes.json";
// import  "../tailwind.css";

function Chemistryunit4() {
    return (
        <>
            <div className="maindiv bg-orange-100 w-screen h-auto">
                <div className="contentdi" >
                {
                    allapinotes.map((curelem) => {
                        return (
                            <>
                                <h1 className="bg-red-500 flex items-center justify-center h-10 text-lg sticky top-0 ">{curelem.chemistrytitleunit4} </h1>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph1} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph2} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph3} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph4} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph5} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph6} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.chemistryunit4paragraph8} </p>


                            </>
                        )
                    })
                }
               </div>
            </div>
        </>
    )
}

export default Chemistryunit4;