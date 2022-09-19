import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

const Projects = ({}: Props) => {
    const projects = [
        1, 2, 3, 4, 5
    ]
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
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center ">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

            <div className="w-full flex pt-12 overflow-x-scroll overflow-y-hidden spap-x snap-mandatory z-20  scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {projects.map((project, index) => (
                   <div key={index} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                       <motion.img
                           initial={{
                               y: -300,
                                 opacity: 0,
                           }}
                           transition={{ duration: 1.2 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true}}
                           className="max-h-96 maw-w-56" src="https://miro.medium.com/max/1400/0*tG8IIorra8Sq0IfO" alt=""/>
                       <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                           <h4 className="text-4xl font-semibold text-center"><span className="underline decoration-[#F7Ab0A]/50">Case Study {index + 1} of {projects.length}:</span> Netflix Clone</h4>
                           <p className="text-lg text-center md:text-left">
                               Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
                           </p>
                       </div>
                   </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB04]/10 left-0 h-[500px] -skew-y-12"/>
        </motion.div>
    );
};

export default Projects;
// by Rokas with ❤️
