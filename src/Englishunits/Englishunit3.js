import React from "react";
import allapinotes from "../allapinotes.json";
// import  "../tailwind.css";

function englishunit3() {
    return (
        <>
            <div className="maindiv bg-orange-100 w-screen h-auto">
                <div className="contentdi" >
                {
                    allapinotes.map((curelem) => {
                        return (
                            <>
                                <h1 className="bg-red-500 flex items-center justify-center h-10 text-lg sticky top-0 ">{curelem.englishtitleunit3} </h1>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph1} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph2} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph3} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph4} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph5} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph6} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.englishunit3paragraph8} </p>


                            </>
                        )
                    })
                }
               </div>
            </div>
        </>
    )
}

export default englishunit3;