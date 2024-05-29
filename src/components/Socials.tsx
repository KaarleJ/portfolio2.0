import { FaGithub as Github } from "react-icons/fa";
import { FaLinkedin as Linkedin } from "react-icons/fa";

interface SocialsProps {
  className?: string;
}

export default function Socials({ className }: SocialsProps) {
  return (
    <div className={`${className}`}>
      <a href='https://www.github.com'><Github size={36}/></a>
      <a href='https://www.linkedin.com'><Linkedin size={36}/></a>
    </div>
  )
}