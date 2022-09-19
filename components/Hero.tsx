import React from 'react';
import {Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";

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
            <img src="https://avatars.githubusercontent.com/u/38469892?v=4" className="relative rounded-full w-32 h-32 mx-auto object-cover" alt=""/>
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
            <h1 >
                <span className="text-5xl lg:text-6xl font-semibold px-10">Bro who loves to code.</span>
                {/*<p>{text}</p>*/}
                <Cursor cursorColor={"#F7AB0A"} />
            </h1>

            <div className="pt-5">
                <Link href={"#about"}>
                    <button className="heroButton">About</button>
                </Link>
                <Link href={"/experience"}>
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href={"#skills"}>
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href={"#projects"}>
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
            </div>
        </div>
    );
};

export default Hero;
// by Rokas with ❤️
