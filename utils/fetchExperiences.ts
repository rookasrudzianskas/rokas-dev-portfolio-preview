import {Experience, PageInfo, Project, Skill, Social} from "../typings";

export const fetchExperiences = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getExperience`);
    const data = await res.json();
    const experiences: Experience[] = data.pageInfo;
    console.log(experiences);
    return experiences;
}
