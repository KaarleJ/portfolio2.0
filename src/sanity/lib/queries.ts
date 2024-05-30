import { groq } from "next-sanity";

export const homePageQuery = groq`
  *[_type == "home"][0]{
    _id,
    assignment,
    titlePreSpan,
    span,
    titlePostSpan,
    description,
    "landingImage": landingImage.asset->url,
  }
`;

export const aboutPageQuery = groq`
  *[_type == "about"][0]{
    _id,
    title,
    body,
    "image": image.asset->url,
  }
`;

export const skillsQuery = groq`
  *[_type == "skills"][0]{
    _id,
    title,
    body,
    skills,
  }
`;


export const projectsQuery = groq`
{
  "projects": *[_type == "project"] {
    _id,
    title,
    description,
    "image": coverImage.asset->url,
    link,
    github,
  }
}
`;
