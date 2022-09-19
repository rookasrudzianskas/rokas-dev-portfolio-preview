import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

const WorkExperience = ({}: Props) => {
    return (
        <motion.div
            className="flex h-screen flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

            <div>

            </div>
        </motion.div>
    );
};

export default WorkExperience;
// by Rokas with ❤️
