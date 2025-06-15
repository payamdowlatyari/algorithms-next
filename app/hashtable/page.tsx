"use client";

import { algorithmsList } from "@/constant/algorithmsList";
import ProblemPage from "@/components/ProblemPage";

/**
 * Renders an accordion list of algorithms related to hash tables.
 *
 * This component is rendered at /hashtable.
 */
export default function HashTable() {
  const algorithms = algorithmsList.filter(({ tags }) =>
    tags.includes("Hash Table")
  );

  return <ProblemPage algorithms={algorithms} />;
}
