"use client";
import { HTMLMotionProps, motion } from "framer-motion";

export default function Banner({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={`${className} border border-primary rounded-3xl py-3 px-7 opacity-90 text-gray-400 w-max overflow-hidden shadow-inner shadow-primary`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
