import Socials from "./Socials";
import { FaReact as React } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="z-50 fixed top-0 left-0 w-screen flex flex-row justify-between items-center px-6 sm:px-24 py-4 text-white backdrop-blur-md shadow-lg shadow-primary">
      <div className="flex flex-row items-center w-full">
        <React
          size={42}
          className="animate-[spin_6s_infinite] animate text-secondary"
        />
        <span className="text-xl ml-5 whitespace-nowrap">WebDev Kaarle</span>
      </div>
      <div className="hidden sm:flex flex-row justify-between rounded-full bg-[#0300145e] px-8 py-4 text-lg w-full">
        <a className="mx-4 hover:text-secondary" href="#about-me">
          About me
        </a>
        <a className="mx-4 hover:text-secondary" href="#skills">
          Skills
        </a>
        <a className="mx-4 hover:text-secondary" href="#projects">
          Projects
        </a>
      </div>
      <Socials className="flex-row gap-4 w-full justify-end hidden sm:flex" />
    </nav>
  );
}
