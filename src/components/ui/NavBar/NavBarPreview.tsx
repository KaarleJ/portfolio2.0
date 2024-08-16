"use client";

import { useSettings } from "@/sanity/loader/useQuery";

import NavBarLayout from "./NavBarLayout";

type Props = {
  initial: Parameters<typeof useSettings>[0];
};

export default function NavbarPreview({ initial }: Props) {
  const { data } = useSettings(initial);

  return <NavBarLayout data={data} />;
}