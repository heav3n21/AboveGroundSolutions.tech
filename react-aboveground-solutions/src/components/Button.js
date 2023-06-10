import React from "react";



const Button = ({styles})=>{

    return(
      <button type="button" className={`rounded-md py-4 px-6 bg-blue-gradient  text-[18px] outline-none font-poppins font-bold shadow-lg  shadow-black text-primary ${styles}`}>
Get Started
      </button>
    )
}

export default Button