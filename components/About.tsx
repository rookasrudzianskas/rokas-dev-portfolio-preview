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
                        className="mt-32 md:mt-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
                        alt=""/>
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Here is a <span className="underline decoration-[#F7AB0A]/50">little</span> background
                </h4>
                <p className="text-sm">
                    I'm Rokas. 💯You might also know me as byRookas! I'll be your coach & mentor inside the idiot-proof course, here is a little bit about me...
                    I've been coding for over 5 years now. As a Full Stack Developer, I've worked both with startups and large corporations to help build & scale
                    their companies. Along the journey I released my passion existed in helping others excel and pursue their dreams as upcoming developers.
                    ⭐ With this passion, I have now trained thousand's of developers across the globe. Through live coaching sessions on Youtube, I have accumulated
                    several MILLION views demonstrating how to apply developer skills in a range of cool builds and challenges. I deliver REAL VALUE by teaching
                    REAL WORLD projects to help students enter the world of web and app development. You'll get hands-on experiance and learn the skills that are required
                    to succeed in the real-world in this community. And if that's not enough I have coned most of the applications you have used in your life!
                </p>
            </div>
        </div>
    );
};

export default About;
// by Rokas with ❤️
