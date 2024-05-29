import Landing from "@/components/Landing";
import Skills from "@/components/Skills";
import About from "@/components/about";
import Projects from "@/components/projects";
import {
  AboutPayload,
  HomePayload,
  ProjectsPayload,
  SkillsPayload,
} from "@/types";

const landingData: HomePayload = {
  assignment: "IT student",
  titlePreSpan: "Hi, I'm",
  span: "Kaarle!",
  titlePostSpan: "... an IT student with a focus on fullstack",
  description:
    "Welcome to my portfolio where I showcase my projects and skills.",
};

const aboutData: AboutPayload = {
  title: "So who am I?",
  body: "I'm a 22 year old finnish IT student from Finland. ",
  image: "/kaarle.png",
};

const skillsData: SkillsPayload = {
  title: "Skills",
  body: "I have experience with the following technologies",
  skills: [
    { name: "React" },
    { name: "Next.js" },
    { name: "TailwindCSS" },
    { name: "Node.js" },
    { name: "Express" },
    { name: "MongoDB" },
    { name: "PostgreSQL" },
    { name: "Docker" },
    { name: "Kubernetes" },
    { name: "AWS" },
    { name: "GCP" },
    { name: "Azure" },
  ],
};

const projectsData: ProjectsPayload = {
  title: "Projects",
  projects: [
    {
      title: "Project 1",
      description: "This is a project description",
      image: "https://www.prokoulu.fi/wp-content/uploads/2023/06/placeholder.png",
      link: "https://www.google.com",
      github: "https://github.com",
    },
    {
      title: "Project 2",
      description: "This is a project description",
      image: "https://www.prokoulu.fi/wp-content/uploads/2023/06/placeholder.png",
      link: "https://www.google.com",
      github: "https://github.com",
    },
    {
      title: "Project 3",
      description: "This is a project description",
      image: "https://www.prokoulu.fi/wp-content/uploads/2023/06/placeholder.png",
      link: "https://www.google.com",
      github: "https://github.com",
    },
  ],
};

export default async function Home() {
  /*
  const landingData = await fethLanding();
  const aboutData = await fetchAbout();
  const skillsData = await fetchSkills();
  const projectsData = await fetchProjects();
  */
  return (
    <main className="h-full w-full py-24 px-4 sm:px-24">
      <div className="flex flex-col">
        <Landing data={landingData} />
      </div>
      <div className="grid-cols-7 grid">
        <About data={aboutData} />
        <Skills data={skillsData} />
        <Projects data={projectsData} />
      </div>
    </main>
  );
}
