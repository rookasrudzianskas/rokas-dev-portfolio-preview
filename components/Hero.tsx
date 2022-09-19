import React from 'react';
import {Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from "./BackgroundCircles";

type Props = {}

const Hero = ({}: Props) => {

    // const [text, count] = useTypewriter({
    //     words: ["Hi, The Name's Rokas", "Guy-who-is-adobe-junkie.tsx", "<ButLovesToCodeMore />"],
    //     loop: true,
    //     delaySpeed: 2000,
    // });

    // const words = ["Software developer", "Full-Stack developer", "Creative", "Web designer"];
    // const [ text ] = useTypewriter({
    //     words,
    //     loop: 0, // Infinit
    // });



    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
            <BackgroundCircles />
            <h1 >
                <p>Bro who loves to code.</p>
                {/*<p>{text}</p>*/}
                <Cursor cursorColor={"#F7AB0A"} />
            </h1>
        </div>
    );
};

export default Hero;
// by Rokas with ❤️
