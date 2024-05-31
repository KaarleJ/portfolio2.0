import { studioUrl } from "@/sanity/lib/api";
import { HomePayload } from "@/types";
import Content from "./Content";
import Link from "next/link";

interface LandingProps {
  initial: HomePayload | null;
}

export default function Landing({ initial }: LandingProps) {

  if (!initial) {
    return (
      <div className="text-center">
        You don&rsquo;t have a homepage yet,{" "}
        <Link href={`${studioUrl}/desk/home`} className="underline">
          create one now
        </Link>
        !
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full">
        <video
          autoPlay
          muted
          loop
          className=" absolute rotate-180 top-[-400px]  h-full w-full left-0 z-0 object-cover "
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        <Content data={initial} />
      </div>
  );
}
