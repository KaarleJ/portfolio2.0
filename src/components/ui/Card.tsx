"use client";
import { HTMLMotionProps, motion } from "framer-motion";

export default function Card({
  className,
  children,
  ...props
}: HTMLMotionProps<"div">) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`${className} border rounded-lg px-8 sm:px-16 py-8 shadow-inner shadow-primary`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
