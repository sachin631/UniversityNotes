import React from "react";
import allapinotes from "../allapinotes.json";
// import  "../tailwind.css";

function physicsunit2() {
    return (
        <>
            <div className="maindiv bg-orange-100 w-screen h-auto">
                <div className="contentdi" >
                {/* {
                    allapinotes.map((curelem) => {
                        return (
                            <>
                                <h1 className="bg-red-500 flex items-center justify-center h-10 text-lg sticky top-0 ">{curelem.physicstitleunit2} </h1>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph1} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph2} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph3} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph4} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph5} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph6} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit2paragraph8} </p>


                            </>
                        )
                    })
                } */}

<br />
          <br />
          <br />
          <div className="ml-2 mr-2 md:ml-[10%] md:mr-[10%]">
            <h1 className="text-center font-bold text-blue-500">
              Unit 2: Semiconductors
            </h1>
            <br />
            <section>
              <h1 className="font-bold">Table of Contents</h1>
              <li>Intrinsic and extrinsic semiconductors</li>
              <li>
                Dependence of Fermi level on carrierconcentration and
                temperature (equilibrium carrier statistics)
              </li>
              <li>Carrier generation and recombination</li>
              <li>Carrier transport: diffusion and drift</li>
              <li>p-n junction</li>
              <li>Metal-semiconductor junction (Ohmic and Schottky)</li>
              <li>
                Semiconductor materials of interest for optoelectronic devices.
              </li>
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">Semiconductor</h1>
              <p>
                A semiconductor material is one whose electrical properties lie
                in between those of insulators and good conductors. Examples
                are: germanium and silicon. In terms of energy bands,
                semiconductors can be defined as those materials which have
                almost an empty conduction band and almost filled valence band
                with a very narrow energy gap (of the order of 1 eV) separating
                the two.
              </p>
              <img src="/images/26.png" />
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                Intrinsic semiconductors
              </h1>
              <li>
                An intrinsic semiconductor is one which is made of the
                semiconductor material in its extremely pure form.
              </li>
              <li>Examples : Si, Ge</li>
              <li>
                The energy gap is so small that even at ordinary room
                temperature; there are many electrons which possess sufficient
                energy to jump across the small energy gap between the valence
                and the conduction bands.
              </li>
              <li>
                Alternatively, an intrinsic semiconductor may be defined as one
                in which the number of conduction electrons is equal to the
                number of holes.
              </li>
              <li>
                Fermi Level: Fermi level is the term used to describe the top of
                the collection of electron energy levels at absolute zero
                temperature. the highest energy level which an electron can
                occupy the valance band at 0k is called Fermi energy (Ef ).
              </li>
              <li>
                Fermi level lies in the mid of forbidden gap in intrinsic
                semiconductor.
              </li>
              <img src="/images/27.png" />
              <br />
              <li>
                At zero K very high field strengths (~ 1010 V/m) are required to
                move an electron from the top of the valence band to the bottom
                of the conduction band
              </li>
              <img src="/images/28.png" />
              <h1> =>Thermal excitation is an easier route.</h1>
              <img src="/images/29.png" />
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                Conduction in an intrinsic semiconductor
              </h1>
              <li>
                Under applied field the electrons (thermally excited into the
                conduction band) can move using the vacant sites in the
                conduction band
              </li>
              <li>Holes move in the opposite direction in the valence band</li>
              <li>
                The conductivity of a semiconductor depends on the concentration
                of these charge carriers (ne & nh )
              </li>
              <li>
                Similar to drift velocity of electrons under an applied field in
                metals in semiconductors the concept of mobility is used to
                calculate conductivity
              </li>
              <img src="/images/30.png" />
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                Extrinsic semiconductors
              </h1>
              <li>
                The addition of doping elements significantly increases the
                conductivity of a semiconductor. In fact impurity is
                accidentally present in semiconductors (even in low
                concentrations like 1 atom in 1012 atoms), which make it
                extrinsic.
              </li>
              <h1 className="text-[19px]">Doping of Si</h1>
              <li>
                V column element (P, As, Sb) → the extra unbonded electron is
                practically free (with a radius of motion of ~ 80 Å)  Energy
                level near the conduction band => n- type semiconductor
              </li>
              <li>
                III column element (Al, Ga, In) → the extra electron for bonding
                supplied by a neighbouring Si atom → leaves a hole in Si. 
                Energy level near the valence band => p- type semiconductor
              </li>
              <img src="/images/31.png" />
              <br />
              <li>
                Electrons in the conduction band are the majority charge
                carriers
              </li>
              <li>
                The fraction of the donor level electrons excited into the
                conduction band is much larger than the number of electrons
                excited from the valence band
              </li>
              <li>
                Law of mass action: (ne ) conduction band x (nh ) valence band =
                Constant
              </li>
              <li>
                The number of holes is very small in an n-type semiconductor
              </li>
              <li> => Number of electrons ≠ Number of holes</li>
              <img src="/images/32.png" />
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                Differnce Between N and P type semiconductor
              </h1>
              <div className="flex justify-center items-center gap-2">
                <div>
                  <li>
                    1) Doped with pentavalent atoms. Electrons are majority
                    charge carriers. Holes are minority charge carriers.
                  </li>
                  <li> It gives out electrons, hence, known as donor atoms.</li>
                  <li>
                    Bismuth, Antimony, Arsenic and Phosphorus are the elements
                    used for doping
                  </li>
                </div>
                <div>
                  <li>
                    Doped with trivalent atoms. Holes are majority charge
                    carriers. Electrons are minority charge carriers.
                  </li>
                  <li>It accepts electrons, hence, known as accepter atoms.</li>
                  <li>
                    Aluminum, Gallium, Indium and Boron are the elements used
                    for doping
                  </li>
                </div>
              </div>
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                Conduction Mechanisms in Semiconductors
              </h1>
              <h1 className="text-[19px]">
                Concentration Laws in Intrinsic and Extrinsic Semiconductors:-
              </h1>
              <p className="">
                => we study last lecture about intrinsic and extrinsic
                semiconductors in general. The general law (charge conservation
                law) in semiconductors in terms of concentration is{" "}
                <img src="/images/33.png" />
                n electron concentration & p hole concentration
                <img src="/images/34.png" />
                charge carrier concentration in intrinsic semiconductors
                <img src="/images/35.png" />
                or we can say
                <img src="/images/36.png" />n<sub>i</sub> is intrinsic
                charge carrier concentration (whether electrons or holes)
              </p>
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                Concentration Laws in Intrinsic and Extrinsic Semiconductors
              </h1>
              <img src="/images/37.png" />
              <p>{`where nn
                    is electron concentration in n-type which is the majority carrier{ the 
                    most number carrier in a semiconductor) & pn
                    is hole concentration in n-type 
                    which is the minority carrier{ the fewest number carrier in a semiconductor)
                    the opposite , np
                    is electron concentration in p-type which is the minority carrier 
                    pp is hole concentration in p-type which is the majority carrier .
                    (concentration is a number per volume unit) (what is unit of concentration)`}</p>
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                Concentration Laws in Intrinsic and Extrinsic Semiconductors
              </h1>
              <p>
                <img src="/images/38.png" />
              </p>
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                Concentration Laws in Intrinsic and Extrinsic Semiconductors
              </h1>
              <p>
                <img src="/images/39.png" />
              </p>
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                Energy laws and Fermi level in intrinsic and extrinsic
                semiconductors
              </h1>
              <p>
                <img src="/images/40.png" />
                <img src="/images/41.png" />
                <img src="/images/42.png" />
              </p>
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                Temperature dependence of carrier concentrations :
              </h1>
              <div className="md:flex gap-2">
                <p>
                  Also from last equations about concentration, we note not only
                  Fermi level location changes when carrier concentration
                  changes, but also temperature changes when carrier
                  concentration changes whether intrinsic or extrinsic
                  semiconductors. The figure is example of dependence carrier
                  concentration on temperature in intrinsic semiconductors. The
                  relation here is proportional exponential
                </p>
                <img src="/images/43.png" />
              </div>
              <br />
              <img src="/images/44.png" />
            </section>
            <section>
              <h1 className="text-center font-bold">
                page 23 Non – equilibrium and Excess Carriers
              </h1>
              <p>
                Our discussion until now is about equilibrium condition, we
                supposed to symbolize the electron and hole concentration
                respectively n<sub>o</sub> & P<sub>o</sub> .
              </p>
              <p>
                What about non-equilibrium condition?? The simple type is low-
                level injection which happened when the disorder occurs in
                electrons concentrations at conduction band or disorder occurs
                in holes concentrations at valence band less than the
                concentrations of majority carriers.
              </p>
              <img src="/images/45.png" />
              <p>
                Express of disorder of concentrations from equilibrium values.
                If there was a negative decrease and if there is a positive
                increase
              </p>
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                Non – equilibrium and Quasi – Fermi levels
              </h1>
              <p>
                At equilibrium condition, we can locate Fermi level from
                equilibrium carrier concentration.{" "}
              </p>
              <img src="/images/46.png" />
              <br />
              <p className="font-serif">
                At non equilibrium condition, we can locate Fermi level from non
                equilibrium carrier concentration
              </p>
              <br />
              <img src="/images/47.png" />
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold">
                The transfer of current in semiconductors
              </h1>
              <p>
                The current transfer in the extrinsic semiconductor depends on
                two important factors, namely drift and diffusion
              </p>
              <br />
              <p>
                <span className="font-semibold">Drift:-</span> movement of
                charge carriers, which is due to the applied electric field,
              </p>
              <li>
                This movement is regular which opposite of random Brownian
                motion. As we know, the holes always move in the direction of
                the electric field opposite of electrons movement. This movement
                is called drift.
              </li>
              <li>
                This movement represent by drift velocity vd .Drift coefficient
                is called mobility µ .
              </li>
              <li>
                Mobility for electron and hole respectively µn & µp . Also,
                drift velocity for electron and hole respectively v<sub>n</sub>{" "}
                & v<sub>p</sub>{" "}
              </li>
              <li>Those coefficients connect by electric field. </li>
              <img src="/images/48.png" />
              <li>
                What matters to us in this factor is its effect at current
                transfer and therefore the current density
              </li>
              <h1 className="text-[22px]">Current density of drift:</h1>
              <img src="/images/49.png" />
              <li>
                from the relation between the current density, electric field
                and resistivity or conductivity
              </li>
              <img src="/images/50.png" />
              <li>
                The resistivity and conductivity in the semiconductor express
                the following equations respectively
              </li>
              <img src="/images/51.png" />

              <img src="/images/52.png" />
              <br />
              <p>
                The migration of carriers (electrons or holes) from the most
                concentration to fewest concentration
              </p>
              <li>
                Diffusion depends on the concentrations and also on random
                motion(thermal velocity )
              </li>
              <li>
                Diffusion coefficient for electron and hole, respectively D
                <sub>n</sub> & D<sub>p</sub>
              </li>
              <li>
                Similar to drift, we need to know current density of diffusion
              </li>
              <img src="/images/53.png" />
              <p>
                Total current density in the semiconductor: is the sum of drift
                and diffusion current density
              </p>
              <img src="/images/54.png" />
              <h1>Einstein Relation:-</h1>
              <p>
                We can connect drift and diffusion with another relation. Which
                is a Einstein Relation
              </p>
              <img src="/images/55.png" />
              <p>
                There are two other processes than drift and diffusion occur in
                the semiconductor. Which is recombination and generation
                processes:
              </p>
              <div className="md:flex gap-2">
                <div className="">
                  <h1>Recombination:</h1>
                  <p>
                    The process that electron recombining with hole looses
                    energy and moves from conduction band to valence band
                  </p>
                </div>
                <img src="/images/56.png" />
              </div>
              <br />
              <div className="md:flex gap-2">
                <div className="">
                  <h1>Generation:</h1>
                  <p>
                    The process that acquiring energy to generation electron
                    which moves from valence band to conduction band leaving
                    free hole in the valance band; formation of electron-hole
                    pair
                  </p>
                </div>
                <img src="/images/57.png" />
              </div>
              <li>
                there are number types of this two processes according to given
                energy (optically, thermally, and kinetically) depending on the
                circumstances (such as the presence of an electric field) and so
                on
              </li>
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold text-blue-500">
                Direct and indirect semiconductors of conduction and valence
                bands in energy-momentum space
              </h1>
              <div className="md:flex justify-center items-center">
                <p className="md:w-[30%]">
                  Because we dealt with the subject of recombination and
                  generation, we should clarify that there are two types of
                  semiconductor directly and indirectly. If the top of valence
                  band and the bottom of conduction band have the same wave
                  number, we called direct semiconductor. However, if they have
                  different wave number, we called indirect semiconductor.
                </p>
                <img src="/images/58.png" />
              </div>
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold text-blue-500">
                Direct and indirect semiconductors of conduction and valence
                bands in energy-momentum space
              </h1>
              <p>
                recombination or generation direct (band to band) occur in
                direct semiconductor GaAs, which is famous in the optical diode
                (LED). The opposite in case of recombination or generation
                indirect ( by recombination and generation centers) occur in
                indirect semiconductor Si and Ge. However, the Si more
                widespread in manufacture diode and transistor than Ge. This is
                because Ge less stability at temperature, because the valence
                electrons in it are far from the nucleus and thus their ability
                to escape easily. Electrons occupy in most decline valley in
                conduction band such as ball into the hole. While holes occupy
                most high peak in valence band such as balloon in a ceiling of a
                room
              </p>
              <img src="/images/59.png" />
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold text-blue-500">
                P-N Junction
              </h1>
              <li>
                P-N junctions are fabricated from a monocrystalline piece of
                semiconductor with both a P-type and N-type region in proximity
                at a junction.
              </li>
              <li>
                The transfer of electrons from the N side of the junction to
                holes annihilated on the P side of the junction produces a
                barrier voltage. This is 0.6 to 0.7 V in silicon, and varies
                with other semiconductors.
              </li>
              <li>
                A forward biased PN junction conducts a current once the barrier
                voltage is overcome. The external applied potential forces
                majority carriers toward the junction where recombinetion takes
                place, allowing current flow.
              </li>
              <li>
                A reverse biased PN junction conducts almost no current. The
                applied reverse bias attracts majority carriers away from the
                junction. This increases the thickness of the nonconducting
                depletion region.
              </li>
              <li>
                Reverse biased PN junctions show a temperature dependent reverse
                leakage current. This is less than a µA in small silicon diodes.
              </li>
              <br />
              <img src="/images/60.png" />
              <br />
              <img src="/images/61.png" />
              <br />
              <img src="/images/62.png" />
              <br />
              <img src="/images/63.png" />
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold text-blue-500">
                PN Junction:Band Diagram
              </h1>
              <li>
                Due to diffusion, electrons move from n to p-side and holes from
                p to n-side.
              </li>
              <li>
                Causes depletion zone at junction where immobile charged ion
                cores remain.
              </li>
              <li>
                Results in a built-in electric field (10<sup>3</sup> to 10
                <sup>5</sup> V/cm), which
              </li>
              <li>
                Note: EF levels are aligned across pn junction under
                equilibrium.
              </li>
              <img src="/images/64.png" />
            </section>
            <br />
            <section>
              <h1>PN Junction: Band Diagram under Bias</h1>
              <li>
                Forward Bias: negative voltage on n-side promotes diffusion of
                electrons by decreasing built-in junction potential -> higher
                current.{" "}
              </li>
              <li>
                Reverse Bias: positive voltage on n-side inhibits diffusion of
                electrons by increasing built-in junction potential -> lower
                current
              </li>
              <br />
              <img src="/images/65.png" />
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold text-blue-500">
                {" "}
                Forward & Reverse Biased
              </h1>
              <hr className="border-[2px]" />
              <br />
              <img src="/images/66.png" />
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold text-blue-500">
                PN Junction: IV Characteristics
              </h1>
              <li>Current-Voltage Relationship:</li>
              <img src="/images/67.png" />
              <li>Forward Bias: current exponentially increases.</li>
              <li>Reverse Bias: low leakage current equal to ~Io .</li>
              <li>
                Ability of pn junction to pass current in only one direction is
                known as “rectifying” behavior.
              </li>
              <img src="/images/68.png" />
            </section>
            <br />
            <section>
              <h1 className="text-center font-bold text-blue-500">
                Schottky junctions
              </h1>
              <p>
                When a metal and semiconductor are brought into contact, there
                are two types of junctions formed depending on the work function
                of the semiconductor, its relation with the metal{" "}
              </p>
              <li>Schottky junction : φm > φsemi</li>
              <li>{`Ohmic junction : φm < φsemi `}</li>
              <p>
                Consider a junction formed between a metal and n-type
                semiconductor, as shown in figure below.
              </p>
              <img src="/images/69.png" />
              <li>
                The Fermi level of the semiconductor is higher (since its work
                function is lower) than the metal. Similar to a metal-metal
                junction, when the metal-semiconductor junction is formed the
                Fermi levels must line up at equilibrium.
              </li>
              <li>
                Another way to look at this is that there are electrons in the
                conduction level of the semiconductor which can move to the
                empty energy states above the Fermi level of the metal.
              </li>
              <li>
                This leave a positive charge on the semiconductor side and due
                to the excess electrons, a negative charge on the metal side,
                shown in figure below, leading to a contact potential.
              </li>
              <li>
                When a contact is formed between two metals, the charges reside
                on the surface. This is due to the high electron density found
                in metals (typically 10<sup>22</sup> cm<sup>-3</sup> )
              </li>
              <p>
                On the other hand, when a contact is formed between a metal and
                semiconductor, due to the low charge density on the
                semiconductor side (typically 1017 cm−3 ) the electrons are
                removed not only from the surface but also from a certain depth
                within the semiconductor. This leads to the formation of a
                depletion region within the semiconductor, shown in figure
                below.
              </p>
              <img src="/images/70.png" />
              <p>
                When a Schottky junction is formed between the metal and
                semiconductor, the Fermi level lines up and also a positive
                potential is formed on the semiconductor side. Because the
                depletion region extends within a certain depth in the
                semiconductor there is bending of the energy bands on the
                semiconductor side. Bands bend up in the direction of the
                electric field (field goes from positive charge to negative
                charge, opposite of the potential direction). This means the
                energy bands bend up going from n-type semiconductor to metal,
                shown in figure below.
              </p>
              <img src="/images/71.png" />
              <p>
                There is a built in potential in the Schottky junction, V0, and
                from figure 8 this is given by the difference in work functions.
                eV0 = φm − φsemi The work function of the metal is a constant
                while the semiconductor work function depends on the dopant
                concentration (since this affects the Fermi level position). The
                contact potential then represents the barrier for the electrons
                to move from the n-type semiconductor to the metal. Initially,
                when the junction is formed electrons move to the metal to
                create the depletion region. The contact potential thus formed
                prevents further motion of the electrons to the metal.There is
                also a barrier for electrons to move from metal to
                semiconductor. This is called the Schottky barrier and denoted
                by φB in figure
              </p>
              <img src="/images/72.png" />
            </section>
          </div>
          {/* main div above */}
               </div>
            </div>
        </>
    )
}

export default physicsunit2;