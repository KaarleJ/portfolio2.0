import { slideInFromLeft, slideInFromRight } from "@/utils/animations";
import Card from "../ui/Card";
import Image from "next/image";
import Banner from "../ui/Banner";
import { FaGithub as Github } from "react-icons/fa";
import { ProjectsPayload } from "@/types";
import MotionText from "../ui/MotionText";

interface ProjectsProps {
  data: ProjectsPayload | null;
}

export default function Projects({ data }: ProjectsProps) {
  if (!data) {
    return <div>You have not added projects yet</div>;
  }

  const { projects } = data;
  return (
    <section
      id="projects"
      className="my-[300px] col-start-1 col-end-8 w-full h-full z-20"
    >
      <div className="flex flex-col items-center justify-center">
        <MotionText variants={slideInFromLeft(0.5)} className="text-6xl font-semibold text-transparent text-center bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-24">
          Featured projects
        </MotionText>
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-x-4 gap-y-8">
          {projects &&
            projects.map(
              ({ title, image, description, link, github }, index) => (
                <Card
                  initial="hidden"
                  whileInView="visible"
                  variants={slideInFromRight(0.3 + 0.1 * index)}
                  key={index}
                  className="flex flex-col justify-between"
                >
                  {image && (
                    <Image
                      src={image}
                      alt=""
                      width={200}
                      height={200}
                      className="object-cover w-full h-48 my-2 rounded-md shadow-md shadow-purple-600"
                    />
                  )}

                  <h2 className="py-4 text-2xl font-semibold">{title}</h2>
                  <p className="py-2 h-full">{description}</p>
                  <div className="flex flex-row py-2 items-center">
                    <a
                      href={link}
                      className="text-purple-600 hover:text-cyan-600 z-50"
                    >
                      <Banner>Live deployment</Banner>
                    </a>

                    <a
                      href={github}
                      className="text-primary hover:text-cyan-600 z-50 mx-6"
                    >
                      <Github size={36} />
                    </a>
                  </div>
                </Card>
              )
            )}
        </div>
      </div>
    </section>
  );
}
