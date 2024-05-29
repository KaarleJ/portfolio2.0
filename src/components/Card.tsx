"use client";
import { HTMLMotionProps, motion, inView, animate } from "framer-motion";

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
      className={`${className} border rounded-lg px-16 py-8 shadow-inner shadow-purple-600`}
      {...props}
    >
      {children}
    </motion.div>
  );
}