import { CardsPayload } from "@/types";
import Card from "../ui/Card";
import CustomPortableTextBlock from "../ui/CustomPortableTextBlock";
import { slideInFromLeft, slideInFromRight } from "@/utils/animations";

interface CardProps {
  data: CardsPayload | null;
}

export default function Cards({ data }: CardProps) {
  if (!data || !data.cards) return <div>You have not added any cards</div>;

  return (
    <>
      {data.cards.map((card, ind) => {
        const align = ind % 2 === 0 ? "col-start-2 col-end-7 md:col-end-5" : "col-start-4 col-end-7";
        const variants = ind % 2 === 0 ? slideInFromRight(0.4) : slideInFromLeft(0.4);
        return (
          <div
            key={card._id}
            className={`${align} z-20 my-[600px]`}
            id={card.slug}
          >
            <Card variants={variants}>
              {card.content && <CustomPortableTextBlock value={card.content} />}
            </Card>
          </div>
        );
      })}
    </>
  );
}
