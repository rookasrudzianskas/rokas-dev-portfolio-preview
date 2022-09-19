import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

const Header = ({}: Props) => {
    return (
        <header className="flex flex-row items-start p-5 sticky top-0 justify-between max-w-7xl mx-auto z-20 xl:items-center">
           <motion.div initial={{
               x: -500,
               opacity: 0,
               scale: 0.5,
           }}
           animate={{
                 x: 0,
                 opacity: 1,
                 scale: 1,
                 }}
           transition={{
               duration: 1.5,
           }}
                       className="flex flex-row itmes-center">
               <SocialIcon url="https://twitter.com/byrookas" fgColor={"gray"} bgColor={"transparent"}  />
               <SocialIcon url="https://youtube.com/c/rokasrudzianskas" fgColor={"gray"} bgColor={"transparent"} />
               <SocialIcon url="https://facebook.com/c/rokasrudzianskas" fgColor={"gray"} bgColor={"transparent"} />
               <SocialIcon url="https://instagram.com/c/rokasrudzianskas" fgColor={"gray"} bgColor={"transparent"} />
           </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5,
                }}
                className="flex items-center flex-row text-gray-300 cursor-pointer">
                <SocialIcon className={"cursor-pointer"} network={"email"} fgColor={"gray"} bgColor={"transparent"} />
                <p className="uppercase hidden md:inline-flex text-sm text-gray-400">GET IN TOUCH</p>
            </motion.div>
        </header>
    );
};

export default Header;
// by Rokas with ❤️
