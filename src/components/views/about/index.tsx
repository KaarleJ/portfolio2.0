import Image from "next/image";
import Card from "@/components/ui/Card";
import { slideInFromRight } from "@/utils/animations";
import { AboutPayload } from "@/types";

interface AboutProps {
  data: AboutPayload | null;
}

export default function About({ data }: AboutProps) {
  if (!data) return <div>You have not added about content</div>;

  const { title, body, image } = data;
  return (
    <section className="my-[600px] col-start-4 col-end-8 z-20">
      <Card
        variants={slideInFromRight(0.3)}
        id="about-me"
        className="flex flex-col items-center justify-center h-full overflow-hidden"
      >
        {image && (
          <Image
            src={image}
            alt=""
            width={200}
            height={100}
            className="h-auto w-auto object-contain shadow-xl shadow-primary mx-6"
          />
        )}
        <h1 className="text-4xl font-medium my-12">{title}</h1>
        <p className="text-lg text-pretty">{body}</p>
      </Card>
    </section>
  );
}
