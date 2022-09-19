import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <Head>
        <title>Rokas' Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header />

        <section id="hero" className="">
            <Hero />
        </section>

    </div>
  )
}

export default Home;
