import { slideInFromLeft } from "@/utils/animations";
import Card from "../../Card";
import SkillsList from "./SkillsList";
import { SkillsPayload } from "@/types";

interface SkillsProps {
  data: SkillsPayload | null;
}

export default function Skills({ data }: SkillsProps) {
  if (!data) return <div>You have not added any skills yet.</div>;

  const { title, body, skills } = data;
  return (
    <section className="my-[300px] col-start-1 col-end-5 z-20">
      <Card
        variants={slideInFromLeft(0.3)}
        id="skills"
        className="flex flex-col items-start justify-start h-full overflow-hidden"
      >
        <h1 className="text-4xl font-medium my-12">{title}</h1>
        <p className="text-lg">{body}</p>
        <SkillsList skills={skills} />
      </Card>
    </section>
  );
}
