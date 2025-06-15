"use client";

import { algorithmsList } from "@/constant/algorithmsList";
import ProblemPage from "@/components/ProblemPage";

/**
 * Renders an accordion list of algorithms related to dynamic programming.
 *
 * This component is rendered at /dynamic.
 */
export default function DynamicProgramming() {
  const algorithms = algorithmsList.filter(({ tags }) =>
    tags.includes("Dynamic Programming")
  );

  return <ProblemPage algorithms={algorithms} />;
}
