"use client";

import { type QueryResponseInitial } from "@sanity/react-loader";
import { CardsPayload } from "@/types";
import { cardsQuery } from "@/sanity/lib/queries";
import { useQuery } from "@/sanity/loader/useQuery";
import Cards from "../views/Cards";

interface CardsProps {
  initial: QueryResponseInitial<CardsPayload | null>;
}

export default function CardsPreview({ initial }: CardsProps) {
  const { data } = useQuery<CardsPayload | null>(
    cardsQuery,
    {},
    { initial }
  );

  return <Cards data={data} />;
}