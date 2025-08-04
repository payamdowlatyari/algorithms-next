import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { GroupLink } from '@/components/ui/links';
import {
  extractQuestionAndCode,
  Questiondata,
} from '@/utils/extractQuestionAndCode';

/**
 * Interface for the pattern page parameters.
 */
interface PatternPageParams {
  group: string;
  slug: string;
}

/**
 * Page component for a single algorithm problem.
 *
 * Fetches the problem content from a file in the problems directory.
 * The file is expected to have a comment block at the top with the
 * problem description, and then the code as the rest of the file.
 *
 * @param {PatternPageParams} params - The slug of the problem.
 */
export default function Pattern({
  params: { group, slug },
}: {
  params: PatternPageParams;
}) {
  const questionData: Questiondata | null = extractQuestionAndCode(
    group,
    slug,
    'patterns',
  );

  if (!questionData) {
    return <div>Problem not found</div>;
  }

  const { question, code, title } = questionData;

  return (
    <div className='my-10 mx-4'>
      <header className='flex flex-col mb-6 gap-2'>
        <h1 className='text-2xl font-bold capitalize'>{title}</h1>
        <GroupLink href={`/patterns/${group}`} group={group} />
      </header>
      <article className='text-sm md:text-base whitespace-pre-line mx-2 my-8 bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg'>
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => (
              <p
                className='text-sm md:text-base leading-4 md:leading-loose'
                {...props}
              />
            ),
            h3: ({ node, ...props }) => (
              <h3 className='text-lg font-bold capitalize' {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className='ml-4 list-disc leading-normal' {...props} />
            ),
          }}
        >
          {question}
        </ReactMarkdown>
      </article>
      <SyntaxHighlighter
        language='typescript'
        showLineNumbers={true}
        wrapLines={true}
        style={vscDarkPlus}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
