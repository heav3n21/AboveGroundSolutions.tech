import React from "react";

import logo from "../assets/logo3.png"


const QuestionsForJsa = () => {


    return (
        <section className="loginbg mb-5 grid grid-cols-4 border-b border-none font-poppins text-center mt-5 ">
            <div className="col-span-2 p-2 ">
                <h3>Job Name: <span className="text-red-600">*</span> </h3>
                <input placeholder="CLV32423" className=" text-center w-full bg-transparent focus:outline-none inputPlaceHolder font-semibold text-[23px] ">

                </input>
            </div>
            <div className="col-span-2 p-2">
                <h3>Job #: <span className="text-red-600">*</span> </h3>
                <input placeholder="donut spot" className="bg-transparent focus:outline-none inputPlaceHolder font-semibold text-[23px] ">

                </input>
            </div>
            <div className="col-span-4 p-2">
                <h3>Physical address: <span className="text-red-600">*</span> </h3>
                <input placeholder="text-center w-full 14224 mossberg st." className="bg-transparent focus:outline-none inputPlaceHolder font-semibold text-[23px] ">

                </input>
            </div>
            <div className="col-span-4 p-2">
                <h3>Supervisor: <span className="text-red-600">*</span> </h3>
                <input placeholder="Carlos Garcia" className="text-center w-full bg-transparent inputPlaceHolder focus:outline-none    font-semibold text-[23px] ">

                </input>
            </div>
            <div className="col-span-4 p-2">
                <h3>Supervisor: <span className="text-red-600">*</span> </h3>
                <input placeholder="Carlos Garcia" className="text-center w-full bg-transparent inputPlaceHolder focus:outline-none    font-semibold text-[23px] ">

                </input>

            </div>
            <div className="grid col-span-4">

                <h3 class=" text-lg font-poppins font-semibold  dark:text-white">Choose Crew: <span className="text-red-600">*</span></h3>
                <ul class="grid w-full gap-6 grid-cols-2 px-2">
                    <li>
                        <input type="checkbox" id="react-option" value="" class="hidden peer " required="" />
                        <label for="react-option" class="inline-flex items-center  w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                                <img src={logo} className="h-10 m-2 " />
                                <h1 class="w-full text-lg font-bold  text-black leading-[20px]">Matthew Garcia</h1>
                                <p class="w-full text-sm font-poppins font-semibold"> Company: AboveGround</p>
                            </div>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="dsf-option" value="" class="hidden peer " required="" />
                        <label for="dsf-option" class="inline-flex items-center  w-full p-3 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                                <img src={logo} className="h-10 m-2 " />
                                <h1 class="w-full text-lg font-bold  text-black leading-[20px]">Matthew Garcia</h1>
                                <p class="w-full text-sm font-poppins font-semibold"> Company: AboveGround</p>
                            </div>
                        </label>
                    </li>

                    <li>
                        <input type="checkbox" id="flowbite-option" value="" class="hidden peer" />
                        <label for="flowbite-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Vue Js</div>
                                <div class="w-full text-sm">Company: Above Ground.</div>
                            </div>
                        </label>
                    </li>

                    
                    <li>
                        <input type="checkbox" id="angular-option" value="" class="hidden peer" />
                        <label for="angular-option" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border-2 border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 peer-checked:border-blue-600 hover:text-gray-600 dark:peer-checked:text-gray-300 peer-checked:text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <div class="block">
                                <div class="w-full text-lg font-semibold">Angular</div>
                                <div class="w-full text-sm">Company: AboveGround Solutions.</div>
                            </div>
                        </label>
                    </li>
                </ul>
            </div>
            <div className="col-span-4 p-2">
                <h3>Supervisor: <span className="text-red-600">*</span> </h3>
                <input placeholder="Carlos Garcia" className="text-center w-full bg-transparent inputPlaceHolder focus:outline-none    font-semibold text-[23px] ">

                </input>

            </div>
            <div className="col-span-2 p-2 ">
                <h3>Job Name: <span className="text-red-600">*</span> </h3>
                <input placeholder="CLV32423" className=" text-sm  text-center w-full bg-transparent focus:outline-none inputPlaceHolder font-semibold text-[23px] ">

                </input>
            </div>
            <div className="col-span-2 p-2">
                <h3 className="text-[14px] leading-3">Are 911 systems work with cell phones?: <span className="text-red-600">*</span> </h3>
                <input type="checkbox" placeholder="donut spot" className=" text-sm  bg-transparent focus:outline-none inputPlaceHolder font-semibold text-[23px] ">

                </input>
            </div>
            <div className="col-span-2 p-2 ">
                <h3>Ambulance: <span className="text-red-600">*</span> </h3>
                <input placeholder="62634232423" className=" text-sm  text-center w-full bg-transparent focus:outline-none inputPlaceHolder font-semibold text-[23px] ">

                </input>
            </div>
            <div className="col-span-2 p-2">
                <h3>Fire: <span className="text-red-600">*</span> </h3>
                <input placeholder="23423432" className=" text-sm  bg-transparent focus:outline-none inputPlaceHolder font-semibold text-[23px] ">

                </input>
            </div>
            <div className="col-span-2 p-2 ">
                <h3>Local Hospital: <span className="text-red-600">*</span> </h3>
                <input placeholder="234234324" className=" text-sm  text-center w-full bg-transparent focus:outline-none inputPlaceHolder font-semibold text-[23px] ">

                </input>
            </div>
            <div className="col-span-2 p-2">
                <h3>Evacuation: <span className="text-red-600">*</span> </h3>
                <input placeholder="234234234" className=" text-sm bg-transparent focus:outline-none inputPlaceHolder font-semibold text-[23px] ">

                </input>
            </div>
            <div className="col-span-4 p-2">
                <h3>Tower Rescue procedures to be used: <span className="text-red-600">*</span> </h3>
                <input placeholder="Carlos Garcia" className="text-center w-full bg-transparent inputPlaceHolder focus:outline-none    font-semibold text-[23px] ">

                </input>
            </div>
        </section>
    )
}


export default QuestionsForJsa