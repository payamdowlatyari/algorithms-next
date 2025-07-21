// 'use client';

// import { Accordion, AccordionItem, Chip, Divider } from '@nextui-org/react';
// import CodeSnippet from '@/components/CodeSnippet';
// import Problem from '@/components/Problem';
// import { topicList } from '@/constant/topicList';
// import Link from 'next/link';

// /**
//  * Given an array of tags, returns an array of links to topics.
//  *
//  * @param {string[]} tags - An array of tags.
//  * @returns An array of links to topics.
//  */
// const getTopics = (tags: string[]) => {
//   return tags
//     .map((tag) => {
//       const topic = topicList.find(
//         (topic) => topic.title.includes(tag) || tag.includes(topic.title),
//       );
//       if (!topic) return null;
//       return (
//         <Link
//           href={topic.href}
//           key={tag}
//           className='z-10 cursor-pointer hover:scale-105 ease-in-out duration-300'
//         >
//           <Chip size='sm'>{topic.title}</Chip>
//         </Link>
//       );
//     })
//     .filter(Boolean);
// };

// interface ProblemPageProps {
//   algorithms: {
//     title: string;
//     problem: string;
//     code: string;
//     tags: string[];
//   }[];
// }

// /**
//  * Renders a list of algorithms as an accordion with each algorithm's
//  * details including title, problem description, code sample, and tags.
//  *
//  * @param {ProblemPageProps} algorithms - An array of algorithm objects containing title, problem, code, and tags.
//  */
// export default function ProblemPage({ algorithms }: ProblemPageProps) {
//   return (
//     <Accordion variant='splitted'>
//       {algorithms.map(({ title, problem, code, tags }, index) => (
//         <AccordionItem key={index} aria-label={title} title={title}>
//           <div className='flex flex-col'>
//             <div className='flex flex-wrap gap-2 mb-4'>{getTopics(tags)}</div>
//             <Problem problem={problem} />
//             <Divider className='my-4' />
//             <CodeSnippet codeSample={code} />
//           </div>
//         </AccordionItem>
//       ))}
//     </Accordion>
//   );
// }
