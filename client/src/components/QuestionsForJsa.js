import React, { useState } from "react";

import logo from "../assets/logo3.png"


const QuestionsForJsa = () => {
const [userJsa, setUserJsa] = useState({
    date:'',
    jobName:'',
    jobNumber:'',
    physicalAddress:'',
    longitude:'',
    latitude:'',
    supervisor:'',
    listTelephone:'',
    trFireDepartment:true,
    trInHouseCrew:true,
    trOther:false,
    Ambulance:'',
    Fire:'',
    police:'',
    localHospital:'',
    telephoneCo:'',
    utilityCo:'',
    evacuationPoint:'',
    checkFirstAidOnSite:true,
    checkRescueBagBaseTower:false,
    checkTowerErection:false,
    checkElectrical:false,
    checkLineAndAntennas: false,
    checkCivilConcrete:false,
    checkOther:'',
    blueNoticeSign:false,
    yellowCautionSign:false,
    redWarningSign:false,
    JobTasks:'',
    potentialHazards:'',
    preventiveMeasures:'',
})

    return (
        <section className="mb-5 grid grid-cols-4  border-none font-poppins mt-5 ">

            {/*first  */}
            <div className="col-span-2 p-1 ">
                <h3 className="text-sm">Job Name: <span className="text-red-600">*</span> </h3>
                <input placeholder="CLV32423" className=" pl-1 w-full bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">
                </input>
            </div>
            <div className="col-span-2 p-1">
                <h3 className="text-sm">Job #: <span className="text-red-600">*</span> </h3>
                <input placeholder="donut spot" className="bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
            </div>
            <div className="col-span-4 p-1">
                <h3 className="text-sm">Physical address: <span className="text-red-600">*</span> </h3>
                <input placeholder=" 14224 mossberg st." className="bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
            </div>
            <div className="col-span-2 p-1">
                <h3 className="text-sm">Longitude: <span className="text-red-600">*</span> </h3>
                <input placeholder="51.5072" className="pl-1 w-full bg-transparent inputPlaceHolder focus:outline-none    font-semibold  ">

                </input>
            </div>
            <div className="col-span-2 p-1">
                <h3 className="text-sm">Latitude: <span className="text-red-600">*</span> </h3>
                <input placeholder="0.1276" className="pl-1 w-full bg-transparent inputPlaceHolder focus:outline-none    font-semibold  ">

                </input>

            </div>

            {/* choose Crew */}

            <h3 class=" col-span-4 font-semibold text-sm font-poppins   ">Choose Crew: <span className="text-red-600">*</span></h3>

            <div class="flex col-span-2 pl-1">
                <div class="flex items-center h-5">
                    <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="accent-orange-600 w-4 h-4  rounded " />
                </div>
                <div class="ml-2 text-sm" for="helper-checkbox">
                    <label for="helper-checkbox" class="font-medium text-xs text-white">Antonio Garcia</label>
                    <p for="helper-checkbox" class="text-[10px] font-normal text-gray-500"> Company: AboveGround</p>
                </div>
            </div>
            <div class="flex col-span-2">
                <div class="flex items-center h-5">
                    <input id="checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 accent-orange-600  rounded " />
                </div>
                <div class="ml-2 text-sm">
                    <label for="checkbox" class="font-medium text-xs text-white">alex Garcia</label>
                    <p id="helper-checkbox-text" class="text-[10px] font-normal text-gray-500"> Company: AboveGround</p>
                </div>

            </div>

            {/* another questions */}
            <div className="col-span-4 p-1">
                <h3 className="text-sm">Add new Member: <span className="text-red-600">*</span> </h3>
                <input id="helper-checkbox" placeholder="Carlos Garcia" className="pl-1 w-full bg-transparent inputPlaceHolder focus:outline-none    font-semibold  ">

                </input>

            </div>
            <div className="col-span-2 p-1 ">
                <h3 className="text-sm">Job Name: <span className="text-red-600">*</span> </h3>
                <input placeholder="CLV32423" className=" text-sm  pl-1 w-full bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
            </div>
            {/* <div className="col-span-2 p-1">
                <h3 className="text-sm leading-4">Are 911 systems work with cell phones?: <span className="text-red-600">*</span> </h3>
                <input type="checkbox" placeholder="donut spot" className=" text-sm accent-orange-600  bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
            </div> */}
            <div class="flex items-center pl-3 col-span-2 p-1 " onClick={() => { }}>
                <input id="do911SystemsWork-checkbox-list" type="checkbox" value="" class="w-4 h-4  accent-orange-600   rounded   " />
                <label for="do911SystemsWork-checkbox-list" class="w-full py-3 ml-2 text-xs  ">Are 911 systems work with cell phones?</label>
            </div>

            <div className="col-span-2 p-1 ">
                <h3 className="text-sm">Ambulance: <span className="text-red-600">*</span> </h3>
                <input placeholder="62634232423" className=" text-sm  pl-1 w-full bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
            </div>
            <div className="col-span-2 p-1">
                <h3 className="text-sm">Fire: <span className="text-red-600">*</span> </h3>
                <input placeholder="23423432" className=" text-sm  bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
            </div>
            <div className="col-span-2 p-1 ">
                <h3 className="text-sm">Local Hospital: <span className="text-red-600">*</span> </h3>
                <input placeholder="234234324" className=" text-sm  pl-1 w-full bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
            </div>
            <div className="col-span-2 p-1">
                <h3 className="text-sm">Evacuation: <span className="text-red-600">*</span> </h3>
                <input placeholder="234234234" className=" text-sm bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
            </div>
            <div className="col-span-4 p-1">
                <h3 className="text-sm">Tower Rescue procedures to be used: <span className="text-red-600">*</span> </h3>
                <input placeholder="Carlos Garcia" className="pl-1 w-full bg-transparent inputPlaceHolder focus:outline-none    font-semibold  ">

                </input>
            </div>

            {/* job Safety */}

            <h3 class="col-span-4  font-semibold   text-sm  mt-3">1. Job Safety/ Task for Today</h3>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex  ">
                <li class="w-full col-span-2  ">

                    <div class="flex items-center pl-3">
                        <input id="firstAidKit-checkbox-list" type="checkbox" value="" class="w-4 h-4  accent-orange-600   rounded   " />
                        <label for="firstAidKit-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium ">Fist Aid kit on site</label>
                    </div>

                </li>
                <li class="w-full col-span-2  ">

                    <div class="flex items-center pl-3">
                        <input id="rescueBagTower-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="rescueBagTower-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium ">Rescue Bag at Base of Tower</label>
                    </div>

                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="towerErection-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="towerErection-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium ">Tower Erection</label>
                    </div>

                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="other-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="other-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium ">other: <input className="bg-transparent font-poppins text-xs pl-2" placeholder="type here..." /></label>
                    </div>

                </li>
            </ul>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex dark:bg-gray-700  ">

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="elecrical-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="elecrical-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium ">Elecrical</label>
                    </div>
                </li>

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="civilConcrete-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="civilConcrete-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium ">Civil/concrete</label>
                    </div>
                </li>

                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <input id="LineAntennas-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="LineAntennas-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium ">Line and Antennas</label>
                    </div>
                </li>
            </ul>

            {/* RF SIGNAGE AND MPE READING */}

            <div className="col-span-4 p-1 text-sm ">
                <h3>RF Signage & MPE readings </h3>
            </div>
            <ul class="col-span-4 items-center w-full text-sm font-medium   rounded-lg sm:flex ">
                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4  accent-orange-600   rounded   " />
                        <label for="vue-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium ">Blue Notice Sign</label>
                    </div>
                </li>
                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <label for="laravel-checkbox-list" class="w-full py-1 text-xs ">Equiment MPEreading: <input className="bg-transparent font-poppins text-xs pl-1" placeholder="type here..." /></label>
                    </div>
                </li>
                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <label for="laravel-checkbox-list" class="w-full py-1 text-xs ">Elevation MPEreading: <input className="bg-transparent font-poppins  text-xs pl-1" placeholder="type here..." /></label>
                    </div>
                </li>
                <li class="w-full   ">
                    <div class="flex items-center pl-3">
                        <input id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium ">Yellow caution Sign</label>
                    </div>

                </li>
                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <label for="laravel-checkbox-list" class="w-full py-1 text-xs ">Equiment MPEreading: <input className="bg-transparent font-poppins  text-xs pl-1" placeholder="type here..." /></label>
                    </div>
                </li>
                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <label for="laravel-checkbox-list" class="w-full py-1 text-xs ">Elevation MPEreading: <input className="bg-transparent font-poppins  text-xs pl-1" placeholder="type here..." /></label>
                    </div>
                </li>
                <li class="w-full   ">
                    <div class="flex items-center pl-3">
                        <input id="redWarningSign-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="redWarningSign-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium ">red Warning Sign</label>
                    </div>

                </li>
                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <label for="laravel-checkbox-list" class="w-full py-1 text-xs ">Equiment MPEreading: <input className="bg-transparent font-poppins  text-xs pl-1" placeholder="type here..." /></label>
                    </div>
                </li>
                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <label for="laravel-checkbox-list" class="w-full py-1 text-xs ">Elevation MPEreading: <input className="bg-transparent font-poppins  text-xs pl-1" placeholder="type here..." /></label>
                    </div>
                </li>

                <li class="w-full   ">
                    <div class="flex items-center pl-3">
                        <input id="redDangerSign-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="redDangerSign-checkbox-list" class="w-full py-3 ml-2 text-xs font-medium ">Red Danger Sign</label>
                    </div>
                </li>


                {/* Job Tasks */}
                <div className="col-span-4 p-1 text-sm">
                    <h3 className="text-sm">Job/ Tasks (Be Specific) <span className="text-red-600">*</span> </h3>
                    <textarea className="w-full loginbg text-gray-400 h-[200px]  text-xs resize-none p-2 mt-2" />
                </div>
                <div className="col-span-4 p-1 text-sm">
                    <h3 className="text-sm">Job/ Tasks (Be Specific) <span className="text-red-600">*</span> </h3>
                    <textarea className="w-full loginbg text-gray-400 h-[200px]  text-xs  resize-none p-2 mt-2" />
                </div>
                <div className="col-span-4 p-1 text-sm">
                    <h3 className="text-sm">Job/ Tasks (Be Specific) <span className="text-red-600">*</span> </h3>
                    <textarea className="w-full loginbg text-gray-400 h-[200px] text-xs border-orange-500  resize-none p-2 mt-2" />
                </div>



            </ul>
            <div className="col-span-4" onClick={() => { console.log('hi') }}>

                <btn className='col-span-4  bg-blue-gradient text-center rounded-lg mt-2 shadow-orange-600 shadow'> create</btn>
            </div>
            {/* back of the page */}


            <h3 class="col-span-4  font-semibold   text-sm  mt-3">Pysical Hazards</h3>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex  ">
                <li class="w-full col-span-2  ">

                    <div class="flex items-center pl-3">
                        <input id="fallsFromElecations-checkbox-list" type="checkbox" value="" class="w-4 h-4  accent-orange-600   rounded   " />
                        <label for="fallsFromElecations-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Falls from elevations</label>
                    </div>

                </li>
                <li class="w-full col-span-2  ">

                    <div class="flex items-center pl-3">
                        <input id="electricalHazards-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="electricalHazards-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Electrical</label>
                    </div>

                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="slipsTripsOrFalls-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="slipsTripsOrFalls-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Slips, Trips or Falls</label>
                    </div>

                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="otherPhysicalHazards-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="otherPhysicalHazards-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">other: <input className="bg-transparent font-poppins text-xs pl-2" placeholder="type here..." /></label>
                    </div>

                </li>
            </ul>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex dark:bg-gray-700  ">

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="undergroundUtilities-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="undergroundUtilities-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">underground Utilities</label>
                    </div>
                </li>

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="elevationSiteTerrain-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="elevationSiteTerrain-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Elevation / Site terrain</label>
                    </div>
                </li>

                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <input id="vehicleTraffic-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="vehicleTraffic-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Vehicle Traffic</label>
                    </div>
                </li>
            </ul>
            <h3 class="col-span-4  font-semibold  text-sm ">Health Hazards</h3>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex   ">
                <li class="w-full col-span-2  ">

                    <div class="flex items-center pl-3">
                        <input id="heatStress-checkbox-list" type="checkbox" value="" class="w-4 h-4  accent-orange-600   rounded   " />
                        <label for="heatStress-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Heat Stress</label>
                    </div>

                </li>
                <li class="w-full col-span-2  ">

                    <div class="flex items-center pl-3">
                        <input id="highNoise85dBA-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="highNoise85dBA-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">High Noise(.85dBA)</label>
                    </div>

                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="emeAndRF-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="emeAndRF-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">EME / RF</label>
                    </div>

                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="otherHealthHazards-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="otherHealthHazards-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">other: <input className="bg-transparent font-poppins text-xs pl-2" placeholder="type here..." /></label>
                    </div>

                </li>
            </ul>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex dark:bg-gray-700  ">

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="silica Exposure-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="silica Exposure-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Silica Exposure</label>
                    </div>
                </li>

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="coldStress-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="coldStress-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Cold Stress</label>
                    </div>
                </li>

                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <input id="chemicalExposure-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="chemicalExposure-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Chemical Exposure</label>
                    </div>
                </li>
                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <input id="liftingHazards-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="liftingHazards-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Lifiting Hazards</label>
                    </div>
                </li>
            </ul>

            {/* Personal Protective Equipement  */}
            <h3 class="col-span-4  font-semibold   text-sm  mt-3">Personal Protective Equipement/Monitoring Equipement</h3>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex  ">
                <li class="w-full col-span-2  ">

                    <div class="flex items-center pl-3">
                        <input id="safetyGlasses-checkbox-list" type="checkbox" value="" class="w-4 h-4  accent-orange-600   rounded   " />
                        <label for="safetyGlasses-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Safety Glasses</label>
                    </div>

                </li>
                <li class="w-full col-span-2  ">

                    <div class="flex items-center pl-3">
                        <input id="fallProtection-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="fallProtection-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Fall Protection</label>
                    </div>

                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="rfSuits-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="rfSuits-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">RF Suits</label>
                    </div>

                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="rfmonitors-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="rfmonitors-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">RF Monitors <input className="bg-transparent font-poppins text-xs pl-2" placeholder="type here..." /></label>
                    </div>

                </li>
            </ul>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex dark:bg-gray-700  ">

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="hardHat-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="hardHat-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Hard Hat</label>
                    </div>
                </li>

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="hearing-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="hearing-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Hearing</label>
                    </div>
                </li>

                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <input id="gloves-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="gloves-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Gloves</label>
                    </div>
                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="other-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="other-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">other: <input className="bg-transparent font-poppins text-xs pl-2" placeholder="type here..." /></label>
                    </div>

                </li>
            </ul>
            <h3 class="col-span-4  font-semibold   text-sm  mt-3">Inspections <span className=" text-red-600"> * Complete all additional forms required *</span></h3>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex  ">

                <li class="w-full col-span-2  ">

                    <div class="flex items-center pl-3">
                        <input id="tailgateMeeting-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="tailgateMeeting-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Tailgate Meeting</label>
                    </div>

                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="lockoutTagout-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="lockoutTagout-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Lockout / Tagout</label>
                    </div>

                </li>


            </ul>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex dark:bg-gray-700  ">

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="4in1Sign-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="4in1Sign-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">4 in 1 Sign</label>
                    </div>
                </li>

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="excavationLog-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="excavationLog-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Excavation Log</label>
                    </div>
                </li>



            </ul>

            <div class="flex items-center pl-3 col-span-4">
                <input id="other-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                <label for="other-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Permit System (Hoisting Personnel, Confined Space, Excavation, etc.) </label>
            </div>

            <h3 class="col-span-4  font-semibold   text-sm  mt-3">Safety Program / Training</h3>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex  ">
                <li class="w-full col-span-2  ">

                    <div class="flex items-center pl-3">
                        <input id="firstAidKit-checkbox-list" type="checkbox" value="" class="w-4 h-4  accent-orange-600   rounded   " />
                        <label for="firstAidKit-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Fist Aid kit on site</label>
                    </div>

                </li>
                <li class="w-full col-span-2  ">

                    <div class="flex items-center pl-3">
                        <input id="rescueBagTower-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="rescueBagTower-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Rescue Bag at Base of Tower</label>
                    </div>

                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="towerErection-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="towerErection-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Tower Erection</label>
                    </div>

                </li>
                <li class="w-full  ">

                    <div class="flex items-center pl-3">
                        <input id="other-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="other-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">other: <input className="bg-transparent font-poppins text-xs pl-2" placeholder="type here..." /></label>
                    </div>

                </li>
            </ul>
            <ul class="col-span-2 items-center w-full text-sm font-medium   rounded-lg sm:flex dark:bg-gray-700  ">

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="elecrical-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="elecrical-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Elecrical</label>
                    </div>
                </li>

                <li class="w-full  ">
                    <div class="flex items-center pl-3">
                        <input id="civilConcrete-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="civilConcrete-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Civil/concrete</label>
                    </div>
                </li>

                <li class="w-full ">
                    <div class="flex items-center pl-3">
                        <input id="LineAntennas-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600   rounded   " />
                        <label for="LineAntennas-checkbox-list" class="w-full py-1 ml-2 text-xs font-medium ">Line and Antennas</label>
                    </div>
                </li>
            </ul>


        </section>
    )
}


export default QuestionsForJsa