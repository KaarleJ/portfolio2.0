"use client";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/animations";

export default function SkillsList({ skills }: { skills: { name: string }[] }) {
  return (
    <ul className="flex flex-wrap justify-center w-2/3 self-center m-12 text-xl">
      {skills.map(({ name }, index) => (
        <motion.li
          key={index}
          variants={slideInFromLeft(0.3 + 0.1 * index)}
          id="skill"
          className="border rounded-xl px-4 py-2"
        >
          {name}
        </motion.li>
      ))}
    </ul>
  );
}
