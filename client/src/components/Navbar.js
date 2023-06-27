import React, { useState } from "react";
import { close, logo, menu } from '../assets';

import { navLinks } from "../constants";
import { Link } from "react-router-dom";


const Navbar = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <nav className="   w-full py-3 sm:py-5 flex justify-between object-fill items-center navbar  " >

            <img src={logo} alt="hoobank" className="w-[134px] animate-pulse h-[52px] " ></img><p className="text-start flex-col ml-[-59px]  text-2xl flex font-extrabold sm:text-2xl">AGS</p>
            <ul className="list-none sm:flex hidden justify-end items-center flex-1">
            <Link to={`/`}  className={`font-poppins  font-normal cursor-pointer text-[16px] mr-10  `}>Company</Link>

                <Link to={`/homepage`}  className={`font-poppins  font-normal cursor-pointer text-[16px] mr-10  `}>Homepage</Link>
                <Link to={`/homepage`}  className={`font-poppins  font-normal cursor-pointer text-[16px] mr-10  `}>JsaCreator</Link>
                <Link to={`/Login`}  className={`font-poppins  font-normal cursor-pointer text-[16px] mr-0  `}>Login</Link>

            </ul>
            <div className=" sm:hidden flex flex-1 justify-end items-center">
                <img src={toggle ? close : menu}
                    alt="menu"
                    className="w-[28px] h-[28px] object-contain "
                    onClick={() => setToggle((prev) => !prev)}
                />
                <div className={`${toggle ? 'felx ' : 'hidden'} p-6 shadow-2xl  bg-primary border-b-3  absolute top-20 right-0 shadow-black h-fit w-[50%]  rounded-xl sidebar `}>
                    <ul className="list-none flex flex-col  justify-end items-center flex-1">
                    <Link to={`/`}  className={`font-poppins  font-normal cursor-pointer text-[16px] mb-10  `}>Company</Link>

                    <Link to={`/homepage`}  className={`font-poppins  font-normal cursor-pointer text-[16px] mb-10  `}>Homepage</Link>
                <Link to={`/homepage`}  className={`font-poppins  font-normal cursor-pointer text-[16px] mb-10  `}>JsaCreator</Link>
                <Link to={`/Login`}  className={`font-poppins  font-normal cursor-pointer text-[16px] mb-0  `}>Login</Link>

                    </ul>

                </div>
            </div>
        </nav>
    )
}
export default Navbar