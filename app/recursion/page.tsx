'use client';

import { algorithmsList } from '@/constant/algorithmsList';
import ProblemPage from '@/components/ProblemPage';

/**
 * Renders an accordion list of algorithms related to recursion.
 *
 * This component is rendered at /recursion.
 */
export default function Recursion() {
  const algorithms = algorithmsList.filter(({ tags }) =>
    tags.includes('Recursion'),
  );

  return <ProblemPage algorithms={algorithms} />;
}
