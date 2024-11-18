import { PortableTextBlock } from "next-sanity";

export interface HomePayload {
  assignment?: string;
  titlePreSpan?: string;
  span?: string;
  titlePostSpan?: string;
  description?: string;
  landingImage?: string;
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
  finishDate: string;
}

export interface ProjectsPayload {
  projects?: Project[];
}

export type CardsPayload = {
  cards?: Card[]
}

export type Card = {
  _id: string;
  slug: string;
  content: PortableTextBlock[];
  title: string;
}

export type SettingsPayload = {
  logo?: string;
  menuItems?: MenuItem[];
};

export type MenuItem = {
  _type: string;
  slug?: string;
  title?: string;
};