import React from 'react';
import {Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'

type Props = {}

const Hero = ({}: Props) => {

    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Rokas", "Guy-who-is-adobe-junkie.tsx", "<ButLovesToCodeMore />"],
        loop: true,
        delaySpeed: 2000,
    });

    // const words = ["Software developer", "Full-Stack developer", "Creative", "Web designer"];
    // const [ text ] = useTypewriter({
    //     words,
    //     loop: 0, // Infinit
    // });



    return (
        <div>
            <p>{text}</p>
            <Cursor cursorColor={"#F7AB0A"} />
        </div>
    );
};

export default Hero;
// by Rokas with ❤️
