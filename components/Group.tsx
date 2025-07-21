import { extractQuestionAndCode } from '@/utils/extractQuestionAndCode';
import { GroupLink, ProblemLink } from './ui/links';
import {
  extractGroupsAndProblems,
  ProblemData,
} from '@/utils/extractGroupsAndProblems';
import { Card, CardBody, CardFooter, Link } from '@heroui/react';
import ReactMarkdown from 'react-markdown';

/**
 * Interface for the group page parameters.
 */
interface GroupPageParams {
  group: string;
}

/**
 * Page component for a group of algorithm problems.
 *
 * Fetches the list of problems in the specified group from the filesystem
 * and displays them as links.
 *
 * @param {GroupPageParams} params - The parameters containing the group name.
 * If the group is not found, displays a "Group not found" message.
 */
export default function Group({
  params: { group },
}: {
  params: GroupPageParams;
}) {
  const problemData: ProblemData | undefined = extractGroupsAndProblems().find(
    (g) => g.group === group,
  );

  if (!problemData) {
    return <div className='my-10 mx-4'>Group not found</div>;
  }

  const { files: problemPaths, title: groupTitle } = problemData;

  return (
    <div className='flex flex-col gap-4'>
      <div className='flex justify-between items-end gap-2'>
        <h2 className='text-2xl font-bold'>{groupTitle} Problems</h2>
        <GroupLink href={`/problems`} group='All' />
      </div>
      <div className='flex flex-col gap-4 my-10'>
        {problemPaths.map(({ name, href }) => (
          <Card key={href} isHoverable>
            <CardBody>
              <ProblemLink href={href} slug={name} />
              <article className='text-xs md:text-sm whitespace-pre-line my-2'>
                {extractQuestionAndCode(group, name)?.question ? (
                  <ReactMarkdown
                    components={{
                      p: ({ node, ...props }) => (
                        <p className='my-2' {...props} />
                      ),
                    }}
                  >
                    {extractQuestionAndCode(group, name)?.question}
                  </ReactMarkdown>
                ) : (
                  <p>No description</p>
                )}
              </article>
            </CardBody>
            <CardFooter className='flex justify-end'>
              <Link size='sm' color='foreground' isBlock href={href}>
                View Solution{' '}
                <span className='ml-2' aria-hidden='true'>
                  &rarr;
                </span>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
