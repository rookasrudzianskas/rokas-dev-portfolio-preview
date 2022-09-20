import type {GetStaticProps, NextPage} from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import WorkExperience from "../components/WorkExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from "next/link";
import {Experience, PageInfo, Project, Skill, Social} from "../typings";
import {fetchPageInfo} from "../utils/fetchPageInfo";
import {fetchExperiences} from "../utils/fetchExperiences";
import {fetchSkills} from "../utils/fetchSkills";
import {fetchProjects} from "../utils/fetchProjects";
import {fetchSocials} from "../utils/fetchSocials";

type Props = {
    pageInfo: PageInfo;
    experiences: Experience[];
    skills: Skill[];
    projects: Project[];
    socials: Social[];
}

// @ts-ignore
const Home: NextPage = ({pageInfo, experiences, skills, projects, socials}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-x-hidden overflow-y-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Rokas' Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <Header socials={socials} />

        <section id="hero" className="snap-center">
            <Hero pageInfo={pageInfo} />
        </section>

        <section id="about" className="snap-start">
            <About pageInfo={pageInfo} />
        </section>

        <section id="experience" className="snap-start">
            {/* @ts-ignore */}
            <WorkExperience experience={experiences} />
        </section>

        <section id="skills" className="snap-start">
            <Skills skills={skills} />
        </section>

        <section id="projects" className="snap-start">
            <Projects projects={projects} />
        </section>

        <section id="contactMe" className="snap-start">
            <ContactMe />
        </section>

        <Link href={"#hero"}>
            <footer className="sticky bottom-5 w-full cursor-pointer">
                <div className="flex items-center justify-center">
                    <img src="https://avatars.githubusercontent.com/u/38469892?v=4" className="w-5 h-5 rounded-full filter grayscale hover:grayscale-0" alt=""/>
                </div>
            </footer>
        </Link>

    </div>
  )
}

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
    // @ts-ignore
    const pageInfo: PageInfo = await fetchPageInfo();
    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();

    return {
        props: {
            pageInfo,
            experiences,
            skills,
            projects,
            socials
        },
        // revalidate: 1
        revalidate: 10,
    }
}
