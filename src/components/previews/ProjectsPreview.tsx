"use client";

import { type QueryResponseInitial } from "@sanity/react-loader";
import { ProjectsPayload } from "@/types";
import { projectsQuery } from "@/sanity/lib/queries";
import { useQuery } from "@/sanity/loader/useQuery";
import Projects from "../views/Projects";

interface ProjectsProps {
  initial: QueryResponseInitial<ProjectsPayload | null>;
}

export default function ProjectsPreview({ initial }: ProjectsProps) {
  const { data } = useQuery<ProjectsPayload | null>(
    projectsQuery,
    {},
    { initial }
  );

  return <Projects data={data} />;
}
