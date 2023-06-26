import React from "react";
import Button from './Button'
import styles from "../style";



const CTA = () => {
    return (
        <section className={``}>
            <div className={`${styles.flexCenter} bg-primary ${styles.marginY} ${styles.padding}  sm:flex-row flex-col shadow-2xl  rounded-lg `}>
                <div className="flex-1 flex flex-col">
                    <h2 className={styles.heading2}> JSA CREATOR 
                    </h2>
                    <p className={`${styles.paragraph} mb-5 max-w-[470PX] mt-5`}>
                        try out our new jsa creator
                        asdfasdfasdfasdfasdfsadfasdfsadf
                    </p>
                    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                        <Button />
                    </div>

                </div>
            </div>
        </section>
    )
}


export default CTA