import { GroupTopicLink, ProblemLink } from '@/components/ui/links';
import {
  extractGroupsAndProblems,
  ProblemData,
} from '@/utils/extractGroupsAndProblems';
import { Card, CardBody } from '@heroui/react';

/**
 * Page component for the patterns page.
 *
 * This page displays a list of problem groups as cards that can be filtered
 * using a search input. When a group is selected, the page redirects to the
 * group page.
 */
export default function Patterns() {
  const patterns: ProblemData[] = extractGroupsAndProblems('patterns');

  if (patterns.length === 0) {
    return <div className='my-10 mx-4'>No patterns found</div>;
  }

  return (
    <div className='flex flex-col gap-4'>
      {patterns.map(({ group, files }) => (
        <div key={group} className='flex flex-col gap-2 my-10'>
          <GroupTopicLink href={`/patterns/${group}`} group={group} />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
            {files.map(({ name, href }) => (
              <Card key={href} isHoverable isPressable itemRef={href}>
                <CardBody className='flex justify-center items-center h-full'>
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
