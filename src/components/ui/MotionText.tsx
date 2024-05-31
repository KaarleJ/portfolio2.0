"use client";
import { HTMLMotionProps, motion } from "framer-motion";

export default function MotionText({
  children,
  ...props
}: HTMLMotionProps<"h1">) {
  return (
    <motion.h1
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.h1>
  );
}
