import { MenuItem, SettingsPayload } from "@/types";
import Socials from "../Socials";
import { FaReact as React } from "react-icons/fa";
import Image from "next/image";

export default function NavBarLayout({
  data,
}: {
  data: SettingsPayload | null;
}) {
  const menuItems = data?.menuItems || ([] as MenuItem[]);
  const logo = data?.logo || "";
  console.log("logo", logo);
  return (
    <nav className="z-50 fixed top-0 left-0 w-screen flex flex-row justify-between items-center px-6 sm:px-24 py-4 text-white backdrop-blur-md shadow-lg shadow-primary">
      <div className="flex flex-row items-center w-full">
        <a href="#landing">
          <Image
            src={logo}
            alt="WebDev Kaarle"
            width={100}
            height={20}
            className="object-cover w-full h-full"
          />
        </a>
      </div>
      <div className="hidden sm:flex flex-row justify-between rounded-full bg-[#0300145e] px-8 py-4 text-lg w-full">
        {menuItems.map((item) => (
          <a
            key={item.title}
            className="mx-4 hover:text-secondary"
            href={`#${item.slug}`}
          >
            {item.title}
          </a>
        ))}
        <a className="mx-4 hover:text-secondary" href="#projects">
          Projects
        </a>
      </div>
      <Socials className="flex-row gap-4 w-full justify-end hidden sm:flex" />
    </nav>
  );
}
