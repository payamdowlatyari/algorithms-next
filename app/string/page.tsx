"use client";

import { algorithmsList } from "@/constant/algorithmsList";
import ProblemPage from "@/components/ProblemPage";

/**
 * Renders an accordion list of algorithms related to strings.
 *
 * This component is rendered at /string.
 */
export default function String() {
  const algorithms = algorithmsList.filter(({ tags }) =>
    tags.includes("String")
  );

  return <ProblemPage algorithms={algorithms} />;
}
