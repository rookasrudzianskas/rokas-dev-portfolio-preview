import type { NextApiRequest, NextApiResponse } from 'next'
import groq from "groq";
import {sanityClient} from "../../sanity";

const query = groq`
    *[_type == "social"]
    `;


type Data = {
    socials: Social[]
}


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const socials: Social[] = await sanityClient.fetch(query);
    res.status(200).json({socials})
}
