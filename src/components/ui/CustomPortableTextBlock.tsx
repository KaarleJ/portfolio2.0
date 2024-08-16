import {
  PortableText,
  type PortableTextBlock,
  type PortableTextComponents,
} from "next-sanity";
import type { Image } from "sanity";
import ImageBox from "./ImageBox";
import MotionLi from "./MotionLi";
import { slideInFromLeft } from "@/utils/animations";

export default function CustomPortableTextBlock({
  value,
}: {
  value: PortableTextBlock[];
}) {
  const components: PortableTextComponents = {
    block: {
      normal: ({ children }) => {
        return <p className="text-lg text-pretty">{children}</p>;
      },
      h2: ({ children }) => {
        return (
          <>
            <h2 className="text-4xl font-medium my-6">{children}</h2>
          </>
        );
      },
      h3: ({ children }) => {
        return <h3 className="font-semibold">{children}</h3>;
      },
    },
    marks: {
      link: ({ children, value }) => {
        return (
          <a
            className="underline transition hover:opacity-50"
            href={value?.href}
            rel="noreferrer noopener"
          >
            {children}
          </a>
        );
      },
    },
    list: {
      bullet: ({ children }) => {
        return (
          <div className="w-full flex justify-center">
            <ul className="flex flex-wrap justify-center sm:w-2/3 my-6 sm:my-12 text-xl">
              {children}
            </ul>
          </div>
        );
      },
    },
    listItem: ({ children, index }) => {
      return (
        <MotionLi
          key={index}
          variants={slideInFromLeft(0.3 + 0.1 * index)}
          id="skill"
          className="border rounded-xl px-4 py-2 shadow-inner shadow-primary"
        >
          {children}
        </MotionLi>
      );
    },
    types: {
      image: ({
        value,
      }: {
        value: Image & { alt?: string; caption?: string };
      }) => {
        return (
          <div className="flex items-center justify-center">
            <ImageBox
              image={value}
              alt={value.alt}
              classesWrapper="relative aspect-[16/9] shadow-xl shadow-primary my-4 w-3/4"
            />
          </div>
        );
      },
    },
  };

  return <PortableText components={components} value={value} />;
}
