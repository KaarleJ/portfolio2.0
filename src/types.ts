export interface HomePayload {
  assignment?: string;
  titlePreSpan?: string;
  span?: string;
  titlePostSpan?: string;
  description?: string;
}

export interface AboutPayload {
  title?: string;
  body?: string;
  image?: string;
}

export interface SkillsPayload {
  title?: string;
  body?: string;
  skills?: {
    name: string;
  }[];
}

export interface ProjectsPayload {
  title?: string;
  projects?: {
    title: string;
    description: string;
    image?: string;
    link?: string;
    github?: string;
  }[];
}