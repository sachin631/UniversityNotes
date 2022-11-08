import React from "react";
import allapinotes from "../allapinotes.json";
// import  "../tailwind.css";

function physicsunit1() {
    return (
        <>
            <div className="maindiv bg-orange-100 w-screen h-auto">
                <div className="contentdi" >
                {/* {
                    allapinotes.map((curelem) => {
                        return (
                            <>
                                <h1 className="bg-red-500 flex items-center justify-center h-10 text-lg sticky top-0 ">{curelem.physicstitleunit1} </h1>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph1} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph2} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph3} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph4} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph5} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph6} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph7} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph8} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph9} </p>
                                <br/>
                                <p className="font-serif pl-5 pr-5"> {curelem.physicsunit1paragraph8} </p>


                            </>
                        )
                    })
                } */}
                {/* .................................new start............................................................ */}
            <div className="font-serif ml-2 mr-2 md:ml-[10%] md:mr-[10%]">
              <br />
              <br />
              <br />
              <h1 className="text-center font-[poppins] font-bold text-[23px] text-blue-500">
                Unit 1: Electronic Materials
              </h1>
              <br />
              <h2 className="font-bold ">Table of Contents</h2>
              <list>
                <li>Basics of quantum mechanics</li>
                <li>Free electron theory</li>
                <li>Density of states and energy band diagrams</li>
                <li>Kronig-Penny model (to introduce origin of band gap)</li>
                <li>Energy bands in solids</li>
                <li>E-k diagram, Direct and indirect band gaps</li>
                <li>
                  Types of electronic materials: metals, semiconductors, and
                  insulators,{" "}
                </li>
                <li>Density of states, Occupation probability,</li>
                <li>Fermi level, Effective mass, Phonons</li>
              </list>
              <br />
              <h1 className=" font-bold ">Basics of quantum mechanics</h1>
              <list>
                <li>De-broglie Hypothesis</li>
                <li>Wave function and its physical significance</li>
                <li>Time dependent Scrodinger Equation</li>
                <li>Time independent Scrodinger Equation</li>
                <li>Particle in rigid one-dimensional box</li>
              </list>
              <br />
              <div>
                <h1 className="text-center font-bold">De-broglie Hypothesis</h1>
                <li>
                  The de Broglie hypothesis states that particles of matter can
                  behave as both waves and particles, just like light.
                </li>
                <li>
                  In quantum mechanics, matter is believed to behave both like a
                  particle and a wave at the sub-microscopic level. The particle
                  behavior of matter is obvious. When you look at a table, you
                  think of it like a solid, stationary piece of matter with a
                  fixed location. At this macroscopic scale, this holds true.
                  But when we zoom into the subatomic level, things begin to get
                  more complicated, and matter doesn't always exhibit the
                  particle behavior that we expect.
                </li>
              </div>
              <br />
              <div>
                <h1 className="text-center font-bold">
                  Wave function and its physical significance
                </h1>
                <list>
                  <li>
                    A wave function in quantum physics is a mathematical
                    description of the quantum state of an isolated quantum
                    system. The wave function is a complex-valued probability
                    amplitude, and the probabilities for the possible results of
                    measurements made on the system can be derived from it. The
                    most common symbols for a wave function are the Greek
                    letters ψ or Ψ.
                  </li>
                  <li>Properties:</li>
                </list>
                <h1>ψ and d ψ /dt should be Single valued.</h1>
                <h1>ψ and d ψ /dt should be continuous.</h1>
                <h1>ψ and d ψ /dt should be finite.</h1>
              </div>
              <br />
              <div>
                <h1 className="text-center font-bold">Schrödinger Equations</h1>
                <li>
                  The Schrödinger equation is a linear partial differential
                  equation that describes the wave function or state function of
                  a quantum-mechanical system.
                </li>
                <li className="text-[19px]">Time-dependent equation:-</li>
                <p>
                  The most general form is the time-dependent Schrödinger
                  equation (TDSE), which gives a description of a system
                  evolving with time:
                  <img src="/images/1.jpeg" />
                  Where <img src="/images/2.png" /> is reduced Planck
                  constant.
                  <img src="/images/3.png" /> is state of quantum system.
                  <img src="/images/4.png" />
                </p>
                <li className="text-[19px]">Time-independent equation:-</li>
                <p>
                  The time-dependent Schrödinger equation described above
                  predicts that wave functions can form standing waves, called
                  stationary states. These states are particularly important as
                  their individual study later simplifies the task of solving
                  the time-dependent Schrödinger equation for any state.
                  Stationary states can also be described by a simpler form of
                  the Schrödinger equation, the time-independent Schrödinger
                  equation (TISE)
                </p>
                <img src="/images/5.png" alt="five"/>
              </div>
              {/* 6th section acc to brown title */}
              <br />
              <section>
                <h1 className="text-center font-bold">
                  Particle in rigid one-dimensional box
                </h1>
                <p>
                  A particle in a one-dimensional box is the name given to a
                  hypothetical situation where a particle of mass m is confined
                  between two walls, at x=0 and x=L. In the infinite square well
                  that we will consider, the potential energy is zero within the
                  box but rises instantaneously to infinity at the walls.
                </p>
                <img src="/images/6.png" />
                <p>
                  {`the solution in this form.
                    where C and D are two more arbitrary constants, and 0 ≤ x ≤ L .
                    Now, because of the presence of the potential walls, we shall
                    see that further restrictions upon the permitted wavefunctions
                    arise. For x > L or x < 0 , the wavefunction may bWithin the box,
                    the Schrodinger equation for the particle is precisely the same
                    as that for a particle in free space ( V = 0), which was solved on
                    this page.`}
                </p>
                <li>
                  If we use the first of the boundary conditions we obtain 0 = C
                  (as cos 0 = 1 and sin 0 = 1) which implies that the
                  wavefunction for the particle in a one-dimensional box reduces
                  to
                </li>
                <li>
                  If we then put x = L and apply the second boundary condition,
                  we obtain: DsinkL=0
                </li>
                <img src="/images/8.png" />
                <p>
                  The boundary condition may thus only be satisfied if kL is an
                  integer multiple of π, as the sine of any integer multiple of
                  pi is zero. Thus we may write
                </p>
                <img src="/images/9.png" />
                <p>
                  Note that n = 0 is not an acceptable solution, as it implies k
                  = 0, which again makes the wavefunction zero everywhere. Note
                  that the above equation tells us that the energy of the
                  particle is now quantised, limited to discrete values. This
                  quantisation arises due to the restriction of n to discrete
                  values, and this arises out of a need to fulfil the boundary
                  conditions imposed on the system. It is a general observation
                  that quantisation of a physical property such as the energy
                  arises due to boundary conditions, as it is these conditions
                  that render some solutions unacceptable. Note also that the
                  gaps between adjacent energy levels decrease as the integer n
                  increases. Thus the complete, normalised wavefunction for the
                  particle in a onedimensional box is
                </p>
                <img src="/images/10.png" />
                <li>
                  The wavefunctions and energies are labeled with a quantum
                  number, n.
                </li>
                <li>
                  A quantum number is a number (an integer, or in some cases a
                  half-integer) which labels the state of the system. For a
                  particle in a box, there are an infinite number of acceptable
                  wavefunctions (and thus an infinite numbers of states in which
                  the system may found) , and the quantum number n specifies
                  which state the system.
                </li>
                <li>
                  The fact that n cannot be zero means that the lowest amount of
                  energy the particle may possess (when n is 1) is not zero, as
                  would be permitted in classical mechanics (and would imply a
                  completely stationary particle) but is in fact,This minimum,
                  irremovable energy of the particle is called its zero-point
                  energy
                </li>
              </section>
              <br />
              {/* 7th section */}
              <section>
                <h1 className="text-center font-bold">
                  Classical free electron theory: Drude-Lorentz theory
                </h1>
                <li>
                  Metals consist of large number of free electrons that behaves
                  like a molecules of perfect gas.
                </li>
                <li>
                  Assembly of free electrons in a metal: free electron gas
                </li>
                <li>
                  Random motion of free electron gas: speed is function of
                  temperature, no practical contribution to conductivity
                </li>
                <li>
                  On application of external field, random motion is modified,
                  ehave some drift velocity
                </li>
                <li>
                  All valence electrons can absorb energy. Average K.E.= 3/2 KT
                </li>
                <li>Follows Maxwell-Boltzman statistics</li>
                <li>Potential is uniform everywhere inside the crystal</li>
                <li>
                  P.E. of electron inside the metal is neglected. Therefore,
                  Total Energy= K.E.
                </li>
              </section>
              <br />
              <section>
                <h1 className="text-center font-bold">
                  Failure of Classical free electron theory
                </h1>
                <li>Could not explain heat capacity of free electron gas</li>
                <li>
                  Could not explain paramagnetic susceptibility of free
                  elelctrons
                </li>
                <li>
                  Could not explain variation in electrical conductivity with
                  temperature
                </li>
                <li>Could not explain Wiedemann-Frenz law</li>
                <li>
                  Could not explain long mean free path at low temperatures
                </li>
              </section>
              <br />
              <section>
                <h1 className="text-center font-bold">
                  Need of Quantum theory
                </h1>
                <li>Fermi- Dirac Statistics</li>
                <li>Pauli exclusion principle</li>
                <li>Sommerfield free electron theory</li>
              </section>
              <br />
              <section>
                <h1 className="text-center font-bold">
                  Postulates of Quantum free electron theory (Sommerfield
                  Theory)
                </h1>
                <li>Free electrons in metal are free particle in box</li>
                <li>Electrons obey Pauli exclusion principle</li>
                <li>Electrons have high K.E. than classical K.E</li>
                <li>Electrons move in constant potential field</li>
              </section>
              <br />
              <section>
                <h1 className="text-center font-bold">
                  Fermi-Dirac Statistics: Occupation Probability
                </h1>
                <img src="/images/11.png" />
              </section>
              <br />
              <section>
                <h1 className="text-center font-bold">Density of states</h1>
                <p>
                  The density of states (DOS) is essentially the number of
                  different states at a particular energy level that electrons
                  are allowed to occupy, i.e. the number of electron states per
                  unit volume per unit energy. Now that we have seen the
                  distribution of modes for waves in a continuous medium, we
                  move to electrons. The calculation of some electronic
                  processes like absorption, emission, and the general
                  distribution of electrons in a material require us to know the
                  number of available states per unit volume per unit energy
                </p>
                <img src="/images/12.png" className="" />
              </section>
              <br />
              <section>
                <h1 className="text-center font-bold">
                  Failures of Quantum free electron theory
                </h1>
                <li>This theory did not include mean free path.</li>
                <li>
                  Could not explain conductivity of divalent and trivalent atoms
                </li>
                <li>
                  Relaxation time is assumed to be same for thermal and
                  electrical conductivity but they are not same. Phonons also
                  carry thermal energy.
                </li>
                <li>
                  Fermi surface considered spherical but it is not spherical
                </li>
                <li>Could not explain metallic properties of crystals</li>
                <img src="/images/thirteen.png" className="" />
              </section>
              <br />
              <section>
                <h1 className="text-center font-bold">Band theory of solids</h1>
                <li>
                  In the free electron theory a constant potential was assumed
                  inside the solid.
                </li>
                <li>
                  In reality the presence of the positive ion cores gives rise
                  to a varying potential field. In a simple model the potential
                  as in Fig.1 can be assumed (‘a’ is the lattice spacing and ‘w’
                  is the width of the potential). If ‘w’ -> 0, we get{" "}
                  <img src="/images/fourteen.png" />
                  functions.
                </li>
                <li>
                  The travelling electron wave interacts with this periodic
                  potential (for a crystalline solid).
                </li>
                <li>The electron wave can be Bragg diffracted.</li>
              </section>
              <br />
              <section>
                <h1 className="text-center font-bold">Kronig- Penney Model</h1>
                <img src="/images/fifteen.png" />
                <br />
                <img src="/images/sachin16.png" />
                <br />
                <li>
                  The Velocity of electrons for the above values of k are zero.
                </li>
                <li>
                  These values of k and the corresponding E are forbidden in the
                  solid.
                </li>
                <li>
                  The waveform of the electron wave is two standing waves
                </li>
                <li>
                  The standing waves have a periodic variation in amplitude and
                  hence the electron probability density in the crystal.
                </li>
                <li>
                  The potential energy of the electron becomes a function of its
                  position
                </li>
                <br />
                <p className="text-[brown]">
                  (cannot be assumed to be constant (and zero) as was done in
                  the free electron model).
                </p>
                <br />
                <img src="/images/17.png" />
              </section>
              <br />
              <section>
                <h1 className="text-center font-bold">
                  E-K diagrams: Energy is periodic in K
                </h1>
                <br />
                <img src="/images/18.png" />
                <img src="/images/19.png" />
                <br />
                <img src="/images/20.png" />
              </section>
              <br />
              <section>
                <h1 className="text-center font-bold">
                  Effective mass of electron
                </h1>
                <li>
                  The magnitude of the Energy gap between two bands is the
                  difference in the potential energy of two electron locations.
                </li>
                <li>
                  The effective mass of an electron (m*) in a solid could be
                  different from the rest mass (m0 ). The effective mass can be
                  larger or smaller than the rest mass.
                </li>
                <li>
                  Collisions with atoms increases the rest mass, while enhanced
                  propagation in the crystal gives a reduced effective mass.
                </li>
                <li>
                  From the concept of group velocity the effective mass can be
                  deduced. It is related to the curvature of the E-k curve.
                  Close to band edges, m* can be negative.
                </li>
                <img src="/images/21.png" />
              </section>
              <br />
              <section>
                <h1 className="text-center font-bold">
                  Direct indirect band gap
                </h1>
                <img src="/images/22.png" />
              </section>
              <br />
              <section>
                <h1>
                  Types of electronic materials: metals, semiconductors, and
                  insulators
                </h1>
                <img src="/images/23.png" />
                <br />
                <li>
                  Monovalent metals: Ag, Cu, Au → 1 e- in the outermost orbital
                  <br />
                  => outermost energy band is only half filled
                </li>
                <li>
                  Divalent metals: Mg, Be → overlapping conduction and valence
                  bands <br />
                  => they conduct even if the valence band is full
                </li>
                <li>
                  Trivalent metals: Al → similar to monovalent metals!!! 
                  outermost energy band is only half filled !!!
                </li>
                <br />
                <img src="/images/24.png" />
                <br />
                <li>
                  Elements of the 4th column (C, Si, Ge, Sn, Pb) → valence band
                  full but no overlap of valence and conduction bands
                </li>
                <li>
                  Diamond → PE as strong function of the position in the crystal
                  => Band gap is 5.4 eV
                </li>
                <li>
                  Down the 4th column the outermost orbital is farther away from
                  the nucleus and less bound => the electron is less strong a
                  function of the position in the crystal => reducing band gap
                  down the column
                </li>
                <br/>
                <img src="/images/25.png" />
              </section>
              {/* thamks section */}
              <section className="text-center font-bold mt-4 pb-4">Thanks ! Bookmark at Home</section>
            </div>

            {/* above main div */}
            {/* .................................new start............................................................ */}
               </div>
            </div>
        </>
    )
}

export default physicsunit1;