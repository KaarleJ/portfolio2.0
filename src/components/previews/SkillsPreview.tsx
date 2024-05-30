"use client";

import { type QueryResponseInitial } from "@sanity/react-loader";
import { SkillsPayload } from "@/types";
import { useQuery } from "@/sanity/loader/useQuery";
import { skillsQuery } from "@/sanity/lib/queries";
import Skills from "../views/Skills";

interface SkillsProps {
  initial: QueryResponseInitial<SkillsPayload | null>;
}

export default function SkillsPreview({ initial }: SkillsProps) {
  const { data } = useQuery<SkillsPayload | null>(skillsQuery, {}, { initial });

  return <Skills data={data} />;
}
