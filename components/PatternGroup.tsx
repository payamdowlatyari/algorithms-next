import { extractQuestionAndCode } from '@/utils/extractQuestionAndCode';
import { GroupLink, ProblemLink, SolutionLink } from '@/components/ui/links';
import {
  extractGroupsAndProblems,
  ProblemData,
} from '@/utils/extractGroupsAndProblems';
import { Card, CardBody, CardFooter } from '@heroui/react';
import ReactMarkdown from 'react-markdown';

/**
 * Interface for the pattern group page parameters.
 */
interface PatternGroupPageParams {
  group: string;
}

/**
 * Page component for a group of algorithm problems.
 *
 * Fetches the list of problems in the specified group from the filesystem
 * and displays them as links.
 *
 * @param {PatternGroupPageParams} props - The props containing the group name.
 * If the group is not found, displays a "Group not found" message.
 */
export default function PatternGroup({
  params: { group },
}: {
  params: PatternGroupPageParams;
}) {
  const problemData: ProblemData | undefined = extractGroupsAndProblems(
    'patterns',
  ).find((g) => g.group === group);

  if (!problemData) {
    return <div className='my-10 mx-4'>Group not found</div>;
  }

  const { files: problemPaths, title: groupTitle } = problemData;

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-end gap-2'>
        <h2 className='text-2xl font-bold'>{groupTitle} Patterns</h2>
        <GroupLink href={`/patterns`} group='All' />
      </div>
      <div className='flex flex-col gap-4 my-10'>
        {problemPaths.map(({ name, href }) => (
          <Card key={href} isHoverable itemRef={href}>
            <CardBody>
              <ProblemLink href={href} slug={name} />
              <article className='text-xs md:text-sm whitespace-pre-line my-2'>
                {extractQuestionAndCode(group, name, 'patterns')?.question ? (
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => (
                        <p className='my-2' {...props} />
                      ),
                    }}
                  >
                    {extractQuestionAndCode(group, name, 'patterns')?.question}
                  </ReactMarkdown>
                ) : (
                  <p>No description</p>
                )}
              </article>
            </CardBody>
            <CardFooter className='flex justify-end'>
              <SolutionLink href={href} />
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
