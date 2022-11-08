import React from "react";
import allapinotes from "../allapinotes.json";
// import  "../tailwind.css";

function workshoptechnologyunit2() {
    return (
        <>
            <div className="maindiv bg-orange-100 w-screen h-auto">
                <div className="contentdi" >
                {
                    allapinotes.map((curelem) => {
                        return (
                            <>
                                <h1 className="bg-red-500 flex items-center justify-center h-10 text-lg sticky top-0 ">{curelem.workshoptechnologytitleunit2} </h1>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph1} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph2} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph3} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph4} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph5} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph6} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.workshoptechnologyunit2paragraph8} </p>


                            </>
                        )
                    })
                }
               </div>
            </div>
        </>
    )
}

export default workshoptechnologyunit2;