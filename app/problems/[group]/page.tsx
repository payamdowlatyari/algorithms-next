import Group from '@/components/Group';

/**
 * Page component for a group of algorithm problems.
 *
 * Fetches the list of problems in the specified group from the filesystem
 * and displays them as links.
 *
 * @param {Object} params - The parameters for the page.
 * @param {string} params.group - The name of the problem group.
 */
export default function GroupPage({
  params: { group },
}: {
  params: { group: string };
}) {
  return (
    <div className='my-10 mx-4'>
      <Group params={{ group }} />
    </div>
  );
}
