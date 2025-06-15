"use client";

import { algorithmsList } from "@/constant/algorithmsList";
import ProblemPage from "@/components/ProblemPage";

/**
 * Renders an accordion list of algorithms related to search.
 *
 * This component is rendered at /search.
 */
export default function Search() {
  const algorithms = algorithmsList.filter(({ tags }) =>
    tags.includes("Search")
  );

  return <ProblemPage algorithms={algorithms} />;
}
