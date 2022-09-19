import { motion } from 'framer-motion';
import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid";
import {SubmitHandler, useForm} from 'react-hook-form';
import {Input} from "colord/types";

type Props = {}

type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
}

const ContactMe = ({}: Props) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit: SubmitHandler<Inputs> = formData => console.log(formData);

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

            <div className="flex flex-col space-y-10 justify-center items-center  pt-24">
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

                    {/* @ts-ignore */}
                    <form onSubmit={handleSubmit(onSubmit)} action="" className="flex flex-col space-y-2 w-fit mx-auto">
                        <div className="flex space-x-2">
                            <input {...register("name")} placeholder={"Name"} className="contactInfo" type="text"/>
                            <input {...register("email")} placeholder={"Email"} className="contactInfo" type="text"/>
                        </div>
                        <input {...register("subject")} placeholder={"Subject"} className="contactInfo" type="text"/>
                        <textarea {...register("message")} placeholder={"Message"} className="contactInfo"/>
                        <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg">Submit</button>
                    </form>

                </div>
            </div>
        </motion.div>
    );
};

export default ContactMe;
// by Rokas with ❤️
