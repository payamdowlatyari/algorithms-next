import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';
import { Topic, TopicData } from '@/app/lib/interfaces';

const topics: Topic[] = [
  {
    title: 'Problems',
    href: '/problems',
  },
  {
    title: 'Patterns',
    href: '/patterns',
  },
];

/**
 * Returns a list of problems and patterns, grouped by their respective directories.
 * The result is an array of objects with properties group, href, title, and files.
 * The group property is the name of the directory, the href property is the route
 * to the group, the title property is the title of the group, and the files property
 * is an array of objects with properties name and href. The name property is the name
 * of the file without the extension, and the href property is the route to the file.
 * Only files with the .ts extension and without the word "test" in their name are included.
 * The directories are read from the directory specified by the dir parameter.
 * @param {string} dir - The directory to read from.
 * @returns {Promise<TopicData[]>} A Promise that resolves to an array of TopicData objects.
 */
async function getDataCategorized(dir: string): Promise<TopicData[]> {
  const problemsDir = path.join(process.cwd(), dir);

  const groups = await fs.promises.readdir(problemsDir, {
    withFileTypes: true,
  });
  const directories = groups
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

  const problems = await Promise.all(
    directories.map(async (group) => {
      const files = await fs.promises.readdir(path.join(problemsDir, group));

      return {
        group,
        href: `/${dir}/${group}`,
        title: group.replace(/([a-z])([A-Z])/g, '$1 $2'),
        files: await Promise.all(
          files
            .filter((f) => f.endsWith('.ts') && !f.includes('.test'))
            .map(async (file) => ({
              name: file.replace('.ts', ''),
              href: `/${dir}/${group}/${file.replace('.ts', '')}`,
            })),
        ),
      };
    }),
  );

  return problems;
}

/**
 * This API route returns the list of problems grouped by topic.
 *
 * @returns A JSON response containing an array of topics, and problems and patterns grouped by topic.
 */
export async function GET(): Promise<NextResponse> {
  return NextResponse.json({
    topics,
    problems: (await getDataCategorized('problems')) || [],
    patterns: (await getDataCategorized('patterns')) || [],
  });
}
