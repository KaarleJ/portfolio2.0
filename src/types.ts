export interface HomePayload {
  assignment?: string;
  titlePreSpan?: string;
  span?: string;
  titlePostSpan?: string;
  description?: string;
  landingImage?: string;
}

export interface AboutPayload {
  title?: string;
  body?: string;
  image?: string;
}

export interface SkillsPayload {
  title?: string;
  body?: string;
  skills?: string[];
}

export interface Project {
  title: string;
  description: string;
  image?: string;
  link?: string;
  github?: string;
}

export interface ProjectsPayload {
  projects?: Project[];
}
