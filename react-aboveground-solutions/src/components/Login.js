import React, { useState } from "react";
import styles from "../style";
import { AnimatePresence, motion } from "framer-motion";
import 'react-toastify/dist/ReactToastify.css';

import pho from "../../src/assets/logo3.png"

const Login = () => {
    const [showModel, setShowModel] = useState(true);
    const [userFormData, setUserFormData] = useState({email:'', passwod:'', username:''});
    const[login, {error}] = useMutation(LOGIN_USER);
    const[addUser, {loading}] = useMutation(ADD_USER);
    const [showAlert, setShowAlert] = useState(false);

    const handleInputChange = (e) =>{
        const {name,value} = e.target;
        setUserFormData({...userFormData,[name]:value})
    }

    const handleLoginSubmit = async (event) =>{
        event.preventDefault();
        const notify = (message) =>{
            toast.error(message)
        }
        if(userFormData,email === '' || userFormData.passwod === ''){
            notify('cannot leave form boxes blank');
            return
        }
        const form = event.currentTarget;
        if(form.CheckValidity() === true){
            event.preventDefault();
            event.stopPropagation();

        }
        try {
            const {data} = await login({
                variables:{...userFormData}
            })
        } catch (error) {
            console.error(error);
            notify('email or password is incorrect')
        }
        setUserFormData({email:'', passwod:''});
    }
    const handleFormSubmit = async (event) => {
        event.preventDefault();
    //firebase create account
    const notify = (message)=>{
        toast.error(message)
    }
    if (userFormData.email ==="" || userFormData.password === "" || userFormData.username === ""){
        notify("cannot leave form boxes blank");
        return
    }
    
    // check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
        
        event.stopPropagation();
    }
    // setValidated(true);
    
    try {
        const { data } = await addUser(
            {
                variables: userFormData,
            }
            );
            Auth.login(data.addUser.token); 
            Auth.login(data.addUser.token);
        } catch (err) {
            console.error(err);
            //   setShowAlert(true);
            notify('email or username is taken')
        }
        setUserFormData({
            username: '',
            email: '',
            password: '',
        });
    };  




    return (
        <section className={`bg-primary herobg h-[100vh] ${styles.paddingX}  ${styles.flexStart} `}>
            <section className={` ${styles.boxWidth}`}>
                <AnimatePresence key={showModel}>
                    <section className="mt-24 min-h-full   flex items-center justify-center text-white mx-5 mb-12">
                        <div className="bg--container--black flex rounded-2xl btn--homepage--chat max-w-3xl p-5 items-center" >


                            {showModel ? (
                                <>
                                <div className="flex shadow-2xl shadow-[black] loginbg items-center p p-3 rounded-lg">

                                    <motion.div initial={{ opacity: 0 }} transition={{}} animate={{ opacity: 10 }} exit={{ opacity: 10 }} className="sm:w-1/2 px-8  rounded-md p-5">
                                        <h2 className="text-[#FF5D00] font-bold text-2xl">Login</h2>
                                        <p className="  text-sm mt-4"> Log in seamlessly if you already have an account.</p>
                                        <form className="flex flex-col gap-4" onSubmit={handleLoginSubmit} >
                                            <input onChange={handleInputChange} className="text-[black] p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="email"></input>
                                            <div className="">
                                                <input onChange={handleInputChange} className=" text-[black] w-full p-2 rounded-xl border" type="password" name="password" placeholder="password"></input>
                                            </div>
                                            <motion.button whileHover={{ sclae: 1.3, textShadow: '0px 0px 8px rgb(235,255,255)', boxShadow: '0px 0px 8px rgb(255,255,255)' }} className="mt-2 font-semibold bg-[#394760] btn--hover--cyan rounded-xl py-2"> Login</motion.button>

                                        </form>
                                        <div className="mt-7 grid grid-cols-3 items-center  ">
                                            <hr />
                                            <p className="text-center">OR</p>
                                            <hr />
                                        </div>
                                        <button onClick={() => setShowModel(false)} className="border border-[#FF5D00] rounded-xl py-2 w-full font-semibold mt-3 btn--hover--pink"> Sign up</button>
                                    </motion.div>
                                    <motion.div initial={{ opacity: 0 }} transition={{}} animate={{ opacity: 10 }} exit={{ opacity: 10 }} className="w-1/2 sm:block hidden">
                                        <img className="rounded-2xl h-[160px]  shadow-inner" src={pho} />
                                    </motion.div>
                                </div>
                                </>) : (
                                <>
                                <div className="flex shadow-2xl shadow-[black] loginbg items-center p p-3 rounded-lg"> 

                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="sm:w-1/2 px-8 ">
                                        <h2 className="text-[#FF5D00] font-bold text-2xl">Sign Up</h2>
                                        <p className="  text-sm mt-4"> Join effortlessly and unlock exciting opportunities by signing up today!</p>
                                        <form className="flex flex-col gap-4 " onSubmit={handleFormSubmit} >
                                            <input onChange={handleInputChange} className="text-[black] p-2 mt-8 rounded-xl border" type="username" name="username" placeholder="username"></input>
                                            <input onChange={handleInputChange} className="text-[black] p-2  rounded-xl border" type="email" name="signemail" placeholder="email"></input>
                                            <div>
                                                <input onChange={handleInputChange} className=" text-[black] w-full p-2 rounded-xl border" type="password" name="password" placeholder="password"></input>
                                            </div>
                                            <motion.button whileHover={{ sclae: 1.3, textShadow: '0px 0px 8px rgb(235,255,255)', boxShadow: '0px 0px 8px rgb(255,255,255)' }} className="mt-2 font-semibold bg-[#FF5D00] btn--hover--cyan rounded-xl py-2"> Sign Up</motion.button>

                                        </form>
                                        <div className="mt-7 grid grid-cols-3 items-center  ">
                                            <hr />
                                            <p className="text-center">OR</p>
                                            <hr />
                                        </div>
                                        <button onClick={() => { setShowModel(true) }} className="border border-[#394760] rounded-xl py-2 w-full font-semibold mt-3 btn--hover--pink"> Login</button>
                                    </motion.div >
                                    <div className="w-1/2 sm:block hidden h-full Login--gif">
                                        <img className="rounded-2xl h-[160px]  shadow-inner" src={pho} />
                                    </div>
                                </div>
                                </>
                            )
                            }
                        </div>


                    </section>
                </AnimatePresence>

            </section>



        </section>
    )
}


export default Login