"use client";
import { motion } from "framer-motion";
import {
  slideInFromTop,
  slideInFromLeft,
  slideInFromRight,
} from "@/utils/animations";
import Image from "next/image";
import { HiMiniAcademicCap as Cap } from "react-icons/hi2";
import Banner from "@/components/Banner";
import { Button } from "@/components/ui/button";
import { HomePayload } from "@/types";

interface ContentProps {
  data: HomePayload;
}

export default function Content({ data }: ContentProps) {
  const {
    assignment,
    titlePreSpan,
    titlePostSpan,
    description,
    span,
    landingImage,
  } = data;
  return (
    <motion.div
      id="landing"
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-20"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start">
        <Banner
          variants={slideInFromTop}
          className="flex flex-row items-center gap-2"
        >
          <Cap size={36} className="text-primary" />
          <h1 className="text-lg">{assignment}</h1>
        </Banner>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            {titlePreSpan}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              {span}
              <br />
            </span>
            {titlePostSpan}
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          {description}
        </motion.p>
        <motion.div
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          <Button
            variant="outline"
            className="flex bg-gradient-to-t from-purple-800 via-indigo-950 to-indigo-950 text-lg font-normal"
          >
            Learn More!
          </Button>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        {landingImage && (
          <Image
            src={landingImage}
            alt="work icons"
            height={850}
            width={850}
            className="opacity-50 hidden sm:flex"
          />
        )}
      </motion.div>
    </motion.div>
  );
}
