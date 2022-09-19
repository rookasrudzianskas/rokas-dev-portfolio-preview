import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

const About = ({}: Props) => {
    return (
        <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

            <motion.img src="https://avatars.githubusercontent.com/u/38469892?v=4"
                        initial={{
                            x: -200,
                            opacity: 0,
                        }}
                        whileInView={{
                            x: 0,
                            opacity: 1,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 1.2,
                        }}
                        alt=""/>
        </div>
    );
};

export default About;
// by Rokas with ❤️
