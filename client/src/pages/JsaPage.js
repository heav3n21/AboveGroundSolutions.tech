import React, { useState } from "react";
import styles from "../style";
import { BsFolder, BsFolderPlus, BsPersonCircle } from 'react-icons/bs'
import SearchOldJsa from "../components/SearchOldJsa";
import QuestionsForJsa from "../components/QuestionsForJsa";
import { AnimatePresence, motion } from "framer-motion";


const JsaPage = () => {
    const [newOrRecents, setNewOrRecents] = useState(true)


    const toggleNewOrRecents = (setcomponent) => {
        if (setcomponent === `false`) {
            setNewOrRecents(false)

        }
        if (setcomponent === 'true') {
            setNewOrRecents(true)

        }
    }
    return (
        <section className={`  ${styles.paddingX} ${styles.flexStart}`}>
            <div className="w-full bg-primary h-[] mt-5">
                <section className="  ">
                    {/*  this is the div for username and pfp */}
                    <div className="grid grid-cols-3 m-5">

                        <h1 className="font-poppins font-bold text-2xl col-span-2">
                            matthew Garcia
                        </h1 >
                        <div className="justify-self-end ">
                            <BsPersonCircle size={60} />
                        </div>
                    </div>
                    {/* the choices  */}
                    <div className="  ">
                        <div onClick={() => { toggleNewOrRecents(`true`) }} className="mt-5  loginbg py-5 px-4 shadow-sm rounded-lg shadow-black grid grid-cols-2 ">
                            <div className="flex flex-col bg">
                                <h1 className="font-poppins font-bold">
                                    RECENTS</h1>
                                <p className="text-sm font-poppins font-extralight">
                                    Look at your recent jsa's
                                </p>
                            </div>
                            <div className="justify-self-end hover:animate-pulse">
                                <BsFolder size={49} className=" " />
                            </div>

                        </div>
                        <div onClick={() => { toggleNewOrRecents(`false`) }} className="mt-5  loginbg py-5 px-4 shadow-sm rounded-lg shadow-black grid grid-cols-2 ">
                            <div className="flex flex-col">
                                <h1 className="font-poppins font-bold">
                                    NEW JSA</h1>
                                <p className="text-sm font-poppins font-extralight">
                                    Create a new jsa
                                </p>
                            </div>
                            <div className="justify-self-end hover:animate-pulse">
                                <BsFolderPlus size={49} className=" " />
                            </div>

                        </div>
                        <AnimatePresence key={setNewOrRecents}>

                            {newOrRecents ? (
                                <motion.div initial={{ opacity: 0 }}  transition={{ duration: 2.5 }} animate={{ opacity: 10 }} exit={{ opacity: 10 }} className="sm:w-1/2 px-8  rounded-md p-5">
                                    <SearchOldJsa />

                                </motion.div>
                            ) : (
                                <motion.div initial={{ opacity: 0 }} transition={{ duration: 2.5 }} animate={{ opacity: 10 }} exit={{ opacity: 10 }} className="sm:w-1/2 px-8  rounded-md p-5">

                                    <QuestionsForJsa />
                                </motion.div>
                            )
                            }

                        </AnimatePresence>
                    </div>
                </section>

            </div>


        </section>
    )
}


export default JsaPage