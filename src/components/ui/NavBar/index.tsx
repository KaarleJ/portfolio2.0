import dynamic from "next/dynamic";
import { draftMode } from "next/headers";

import { loadSettings } from "@/sanity/loader/loadQuery";

import NavBarLayout from "./NavBarLayout";
const NavbarPreview = dynamic(() => import("./NavBarPreview"));

export default async function Navbar() {
  const initial = await loadSettings();

  if (draftMode().isEnabled) {
    return <NavbarPreview initial={initial} />;
  }

  return <NavBarLayout data={initial.data} />;
}