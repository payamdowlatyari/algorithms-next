import fs from 'fs';
import path from 'path';

/**
 * Represents the structure of problem data.
 * Each problem data contains information about the group, href, title, and files.
 */
export interface ProblemData {
  group: string;
  href: string;
  title: string;
  files: {
    name: string;
    href: string;
  }[];
}

/**
 * Extracts and returns problem groups and their associated problems.
 *
 * Reads the directory structure in the 'problems' folder, identifying each group
 * as a subdirectory. For each group, it gathers all TypeScript files (excluding
 * test files) and constructs a list of problems with their names and hrefs.
 *
 * @returns {ProblemData[]} An array of objects representing each problem group,
 * including the group name, href, title, and an array of problems with their
 * respective names and hrefs.
 */
export function extractGroupsAndProblems(): ProblemData[] {
  const problemsDir = path.join(process.cwd(), 'problems');
  const groups = fs
    .readdirSync(problemsDir)
    .filter((f) => fs.lstatSync(path.join(problemsDir, f)).isDirectory());

  return groups.map((group) => {
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
        })),
    };
  });
}
