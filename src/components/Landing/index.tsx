
import { HomePayload } from "@/types";
import Content from "./Content";

interface LandingProps {
  data: HomePayload;
}

export default function Landing({ data }: LandingProps) {
  return (
    <div className="flex flex-col h-full w-full">
        <video
          autoPlay
          muted
          loop
          className=" absolute rotate-180 top-[-400px]  h-full w-full left-0 z-[1] object-cover "
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
        <Content data={data} />
      </div>
  );
}
