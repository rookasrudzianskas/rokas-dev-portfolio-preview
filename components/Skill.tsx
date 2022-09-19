import { motion } from 'framer-motion';
import React from 'react';

type Props = {
    directionLeft?: boolean;
}

const Skill = ({directionLeft}: Props) => {
    return (
        <div className="group relative flex cursor-pointer ">
            <motion.img
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0,
                }}
                transition={{duration: 1}}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_96102ac6497377cd53da621075fe828e/sanity.png"
                className="rounded-full border border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28  xl:w-32 xl:h-32 filter group-hover:grayscale duration-300 ease-in-out"
                alt=""/>
            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl font-bold text-black opacity-100">100%</p>
                </div>
            </div>
        </div>
    );
};

export default Skill;
// by Rokas with ❤️
