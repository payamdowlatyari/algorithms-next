import Problem from '@/components/Problem';

/**
 * Page component for displaying a specific algorithm problem.
 *
 * Renders the problem content for the given group and slug parameters.
 *
 * @param {Object} params - The parameters for the problem page.
 * @param {string} params.group - The group name of the problem.
 * @param {string} params.slug - The slug identifier of the problem.
 */
export default function ProblemPage({
  params: { group, slug },
}: {
  params: { group: string; slug: string };
}) {
  return (
    <div className='my-10 mx-4'>
      <Problem params={{ group, slug }} />
    </div>
  );
}
