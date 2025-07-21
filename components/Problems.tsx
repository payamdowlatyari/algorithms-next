import fs from 'fs';
import path from 'path';
import { GroupTopicLink, ProblemLink } from './ui/links';

/**
 * Page component for the problems page.
 *
 * This page displays a list of problem groups as cards that can be filtered
 * using a search input. When a group is selected, the page redirects to the
 * group page.
 *
 * @returns A JSX element for the problems page.
 */
export default function Problems() {
  const problemsDir = path.join(process.cwd(), 'problems');
  const groups = fs
    .readdirSync(problemsDir)
    .filter((f) => fs.lstatSync(path.join(problemsDir, f)).isDirectory());

  const problems = groups.map((group) => {
    const files = fs.readdirSync(path.join(problemsDir, group));
    return {
      group,
      files: files
        .filter((f) => f.endsWith('.ts') && !f.includes('.test'))
        .map((file) => ({
          name: file.replace('.ts', ''),
          href: `/problems/${group}/${file.replace('.ts', '')}`,
        })),
    };
  });

  return (
    <div className='flex flex-col gap-4'>
      {problems.map(({ group, files }) => (
        <div key={group} className='flex flex-col gap-2 my-10'>
          <GroupTopicLink href={`/problems/${group}`} group={group} />
          <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
            {files.map(({ name, href }) => (
              <li key={href}>
                <ProblemLink href={href} slug={name} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
