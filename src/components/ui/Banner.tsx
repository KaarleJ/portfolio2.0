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
      className={`${className} border border-[#7042f88b] rounded-3xl py-3 px-7 opacity-90 text-gray-400 w-max overflow-hidden shadow-inner shadow-purple-600`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
