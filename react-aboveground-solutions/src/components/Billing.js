import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";
const Billing = () => {
    return (
        <section id="product" className={`${layout.sectionReverse}  ${styles.paddingX} ${styles.flexStart}--test`}>
            <div className={layout.sectionImgReverse}>

                <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full  " />

                <div className={`${layout.sectionInfo}`}>
                    <h2 className={styles.heading2}>
                        Why <br className="sm:block hidden" />Above Ground Solutions?

                    </h2>
                    <p className={` max-w-[470px]  mt-5 text-gradient font-poppins font-semibold`}>
                        asdfasdfsadfsdfsadfafd  adffasdfadsf dsafadsfasdf dasf adf asdfsd dsaf asdfasdfadsf
                        adfasdf adsf asd fads fas  asdf adsf adsf asd fas f asf sdfadsfadsdfa  sadfadf asdf asd
                        asdfasdfasfasdf asd fasd ads f das fasdf
                    </p>

                    <div className=" flex flex-row sm:mt-10  mt-6 flex-wrap"> </div>
                    <img src={apple} alt="apple" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer" />
                    <img src={google} alt="google" className="w-[128px] h-[42px] object-contain  cursor-pointer" />
                </div>

            </div>

        </section>

    )

}


export default Billing