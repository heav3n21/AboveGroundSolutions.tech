import React from "react";

import logo from "../assets/logo3.png"


const QuestionsForJsa = () => {


    return (
        <section className="mb-5 grid grid-cols-4 border-b border-none font-poppins mt-5 ">
            <div className="col-span-2 p-1 ">
                <h3 className="text-sm">Job Name: <span className="text-red-600">*</span> </h3>
                <input placeholder="CLV32423" className=" pl-1 w-full bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
            </div>
            <div className="col-span-2 p-1">
                <h3  className="text-sm">Job #: <span className="text-red-600">*</span> </h3>
                <input placeholder="donut spot" className="bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
            </div>
            <div className="col-span-4 p-1">
                <h3 className="text-sm">Physical address: <span className="text-red-600">*</span> </h3>
                <input placeholder=" 14224 mossberg st." className="bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
            </div>
            <div className="col-span-4 p-1">
                <h3 className="text-sm">Supervisor: <span className="text-red-600">*</span> </h3>
                <input placeholder="Carlos Garcia" className="pl-1 w-full bg-transparent inputPlaceHolder focus:outline-none    font-semibold  ">

                </input>
            </div>
            <div className="col-span-4 p-1">
                <h3 className="text-sm">Supervisor: <span className="text-red-600">*</span> </h3>
                <input placeholder="Carlos Garcia" className="pl-1 w-full bg-transparent inputPlaceHolder focus:outline-none    font-semibold  ">

                </input>

            </div>
            <h3 class=" col-span-4 text-sm font-poppins   dark:text-white">Choose Crew: <span className="text-red-600">*</span></h3>

            <div class="flex col-span-2 pl-1">
                <div class="flex items-center h-5">
                    <input id="helper-checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="accent-orange-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div class="ml-2 text-sm">
                    <label for="helper-checkbox" class="font-medium text-xs text-white dark:text-gray-300">Matthew Garcia</label>
                    <p id="helper-checkbox-text" class="text-[10px] font-normal text-gray-500 dark:text-gray-300"> Company: AboveGround</p>
                </div>
            </div>
            <div class="flex col-span-2">
                <div class="flex items-center h-5">
                    <input id="checkbox" aria-describedby="helper-checkbox-text" type="checkbox" value="" class="w-4 h-4 accent-orange-600 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                </div>
                <div class="ml-2 text-sm">
                    <label for="checkbox" class="font-medium text-xs text-white dark:text-gray-300">Matthew Garcia</label>
                    <p id="helper-checkbox-text" class="text-[10px] font-normal text-gray-500 dark:text-gray-300"> Company: AboveGround</p>
                </div>
            </div>

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
            <div className="col-span-2 p-1">
                <h3 className="text-[12px] leading-3">Are 911 systems work with cell phones?: <span className="text-red-600">*</span> </h3>
                <input type="checkbox" placeholder="donut spot" className=" text-sm accent-orange-600  bg-transparent focus:outline-none inputPlaceHolder font-semibold  ">

                </input>
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
            <h3 class="col-span-4  font-semibold  dark:text-white text-sm">1. Job Safety/ Task for Today</h3>
            <ul class="col-span-4 items-center w-full text-sm font-medium   rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="vue-checkbox-list" type="checkbox" value="" class="w-4 h-4 text-blue-600 accent-orange-600  border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="vue-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium  dark:text-gray-300">Fist Aid kit on site</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="react-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="react-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium  dark:text-gray-300">Rescue Bag at Base of Tower</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium  dark:text-gray-300">Tower Erection</label>
                    </div>

                </li>

                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium  dark:text-gray-300">Elecrical</label>
                    </div>
                </li>

                <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="angular-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="angular-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium  dark:text-gray-300">Civil/concrete</label>
                    </div>
                </li>

                <li class="w-full dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="laravel-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium  dark:text-gray-300">Line and Antennas</label>
                    </div>
                </li>
                <li class="w-full dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="laravel-checkbox-list" type="checkbox" value="" class="w-4 h-4 accent-orange-600  text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="laravel-checkbox-list" class="w-full py-3 ml-2 text-sm font-medium  dark:text-gray-300">other: <input className="bg-transparent font-poppins border-b text-xs pl-1" placeholder="type here..." /></label>
                    </div>
                </li>
                

            </ul>
            <div className="col-span-4 p-1">
                <h3>RF Signage & MPE readings </h3>
                <input placeholder="other" className="pl-1 w-full bg-transparent inputPlaceHolder focus:outline-none    font-semibold  ">

                </input>

            </div>










        </section>
    )
}


export default QuestionsForJsa