import { FaGithub as Github } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa";

interface SocialsProps {
  className?: string;
}

export default function Socials({ className }: SocialsProps) {
  return (
    <div className={`${className}`}>
      <a href="https://www.github.com" className="hover:text-primary">
        <Github size={36} />
      </a>
      <a href="https://www.linkedin.com" className="hover:text-primary">
        <Linkedin size={36} />
      </a>
    </div>
  );
}
