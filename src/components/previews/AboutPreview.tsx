"use client";

import { type QueryResponseInitial } from "@sanity/react-loader";
import { AboutPayload } from "@/types";
import { useQuery } from "@/sanity/loader/useQuery";
import { aboutPageQuery } from "@/sanity/lib/queries";
import About from "../views/about";

interface AboutProps {
  initial: QueryResponseInitial<AboutPayload | null>;
}

export default function AboutPreview({ initial }: AboutProps) {
  const { data } = useQuery<AboutPayload | null>(
    aboutPageQuery,
    {},
    { initial }
  );

  return <About data={data} />;
}
