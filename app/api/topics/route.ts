import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

/**
 * This API route returns the list of problems grouped by topic.
 *
 * @returns An array of objects, each with a group, href, and title, and an array of objects containing the name and href of each problem in the group.
 */
export async function GET(): Promise<NextResponse> {
  const problemsDir = path.join(process.cwd(), 'problems');
  const groups = fs
    .readdirSync(problemsDir)
    .filter((f) => fs.lstatSync(path.join(problemsDir, f)).isDirectory());

  const problems = groups.map((group) => {
    const files = fs.readdirSync(path.join(problemsDir, group));
    return {
      group,
      href: `/problems/${group}`,
      title: group.replace(/([a-z])([A-Z])/g, '$1 $2'),
      files: files
        .filter((f) => f.endsWith('.ts') && !f.includes('.test'))
        .map((file) => ({
          name: file.replace('.ts', ''),
          href: `/problems/${group}/${file.replace('.ts', '')}`,
          content: fs.readFileSync(
            path.join(problemsDir, group, file),
            'utf-8',
          ),
        })),
    };
  });

  return NextResponse.json(problems);
}
