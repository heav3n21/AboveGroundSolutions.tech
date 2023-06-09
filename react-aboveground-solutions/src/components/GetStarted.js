import React from "react";
import styles from '../style'
import{arrowUp} from '../assets'
const GetStarted = ()=>{
    return(
        <div className={`${styles.flexCenter}  w-[140px] h-[140px] rounded-full bg-[#8C7CA3] shadow-xl p-[2px] cursor-pointer `}>
            <div className={`${styles.flexCenter} flex-col  w-[100%] h-[1005] rounded-full` }>
                <div className={`${styles.flexStart} flex-row font-bold`}>
                    <p className="font-poppins font-medium text-[18px] leading-[23px] mr-2">
                        <span className="text-black font-bold  " > get</span>
                    </p>
                        <img src={arrowUp} className="object-contain w-[23px] h-[23px] " alt="arrow"></img>
                </div>
                <p className="font-poppins font-bold text-[18px] leading-[23px]">
                        <span className="text-black" > Started</span>
                       
                    </p>
                
            </div>
            </div>
    )
}


export default GetStarted