import Socials from "./Socials";
import { FaReact as React } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="z-50 fixed top-0 left-0 w-screen flex flex-row justify-between items-center px-24 py-4 text-white backdrop-blur-md shadow-lg shadow-purple-700">
      <a
        href="#landing"
        className="flex flex-row items-center w-full hover:text-primary"
      >
        <React
          size={42}
          className="animate-[spin_6s_infinite] animate hover:animate-none text-primary"
        />
        <span className="text-xl ml-5 whitespace-nowrap">WebDev Kaarle</span>
      </a>
      <div className="flex flex-row justify-between rounded-full bg-[#0300145e] px-8 py-4 text-lg w-full">
        <a className="mx-4 hover:text-primary" href="#about-me">
          About me
        </a>
        <a className="mx-4 hover:text-primary" href="#skills">
          Skills
        </a>
        <a className="mx-4 hover:text-primary" href="#projects">
          Projects
        </a>
      </div>
      <Socials className="flex flex-row gap-4 w-full justify-end" />
    </nav>
  );
}
