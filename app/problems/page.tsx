"use client";

import { algorithmsList } from "@/constant/algorithmsList";
import ProblemPage from "@/components/ProblemPage";

/**
 * Renders an accordion list of all algorithms.
 *
 * This component is rendered at /problems.
 */
export default function AllProblems() {
  return <ProblemPage algorithms={algorithmsList} />;
}
