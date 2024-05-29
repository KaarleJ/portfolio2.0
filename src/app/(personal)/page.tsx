import Landing from "@/components/Landing";
import Skills from "@/components/Skills";
import About from "@/components/about";
import Projects from "@/components/projects";



export default async function Home() {
  const landingData = await fethLanding();
  const aboutData = await fetchAbout();
  const skillsData = await fetchSkills();
  const projectsData = await fetchProjects();
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
