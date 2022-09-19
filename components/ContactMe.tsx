import { motion } from 'framer-motion';
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";

type Props = {}

const ContactMe = ({}: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1.5,
            }}
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact Me</h3>

            <div className="flex flex-col space-y-10 justify-center items-center">
                <h4 className="text-4xl font-semibold text-center max-w-sm">I have got just what you need. <span className="decoration-[#F7Ab0A]/50 underline">
                    Let's talk.
                </span></h4>
                <div className="space-y-10">
                    <div className="flex items-center space-x-5">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">+1706430376</p>
                    </div>

                    <div className="flex items-center space-x-5">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">byrookas@gmail.com</p>
                    </div>

                    <div className="flex items-center space-x-5">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="text-2xl">The That Street near This Street</p>
                    </div>

                    <form action="" className="flex flex-col space-y-2 w-fit mx-auto">
                        <div className="flex space-x-2">
                            <input className="contactInfo" type="text"/>
                            <input className="contactInfo" type="text"/>
                        </div>
                        <input className="contactInfo" type="text"/>
                        <textarea className="contactInfo"/>
                        <button>Submit</button>
                    </form>

                </div>
            </div>
        </motion.div>
    );
};

export default ContactMe;
// by Rokas with ❤️
