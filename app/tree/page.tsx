"use client";

import { algorithmsList } from "@/constant/algorithmsList";
import ProblemPage from "@/components/ProblemPage";

/**
 * Renders an accordion list of algorithms related to trees.
 *
 * This component is rendered at /tree.
 */
export default function Tree() {
  const algorithms = algorithmsList.filter(({ tags }) => tags.includes("Tree"));

  return <ProblemPage algorithms={algorithms} />;
}
