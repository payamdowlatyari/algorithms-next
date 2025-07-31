import fs from 'fs';
import path from 'path';

/**
 * Represents the structure of question and code data.
 * Each question data contains the question, code, and title.
 */
export interface Questiondata {
  question: string;
  code: string;
  title: string;
}

/**
 * Extracts the question and code from a file.
 * The question is any lines that start with //, and the code is the rest of the file.
 * The question block ends when the first non-comment line is encountered.
 *
 * @param {string} group - The group name (directory).
 * @param {string} slug - The slug of the problem.
 * @returns {Questiondata | null} An object containing the question, code, and title, or null if the file is not found.
 */
export function extractQuestionAndCode(
  group: string,
  slug: string,
): Questiondata | null {
  const filePath = path.join(
    process.cwd(),
    'problems',
    group.trim(),
    `${slug.trim()}.ts`,
  );

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
    } else if (trimmed.startsWith('import') && endOfQuestion <= 1) {
      // skip imports at top of file and add to code
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

  const title = slug.replace(/([a-z])([A-Z])/g, '$1 $2');
  return { question, code, title };
}
