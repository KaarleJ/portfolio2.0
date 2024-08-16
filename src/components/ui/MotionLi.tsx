"use client";
import { HTMLMotionProps, motion } from "framer-motion";

export default function MotionLi({ children, ...props }: HTMLMotionProps<"li">) {
  return (
    <motion.li
      {...props}
    >
      {children}
    </motion.li>
  );
}
