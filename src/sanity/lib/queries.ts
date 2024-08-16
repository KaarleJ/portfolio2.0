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

export const cardsQuery = groq`
{
  "cards": *[_type == "card"] {
    _id,
    content,
    "slug": slug.current,
    title,
  }
}
`;

export const settingsQuery = groq`
  *[_type == "settings"][0]{
    menuItems[]->{
      _type,
      "slug": slug.current,
      title
    },
    "logo": logo.asset->url,
  }
`;
