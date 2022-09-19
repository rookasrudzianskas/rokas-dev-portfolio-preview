import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

const Projects = ({}: Props) => {
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
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

            <div className="w-full absolute top-[30%] bg-[#F7AB04]/10 left-0 h-[500px] -skew-y-12"/>
        </motion.div>
    );
};

export default Projects;
// by Rokas with ❤️
