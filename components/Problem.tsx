import fs from 'fs';
import path from 'path';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import ReactMarkdown from 'react-markdown';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { GroupLink } from './ui/links';

/**
 * Extracts the question and code from a file.
 *
 * @param {string} filePath
 * @returns {{ question: string, code: string }}
 */
export function extractQuestionAndCode(filePath: string): {
  question: string;
  code: string;
} {
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const lines = fileContent.split('\n');

  const questionLines: string[] = [];
  let endOfQuestion = 0;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed.startsWith('//')) {
      questionLines.push(trimmed.replace(/^\/\/\s?/, ''));
      endOfQuestion++;
    } else if (trimmed === '') {
      // allow empty lines between comments at top
      questionLines.push('');
      endOfQuestion++;
    } else {
      // first non-// line ends the question
      break;
    }
  }

  // Remove trailing empty lines in question block
  while (
    questionLines.length &&
    questionLines[questionLines.length - 1] === ''
  ) {
    questionLines.pop();
    endOfQuestion--;
  }

  const question = questionLines.join('\n').trim();
  const code = lines.slice(endOfQuestion).join('\n').trim();

  return { question, code };
}

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
  const filePath = path.join(process.cwd(), 'problems', group, `${slug}.ts`);
  const { code, question } = extractQuestionAndCode(filePath);
  const title = slug.replace(/([a-z])([A-Z])/g, '$1 $2');

  if (!code || !question) {
    return <div>Problem not found</div>;
  }

  return (
    <div className='my-10 mx-4'>
      <header className='flex flex-col mb-6 gap-2'>
        <h1 className='text-2xl font-bold capitalize'>{title}</h1>
        <GroupLink href={`/problems/${group}`} group={group} />
      </header>
      <article className='text-sm md:text-base md:leading-loose whitespace-pre-line mx-2 my-8'>
        <ReactMarkdown>{question}</ReactMarkdown>
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
