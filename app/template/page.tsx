"use client";

import { algorithmsList } from "@/constant/algorithmsList";
import ProblemPage from "@/components/ProblemPage";

/**
 * Renders an accordion list of algorithms related to templates.
 *
 * This component is rendered at /template.
 */
export default function Template() {
  const algorithms = algorithmsList.filter(({ tags }) =>
    tags.includes("Template")
  );

  return <ProblemPage algorithms={algorithms} />;
}
