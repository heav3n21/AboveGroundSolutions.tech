import React from "react";
import { features } from "../constants";
import styles, { layout } from "../style";
import Button from './Button'
import Billing from "./Billing";
import CTA from "./CTA";

const FeatureCard =({icon,title,content,index}) =>(
    <div className={`flex flex-row p-6 rounded-[20px]   ${index !== features.length -1 ? "mb-6" :"mb-0" } feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full  ${styles.flexCenter}  bg-[#000514] `}>
            <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain "/>
        </div>
        <div className=" flex-1 flex flex-col ml-3">
            <h4 className=" font-poppins text-[18px] leading-[23px] font-semibold">
                {title}
            </h4>
            <p className=" text-dimWhite font-poppins text-[16px] leading-[23px] font-normal">
                {content}
            </p>

        </div>
    </div>

)
const Business = ()=>{

    return(
        <>

      <section id="features" className={layout.section}> 
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}> Welcome to Above Ground solutions, <br className=" sm:block hidden"/></h2>
<p className={`${styles.paragraph} max-w-[470px mt-5]`}> We are a company for this aafadflj fadfa ffaf afdadfadf adfa sdfadf adsf sdfasdfasdfasdfassdfa dfadf adf adfa dfadf adf adf</p>
     <Button styles ="mt-10 hover:motion-safe:animate-pulse "/>
      </div>
      <div className={`${layout.sectionImg} flex-col`}>
{features.map((feature, index)=>(
    <FeatureCard key={feature.id} {...feature} index={index}/>
    ))}
</div>
      </section>
<Billing/>
<CTA/>
    </>
    )
}


export default Business