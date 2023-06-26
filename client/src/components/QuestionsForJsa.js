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
            <div class="flex col-span-2 items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input id="bordered-checkbox-1" type="checkbox" value="" name=" bordered-checkbox" class="accent-orange-600 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-checkbox-1" class="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Default radio</label>
            </div>
            <div class="flex col-span-2 items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                <input checked id="bordered-checkbox-2" type="checkbox" value="" name="bordered-checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label for="bordered-checkbox-2" class="w-full py-4 accent-pink-500 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Checked state</label>
            </div>

            <h3 class="mb-4 font-semibold text-gray-900 dark:text-white">Technology</h3>
            <ul class="w-48 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="vue-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="vue-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Vue JS</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="react-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="react-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">React</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="angular-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="angular-checkbox" class="w-full py-3 ml-2 text-sm  text-gray-900 dark:text-gray-300">Rescue Bag at Base of Tower</label>
                    </div>
                </li>
                <li class="w-full border-b border-gray-200 rounded-t-lg dark:border-gray-600">
                    <div class="flex items-center pl-3">
                        <input id="laravel-checkbox" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                        <label for="laravel-checkbox" class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Laravel</label>
                    </div>
                </li>
            </ul>





            <button id="dropdownSearchButton" data-dropdown-toggle="dropdownSearch" class="inline-flex items-center col-span-4 px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown search <svg class="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>


            <div id="dropdownSearch" class="z-10  bg-white rounded-lg shadow w-60 dark:bg-gray-700">
                <div class="p-3">
                    <label for="input-group-search" class="sr-only">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                        </div>
                        <input type="text" id="input-group-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search user" />
                    </div>
                </div>
                <ul class="h-48 px-3 pb-3 overflow-y-auto text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownSearchButton">
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-11" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="checkbox-item-11" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Bonnie Green</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input checked id="checkbox-item-12" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="checkbox-item-12" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Jese Leos</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-13" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="checkbox-item-13" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Michael Gough</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-14" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="checkbox-item-14" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Robert Wall</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-15" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="checkbox-item-15" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Joseph Mcfall</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-16" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="checkbox-item-16" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Leslie Livingston</label>
                        </div>
                    </li>
                    <li>
                        <div class="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                            <input id="checkbox-item-17" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
                            <label for="checkbox-item-17" class="w-full ml-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300">Roberta Casas</label>
                        </div>
                    </li>
                </ul>
                <a href="#" class="flex items-center p-3 text-sm font-medium text-red-600 border-t border-gray-200 rounded-b-lg bg-gray-50 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-red-500 hover:underline">
                    <svg class="w-5 h-5 mr-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 6a3 3 0 11-6 0 3 3 0 016 0zM14 17a6 6 0 00-12 0h12zM13 8a1 1 0 100 2h4a1 1 0 100-2h-4z"></path></svg>
                    Delete user
                </a>
            </div>

        </section>
    )
}


export default QuestionsForJsa