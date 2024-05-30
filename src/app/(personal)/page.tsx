import Landing from "@/components/views/Landing/Landing";
import Skills from "@/components/views/Skills";
import About from "@/components/views/about";
import Projects from "@/components/views/Projects";
import {
  AboutPayload,
  HomePayload,
  ProjectsPayload,
  SkillsPayload,
} from "@/types";

import { draftMode } from "next/headers";
import {
  loadAboutPage,
  loadHomePage,
  loadProjects,
  loadSkills,
} from "@/sanity/loader/loadQuery";
import dynamic from "next/dynamic";
import ProjectsPreview from "@/components/previews/ProjectsPreview";
import SkillsPreview from "@/components/previews/SkillsPreview";
import AboutPreview from "@/components/previews/AboutPreview";
const LandingPreview = dynamic(
  () => import("@/components/previews/LandingPreview")
);

const aboutData: AboutPayload = {
  title: "So who am I?",
  body: "I'm a 22 year old finnish IT student from Finland. ",
  image: "/kaarle.png",
};

export default async function Home() {
  const landing = await loadHomePage();
  const projects = await loadProjects();
  const skills = await loadSkills();
  const about = await loadAboutPage();
  /*
  const landingData = await fethLanding();
  const aboutData = await fetchAbout();
  const skillsData = await fetchSkills();
  const projectsData = await fetchProjects();
  */

  return (
    <main className="h-full w-full py-24 px-4 sm:px-24">
      <div className="flex flex-col">
        {draftMode().isEnabled ? (
          <LandingPreview initial={landing} />
        ) : (
          <Landing initial={landing.data} />
        )}
      </div>
      <div className="grid-cols-7 grid">
        {draftMode().isEnabled ? (
          <>
            <AboutPreview initial={about} />
            <SkillsPreview initial={skills} />
            <ProjectsPreview initial={projects} />
          </>
        ) : (
          <>
            <About data={about.data} />
            <Skills data={skills.data} />
            <Projects data={projects.data} />
          </>
        )}
      </div>
    </main>
  );
}
