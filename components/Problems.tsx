import { GroupTopicLink, ProblemLink } from './ui/links';
import {
  extractGroupsAndProblems,
  ProblemData,
} from '@/utils/extractGroupsAndProblems';
import { Card, CardBody } from '@heroui/react';

/**
 * Page component for the problems page.
 *
 * This page displays a list of problem groups as cards that can be filtered
 * using a search input. When a group is selected, the page redirects to the
 * group page.
 */
export default function Problems() {
  const problems: ProblemData[] = extractGroupsAndProblems();

  return (
    <div className='flex flex-col gap-4'>
      {problems.map(({ group, files }) => (
        <div key={group} className='flex flex-col gap-2 my-10'>
          <GroupTopicLink href={`/problems/${group}`} group={group} />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
            {files.map(({ name, href }) => (
              <Card key={href} isHoverable isPressable>
                <CardBody>
                  <ProblemLink href={href} slug={name} />
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
