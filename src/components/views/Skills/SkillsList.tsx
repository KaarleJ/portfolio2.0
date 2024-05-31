"use client";
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/animations";

export default function SkillsList({ skills }: { skills?: string[] }) {
  return (
    <ul className="flex flex-wrap justify-center sm:w-2/3 my-6 sm:my-12 text-xl">
      {skills &&
        skills.map((skill, index) => (
          <motion.li
            key={index}
            variants={slideInFromLeft(0.3 + 0.1 * index)}
            id="skill"
            className="border rounded-xl px-4 py-2 shadow-inner shadow-primary"
          >
            {skill}
          </motion.li>
        ))}
    </ul>
  );
}
