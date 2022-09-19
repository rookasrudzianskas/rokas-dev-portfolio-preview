import React from 'react';
import { useTypewriter } from 'react-simple-typewriter'

type Props = {}

const Hero = ({}: Props) => {

    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Rokas", "Guy-who-is-adobe-junkie.tsx", ">ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    });


    return (
        <div>
            <p>{text && text}</p>
        </div>
    );
};

export default Hero;
// by Rokas with ❤️
