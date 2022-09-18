import React from 'react';
import { SocialIcon } from 'react-social-icons';

type Props = {}

const Header = ({}: Props) => {
    return (
        <header>
           <div className="flex flex-row itmes-center">
               <SocialIcon url="https://twitter.com/byrookas" fgColor={"gray"} bgColor={"transparent"}  />
               <SocialIcon url="https://youtube.com/c/rokasrudzianskas" fgColor={"gray"} bgColor={"transparent"} />
               <SocialIcon url="https://facebook.com/c/rokasrudzianskas" fgColor={"gray"} bgColor={"transparent"} />
               <SocialIcon url="https://instagram.com/c/rokasrudzianskas" fgColor={"gray"} bgColor={"transparent"} />
           </div>
            <div>
                <SocialIcon className={"cursor-pointer"} network={"email"} fgColor={"gray"} bgColor={"transparent"} />
                <p className="uppercase">GET IN TOUCH</p>
            </div>
        </header>
    );
};

export default Header;
// by Rokas with ❤️
