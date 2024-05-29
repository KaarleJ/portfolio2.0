import Image from "next/image";
import Card from "../Card";
import { slideInFromRight } from "@/utils/animations";
import { AboutPayload } from "@/types";

interface AboutProps {
  data: AboutPayload;
}

export default function About({ data }: AboutProps) {
  const { title, body, image } = data;
  return (
    <section className="my-[300px] col-start-3 col-end-7">
      <Card
        variants={slideInFromRight(0.3)}
        id="about-me"
        className="flex flex-col items-start justify-start h-full overflow-hidden"
      >
        <h1 className="text-4xl font-medium my-12">{title}</h1>
        <div className="grid">
          <p className="text-lg col-start-1 col-end-4">{body}</p>
          {image && (
            <Image
              src={image}
              alt=""
              width={200}
              height={100}
              className="h-auto w-auto col-start-5 col-end-7 shadow-xl shadow-purple-600 mx-6"
            />
          )}
        </div>
      </Card>
    </section>
  );
}
