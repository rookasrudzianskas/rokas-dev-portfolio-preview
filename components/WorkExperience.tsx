import { motion } from 'framer-motion';
import React from 'react';
import ExperienceCard from "./ExperienceCard";
import {Experience} from "../typings";

type Props = {
    experiences: Experience[];
}

// @ts-ignore
const WorkExperience = ({experience}: Props) => {
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
            className="flex h-screen flex-col relative overflow-hidden text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Experience</h3>

            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-mandatory mt-32  scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {/* @ts-ignore */}
                {experience?.map((experience, index) => (
                    // @ts-ignore
                    <ExperienceCard key={experience._id} experience={experience} />
        ))}
            </div>
        </motion.div>
    );
};

export default WorkExperience;
// by Rokas with ❤️
