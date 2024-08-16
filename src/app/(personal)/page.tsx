import Landing from "@/components/views/Landing/Landing";
import Projects from "@/components/views/Projects";

import { draftMode } from "next/headers";
import dynamic from "next/dynamic";

import {
  loadHomePage,
  loadProjects,
  loadCards,
} from "@/sanity/loader/loadQuery";
import Cards from "@/components/views/Cards";
import CardsPreview from "@/components/previews/CardsPreview";

const ProjectsPreview = dynamic(
  () => import("@/components/previews/ProjectsPreview")
);
const LandingPreview = dynamic(
  () => import("@/components/previews/LandingPreview")
);

export default async function Home() {
  const landing = await loadHomePage();
  const projects = await loadProjects();
  const cards = await loadCards();

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
            <CardsPreview initial={cards} />
            <ProjectsPreview initial={projects} />
          </>
        ) : (
          <>
            <Cards data={cards.data} />
            <Projects data={projects.data} />
          </>
        )}
      </div>
    </main>
  );
}
