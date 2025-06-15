"use client";

import { algorithmsList } from "@/constant/algorithmsList";
import ProblemPage from "@/components/ProblemPage";

/**
 * Renders an accordion list of algorithms related to arrays.
 *
 * This component is rendered at /array.
 */
export default function Array() {
  const algorithms = algorithmsList.filter(({ tags }) =>
    tags.includes("Array")
  );

  return <ProblemPage algorithms={algorithms} />;
}
