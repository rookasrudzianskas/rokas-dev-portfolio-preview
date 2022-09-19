import { motion } from 'framer-motion';
import React from 'react';

type Props = {}

const ExperienceCard = ({}: Props) => {
    return (
        <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-100 overflow-hidden">
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="https://avatars.githubusercontent.com/u/38469892?v=4" alt=""/>
            <div className="px-0 md:px-10">
                <h4 className="text-4xl font-light">CEO of BYROOKAS</h4>
                <p className="font-bold text-2xl mt-1">ByRookas</p>
                <div className="flex space-x-2 my-2">
                    <img src="https://avatars.githubusercontent.com/u/38469892?v=4" className="w-1- h-10 rounded-full" alt=""/>
                    <img src="https://avatars.githubusercontent.com/u/38469892?v=4" className="w-1- h-10 rounded-full" alt=""/>
                    <img src="https://avatars.githubusercontent.com/u/38469892?v=4" className="w-1- h-10 rounded-full" alt=""/>
                    <img src="https://avatars.githubusercontent.com/u/38469892?v=4" className="w-1- h-10 rounded-full" alt=""/>

                </div>
                <p className="uppercase py-5 text-gray-300">Started work... - Ended...</p>
                <ul className="list-disc  space-y-4 ml-4 text-lg">
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                    <li>Summary points</li>
                </ul>
            </div>
        </article>
    );
};

export default ExperienceCard;
// by Rokas with ❤️
