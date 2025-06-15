"use client";

import { algorithmsList } from "@/constant/algorithmsList";
import ProblemPage from "@/components/ProblemPage";

/**
 * Renders an accordion list of algorithms related to data structures.
 *
 * This component is rendered at /datastructure.
 */
export default function DataStructure() {
  const algorithms = algorithmsList.filter(({ tags }) =>
    tags.includes("Data Structure")
  );

  return <ProblemPage algorithms={algorithms} />;
}
