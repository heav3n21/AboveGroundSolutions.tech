import React from "react";
import styles from "../style"
import { discount, robot } from "../assets"
import GetStarted from "./GetStarted";

const Hero = () => {
    return (
        <section id="home " className={`h-[100vh] flex md:flex-row flex-col ${styles.paddingY}`}>
            <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px16 px-6`}>
                <div className="flex flex-row justify-between items-center w-full mb-2 ">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[80px] leading-[47px] ">
                        ABOVE  {" "}
                        <span className="text-[#FF5D00] font-bold">GROUND<br className="sm:block hidden" />
                        </span> {" "}
                        SOLUTIONS.      
                                      </h1>
                                      <div className="ss:flex hidden md:mr-4 mr-0 "> 
                                      <GetStarted/>
                                      </div>
                </div>
                <div className="l sm:mt-16 flex  w-fit items-center py-[6px] px-4 border shadow-xl rounded-[10px] mb-2 ">
                    <img src={discount} alt="discount" className="w-[32px] h-[32px] " />
                    <span className=""> take a look at our jsa creator application!</span>
                    

                </div>


                <h1 className=" font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[55px] w-full "> Payment method</h1>
                <p className={`${styles.paragraph} max-w-[470px] text-sm mt-5 leading-[20px]`}>"Welcome to <span className=" text-[#FF5D00] font-bold">Above Ground Solutions</span>, your trusted telecom partner. We specialize in providing reliable cell tower solutions for seamless connectivity. Our expert team
                         designs, installs, and maintains cutting-edge infrastructure, keeping you connected wherever you are. With a customer-focused approach and a commitment to 
                         staying ahead of the curve, we empower communication networks for a connected future."</p>
            </div>
            <div>
                {/* <img src={robot} alt="billing" className="w-[100%] h-[1005] relative z-5 "/> */}
            </div>

        </section>
    )
}


export default Hero