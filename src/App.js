import React from "react";
import Homepage from "./Homepage.js";
import Subjects from "./Subjects.js";
import Subjectmap from "./Subjectsmap.js";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import subjects components
import Maths from "./Maths.js";
import MathsII from "./MathsII.js";
import MathsIII from "./MathsIII.js";
import Bee from "./Bee.js";
import Workshoptechnology from "./Workshoptechnology.js";
import Chemistry from "./Chemistry.js";
import English from "./English.js";
import Pfps from "./Pfps.js";
import Physics from "./Physics.js";
import Pagenotfound from "./Pagenotfound.js";
import homepagemap from "./Homepagemap.js";
// import physics unit
import Physicsunit1 from "./Physicsunits/Physicsunit1";
import Physicsunit2 from "./Physicsunits/Physicsunit2";
import Physicsunit3 from "./Physicsunits/Physicsunit3";
import Physicsunit4 from "./Physicsunits/Physicsunit4";
//import bee unit
import Beeunit1 from "./Beeunits/Beeunit1";
import Beeunit2 from "./Beeunits/Beeunit2";
import Beeunit3 from "./Beeunits/Beeunit3";
import Beeunit4 from "./Beeunits/Beeunit4";
//import Chemistry unit
import Chemistryunit1 from "./Chemistryunits/Chemistryunit1";
import Chemistryunit2 from "./Chemistryunits/Chemistryunit2";
import Chemistryunit3 from "./Chemistryunits/Chemistryunit3";
import Chemistryunit4 from "./Chemistryunits/Chemistryunit4";
// import english unit
import Englishunit1 from "./Englishunits/Englishunit1";
import Englishunit2 from "./Englishunits/Englishunit2";
import Englishunit3 from "./Englishunits/Englishunit3";
import Englishunit4 from "./Englishunits/Englishunit4";
// import Maths1 unit
import Maths1unit1 from "./Maths1units/Maths1unit1";
import Maths1unit2 from "./Maths1units/Maths1unit2";
import Maths1unit3 from "./Maths1units/Maths1unit3";
import Maths1unit4 from "./Maths1units/Maths1unit4";
// import Maths2 unit
import Maths2unit1 from "./Maths2units/Maths2unit1";
import Maths2unit2 from "./Maths2units/Maths2unit2";
import Maths2unit3 from "./Maths2units/Maths2unit3";
import Maths2unit4 from "./Maths2units/Maths2unit4";
// import Maths3 unit
import Maths3unit1 from "./Maths3units/Maths3unit1";
import Maths3unit2 from "./Maths3units/Maths3unit2";
import Maths3unit3 from "./Maths3units/Maths3unit3";
import Maths3unit4 from "./Maths3units/Maths3unit4";
//import Pfps unit
import Pfpsunit1 from "./Pfpsunits/Pfpsunit1";
import Pfpsunit2 from "./Pfpsunits/Pfpsunit2";
import Pfpsunit3 from "./Pfpsunits/Pfpsunit3";
import Pfpsunit4 from "./Pfpsunits/Pfpsunit4";
//import Workshop technology unit
import Workshoptechnologyunit1 from "./Workshoptechnologyunits/Workshoptechnologyunit1";
import Workshoptechnologyunit2 from "./Workshoptechnologyunits/Workshoptechnologyunit2.js";
import Workshoptechnologyunit3 from "./Workshoptechnologyunits/Workshoptechnologyunit3";
import Workshoptechnologyunit4 from "./Workshoptechnologyunits/Workshoptechnologyunit4";





function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    {/* route of homepage component */}
                    <Route path="/" element={
                        <>
                            {
                                homepagemap.map((curelem) => {
                                    return (
                                        <Homepage img={curelem.img} title={curelem.title} content={curelem.content} />
                                    )
                                })



                            }
                        </>
                    } />
                    {/* route of subjects component */}
                    <Route path="/Subjects" element={
                        <>
                            {
                                Subjectmap.map((curelem) => {
                                    return (
                                        <Subjects url={curelem.url} img={curelem.img} title={curelem.title} content={curelem.content} />
                                    )
                                })
                            }
                        </>
                    } />
                    
                    <Route path="/subjects/physics" element={<Physics />} />
                    <Route path="/subjects/Chemistry" element={<Chemistry />} />
                    <Route path="/subjects/Maths" element={<Maths />} />
                    <Route path="/subjects/mathsII" element={<MathsII />} />
                    <Route path="/subjects/mathsIII" element={<MathsIII />} />
                    <Route path="/subjects/English" element={<English />} />
                    <Route path="/subjects/workshoptechnology" element={<Workshoptechnology />} />
                    
                    <Route path="/subjects/bee" element={<Bee />} />
                    <Route path="/Subjects/Pfps" element={<Pfps />} />
                    {/* inside physics units */}
                    <Route path="subjects/physics/unit1" element={<Physicsunit1 />} />
                    <Route path="subjects/physics/unit2" element={<Physicsunit2 />} />
                    <Route path="subjects/physics/unit3" element={<Physicsunit3 />} />
                    <Route path="subjects/physics/unit4" element={<Physicsunit4 />} />
                    {/* inside Bee units */}
                    <Route path="subjects/Bee/unit1" element={<Beeunit1 />} />
                    <Route path="subjects/Bee/unit2" element={<Beeunit2 />} />
                    <Route path="subjects/Bee/unit3" element={<Beeunit3 />} />
                    <Route path="subjects/Bee/unit4" element={<Beeunit4 />} />
                    {/* inside chemistry unit */}
                    <Route path="subjects/Chemistry/unit1" element={<Chemistryunit1 />} />
                    <Route path="subjects/Chemistry/unit2" element={<Chemistryunit2 />} />
                    <Route path="subjects/Chemistry/unit3" element={<Chemistryunit3 />} />
                    <Route path="subjects/Chemistry/unit4" element={<Chemistryunit4 />} />
                    {/* inside English units */}
                    <Route path="subjects/English/unit1" element={<Englishunit1 />} />
                    <Route path="subjects/English/unit2" element={<Englishunit2 />} />
                    <Route path="subjects/English/unit3" element={<Englishunit3 />} />
                    <Route path="subjects/English/unit4" element={<Englishunit4 />} />
                    {/* iniside Maths1 unit */}
                    <Route path="subjects/Maths/unit1" element={<Maths1unit1 />} />
                    <Route path="subjects/Maths/unit2" element={<Maths1unit2 />} />
                    <Route path="subjects/Maths/unit3" element={<Maths1unit3 />} />
                    <Route path="subjects/Maths/unit4" element={<Maths1unit4 />} />
                    {/* inside Maths2 unit */}
                    <Route path="subjects/MathsII/unit1" element={<Maths2unit1 />} />
                    <Route path="subjects/MathsII/unit2" element={<Maths2unit2 />} />
                    <Route path="subjects/MathsII/unit3" element={<Maths2unit3 />} />
                    <Route path="subjects/MathsII/unit4" element={<Maths2unit4 />} />
                    {/* inside Maths3 unit */}
                    <Route path="subjects/MathsIII/unit1" element={<Maths3unit1 />} />
                    <Route path="subjects/MathsIII/unit2" element={<Maths3unit2 />} />
                    <Route path="subjects/MathsIII/unit3" element={<Maths3unit3 />} />
                    <Route path="subjects/MathsIII/unit4" element={<Maths3unit4 />} />
                    {/* inside Pfps unit */}
                    <Route path="subjects/Pfps/unit1" element={<Pfpsunit1 />} />
                    <Route path="subjects/Pfps/unit2" element={<Pfpsunit2 />} />
                    <Route path="subjects/Pfps/unit3" element={<Pfpsunit3 />} />
                    <Route path="subjects/Pfps/unit4" element={<Pfpsunit4 />} />
                     {/* inside Workshoptechnologyunits unit */}
                     <Route path="subjects/Workshoptechnology/unit1" element={<Workshoptechnologyunit1 />} />
                    <Route path="subjects/Workshoptechnology/unit2" element={<Workshoptechnologyunit2 />} />
                    <Route path="subjects/Workshoptechnology/unit3" element={<Workshoptechnologyunit3 />} />
                    <Route path="subjects/Workshoptechnology/unit4" element={<Workshoptechnologyunit4 />} />

                    <Route path="*" element={<Pagenotfound />} />

                </Routes>
            </BrowserRouter>

        </>
    );

}

export default App;