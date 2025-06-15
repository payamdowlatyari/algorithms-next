"use client";

import { algorithmsList } from "@/constant/algorithmsList";
import ProblemPage from "@/components/ProblemPage";

/**
 * Renders an accordion list of algorithms related to linked lists.
 *
 * This component is rendered at /linkedlist.
 */
export default function LinkedList() {
  const algorithms = algorithmsList.filter(({ tags }) =>
    tags.includes("Linked List")
  );

  return <ProblemPage algorithms={algorithms} />;
}
