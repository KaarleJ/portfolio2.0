import Landing from "@/components/views/Landing/Landing";
import Skills from "@/components/views/Skills";
import About from "@/components/views/about";
import Projects from "@/components/views/Projects";

import { draftMode } from "next/headers";
import dynamic from "next/dynamic";

import {
  loadAboutPage,
  loadHomePage,
  loadProjects,
  loadSkills,
} from "@/sanity/loader/loadQuery";

const SkillsPreview = dynamic(
  () => import("@/components/previews/SkillsPreview")
);
const ProjectsPreview = dynamic(
  () => import("@/components/previews/ProjectsPreview")
);
const AboutPreview = dynamic(
  () => import("@/components/previews/AboutPreview")
);
const LandingPreview = dynamic(
  () => import("@/components/previews/LandingPreview")
);

export default async function Home() {
  const landing = await loadHomePage();
  const projects = await loadProjects();
  const skills = await loadSkills();
  const about = await loadAboutPage();

  return (
    <main className="h-full w-full py-24 px-4 sm:px-24">
      <div className="flex flex-col">
        {draftMode().isEnabled ? (
          <LandingPreview initial={landing} />
        ) : (
          <Landing initial={landing.data} />
        )}
      </div>
      <div className="md:grid md:grid-cols-7">
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
