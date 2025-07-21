import fs from 'fs';
import path from 'path';
import { GroupLink, ProblemLink } from './ui/links';

/**
 * Page component for a group of algorithm problems.
 *
 * Fetches the list of problems in the specified group from the filesystem
 * and displays them as links.
 *
 * @param {Object} params - The parameters for the page.
 * @param {string} params.group - The name of the problem group.
 */
export default function Group({
  params: { group },
}: {
  params: { group: string };
}) {
  const groupDirectory = path.join(process.cwd(), 'problems', group);
  const files = fs.readdirSync(groupDirectory);
  const problemPaths = files
    .filter((file) => file.endsWith('.ts') && !file.includes('.test'))
    .map((file) => ({
      name: file.replace('.ts', ''),
      href: `/problems/${group}/${file.replace('.ts', '')}`,
    }));

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-end gap-2'>
        <h2 className='text-2xl font-bold'>
          {group.replace(/([a-z])([A-Z])/g, '$1 $2')} Problems
        </h2>
        <GroupLink href={`/problems`} group='All' />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
        {problemPaths.map(({ name, href }) => (
          <ProblemLink key={name} href={href} slug={name} />
        ))}
      </div>
    </div>
  );
}
