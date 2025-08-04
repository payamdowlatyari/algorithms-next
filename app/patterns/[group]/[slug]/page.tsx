import Pattern from '@/components/Pattern';

/**
 * Page component for a single algorithm problem.
 *
 * Fetches the problem content from a file in the problems directory.
 */
export default function Page({
  params,
}: {
  params: { group: string; slug: string };
}) {
  return <Pattern params={params} />;
}
