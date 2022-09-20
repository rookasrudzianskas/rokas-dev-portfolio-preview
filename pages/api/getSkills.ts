import type { NextApiRequest, NextApiResponse } from 'next'
import groq from "groq";
import {sanityClient} from "../../sanity";
import {Skill, Social} from "../../typings";

const query = groq`
    *[_type == "skill"]
    `;


type Data = {
    skills: Skill[]
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const skills: Skill[] = await sanityClient.fetch(query);
    res.status(200).json({skills})
}
