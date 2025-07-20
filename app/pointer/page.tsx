'use client';

import { algorithmsList } from '@/constant/algorithmsList';
import ProblemPage from '@/components/ProblemPage';

/**
 * Renders an accordion list of algorithms related to pointers.
 *
 * This component is rendered at /pointer.
 */
export default function Pointer() {
  const algorithms = algorithmsList.filter(({ tags }) =>
    tags.includes('Two Pointers'),
  );

  return <ProblemPage algorithms={algorithms} />;
}
