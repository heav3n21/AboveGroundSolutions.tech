import React from "react";
import{FaGithub,FaTwitter}from "react-icons/fa";

const Footer = ()=>{
    return(
        <div className="b max-w1240px] mx-auto py-4 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
        <div>
        <h1 className="w-full text-3xl font-bold primary--text--color"><span className="text-gradient"> A</span>bove <span className="text-gradient">Ground S</span>lutions</h1>
<p className="pt-4"> A coding practice website for algo enthusiasts. Sharpen skills, solve challenges, and grow together. Join our community and level up your algorithmic expertise.  </p>
<div className="flex text-[#103047] justify-around md:w-[75%] mt-6">
<FaGithub size={30}/>
<FaTwitter size={30}/>
</div>
        </div>
    </div>
    )
}


export default Footer