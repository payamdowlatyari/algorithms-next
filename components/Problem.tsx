import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { GroupLink } from './ui/links';
import {
  extractQuestionAndCode,
  Questiondata,
} from '@/utils/extractQuestionAndCode';

/**
 * Interface for the problem page parameters.
 */
interface ProblemPageParams {
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
 * @param {ProblemPageParams} params - The slug of the problem.
 */
export default function Problem({
  params: { group, slug },
}: {
  params: ProblemPageParams;
}) {
  const questionData: Questiondata | null = extractQuestionAndCode(group, slug);

  if (!questionData) {
    return <div>Problem not found</div>;
  }

  const { question, code, title } = questionData;

  return (
    <div className='my-10 mx-4'>
      <header className='flex flex-col mb-6 gap-2'>
        <h1 className='text-2xl font-bold capitalize'>{title}</h1>
        <GroupLink href={`/problems/${group}`} group={group} />
      </header>
      <article className='text-sm md:text-base md:leading-loose whitespace-pre-line mx-2 my-8'>
        <ReactMarkdown
          components={{
            p: ({ node, ...props }) => (
              <p className='text-sm md:text-base' {...props} />
            ),
          }}
        >
          {question}
        </ReactMarkdown>
      </article>
      <SyntaxHighlighter
        language='typescript'
        showLineNumbers
        wrapLongLines
        style={vscDarkPlus}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}
