'use client';

import { useEffect, useState } from 'react';
import { GroupTopicLink, ProblemLink } from '@/components/ui/links';
import { ProblemData } from '@/utils/extractGroupsAndProblems';
import { Card, CardBody } from '@heroui/react';
import SearchProblem from '@/components/SearchProblem';

/**
 * Page component for the problems page.
 *
 * This page displays a list of problem groups as cards that can be filtered
 * using a search input. When a group is selected, the page redirects to the
 * group page.
 */
export default function ProblemsPage() {
  const [searchTerm, setSearchTermState] = useState('');
  const [problemGroups, setProblemGroups] = useState<ProblemData[]>([]);
  const [filteredProblemGroups, setFilteredProblemGroups] = useState<
    ProblemData[]
  >([]);

  useEffect(() => {
    const fetchProblemGroupsData = async () => {
      const response = await fetch('/api/topics');
      const { problems: problemGroupsData = [] } = await response.json();

      setProblemGroups(problemGroupsData);
      setFilteredProblemGroups(problemGroupsData.slice()); // shallow copy
    };
    fetchProblemGroupsData();
  }, []);

  useEffect(() => {
    const filterProblemGroups = () => {
      if (searchTerm.trim() === '') {
        setFilteredProblemGroups(problemGroups.slice());
        return;
      }

      // ProblemGroups should not be mutated directly, so we create a new array with updated files based on the search term
      const newFilteredGroups = problemGroups.map((group) => {
        return {
          ...group,
          files: group.files.filter((file) =>
            file.name.toLowerCase().includes(searchTerm.toLowerCase()),
          ),
        };
      });

      setFilteredProblemGroups(
        newFilteredGroups.filter((group) => group.files.length > 0),
      );
    };

    filterProblemGroups();
  }, [searchTerm, problemGroups]);

  if (filteredProblemGroups.length === 0) {
    return <div className='my-10 mx-4'>No problems found</div>;
  }

  return (
    <div className='flex flex-col gap-4'>
      <SearchProblem
        placeholder='Search Problems'
        onChangeHandler={(e) => setSearchTermState(e.target.value)}
      />
      {filteredProblemGroups.map(({ group, files }) => (
        <div key={group} className='flex flex-col gap-2 my-10'>
          <GroupTopicLink href={`/problems/${group}`} group={group} />
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
            {files.map(({ name, href }) => (
              <Card key={href} isHoverable isPressable itemRef={href}>
                <CardBody className='flex justify-center items-center h-full'>
                  <ProblemLink href={href} slug={name} />
                </CardBody>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
