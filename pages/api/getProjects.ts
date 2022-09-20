import type { NextApiRequest, NextApiResponse } from 'next'
import groq from "groq";
import {sanityClient} from "../../sanity";
import {Project, Skill, Social} from "../../typings";

const query = groq`
    *[_type == "project"] {
  ...,
  technologies[] ->
}
    `;


type Data = {
    projects: Project[]
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const projects: Project[] = await sanityClient.fetch(query);
    res.status(200).json({projects})
}
