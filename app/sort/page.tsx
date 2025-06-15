"use client";

import { algorithmsList } from "@/constant/algorithmsList";
import ProblemPage from "@/components/ProblemPage";

/**
 * Renders an accordion list of algorithms related to sorting.
 *
 * This component is rendered at /sort.
 */
export default function Sort() {
  const algorithms = algorithmsList.filter(({ tags }) => tags.includes("Sort"));

  return <ProblemPage algorithms={algorithms} />;
}
