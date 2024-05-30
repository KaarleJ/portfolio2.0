'use client';

import { type QueryResponseInitial } from '@sanity/react-loader'
import { HomePayload } from "@/types";
import { useQuery } from '@/sanity/loader/useQuery'
import { homePageQuery } from "@/sanity/lib/queries";
import Landing from '../views/Landing/Landing';

interface LandingProps {
  initial: QueryResponseInitial<HomePayload | null>
}

export default function LandingPreview({ initial }: LandingProps) {
  const { data } = useQuery<HomePayload | null>(
    homePageQuery,
    {},
    { initial },
  )

  return (
    <Landing initial={data} />
  );
}