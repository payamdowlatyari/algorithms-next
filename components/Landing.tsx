'use client';

import { Card, CardBody, CardFooter, Link } from '@heroui/react';
import { getIcon, getPatternIcon } from '@/components/Icons';
import { useEffect, useState } from 'react';
import SearchGroup from '@/components/SearchGroup';
import { LoaderFour } from '@/components/ui/loaders';
import { Topics } from '@/app/lib/interfaces';

/**
 * Renders a list of topics as cards that can be filtered using a search input.
 *
 * This component maintains a search field state to filter the displayed topics
 * based on user input. When the search field changes, the list of topics is
 * filtered to only include those whose title includes the search term.
 */
export default function Landing() {
  const [searchField, setSearchField] = useState('');
  const [topicList, setTopicList] = useState<Topics>({
    topics: [],
    problems: [],
    patterns: [],
  });
  const [filteredGroups, setFilteredGroups] = useState<Topics>({
    topics: [],
    problems: [],
    patterns: [],
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const newFilteredGroups = {
      topics: topicList.topics.filter((group) => {
        return group.title.toLowerCase().includes(searchField);
      }),
      problems: topicList.problems.filter((group) => {
        return group.title.toLowerCase().includes(searchField);
      }),
      patterns: topicList.patterns.filter((group) => {
        return group.title.toLowerCase().includes(searchField);
      }),
    };

    setFilteredGroups(newFilteredGroups ? newFilteredGroups : topicList);
  }, [searchField, topicList]);

  /**
   * Fetches the list of topics from the API and updates the component state.
   * If the response is not ok, logs the error to the console.
   * If the response is ok, updates the topicList state with the received data.
   * In any case, sets isLoading to false after completing the request.
   */
  async function fetchData() {
    try {
      setIsLoading(true);
      const response = await fetch('/api/topics');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTopicList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  /**
   * Handles the change event for the search input, updating the search field state.
   *
   * @param event - The input change event containing the new value for the search field.
   */
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  if (isLoading || !topicList) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <LoaderFour text='Loading topics...' />
      </div>
    );
  }

  return (
    <div className='gap-5 flex flex-wrap justify-center items-center'>
      <div className='w-full m-1 md:m-2 flex flex-wrap md:flex-nowrap justify-between items-center gap-5'>
        <SearchGroup
          onChangeHandler={onSearchChange}
          placeholder={'Search algorithms by topic...'}
        />{' '}
        <div className='min-w-[200px] w-full flex justify-end space-x-2'>
          {topicList.topics.length > 0 &&
            topicList.topics.map((item, index) => (
              <Link key={index} href={item.href || '#'} isBlock color='primary'>
                {item.title}
              </Link>
            ))}
        </div>
      </div>
      <div className='w-full my-10'>
        <h2 className='text-2xl text-foreground my-5'>
          Data Structures and Algorithms
        </h2>
        <div className='w-full flex flex-wrap justify-center gap-2 md:gap-5 my-5'>
          {filteredGroups.problems.map((item, index) => (
            <Link key={index} href={item.href || '#'}>
              <Card
                isHoverable
                isPressable
                shadow='sm'
                className='flex justify-center items-center w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60'
              >
                <CardBody className='text-8xl items-center text-foreground mt-2'>
                  {getIcon(item.title)}
                </CardBody>
                <CardFooter className='justify-center mb-5'>
                  <span className='text-2xl text-foreground text-center'>
                    {item.title}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <div className='w-full my-10'>
        <h2 className='text-2xl text-foreground my-5'>
          Software Design Patterns
        </h2>
        <div className='w-full flex flex-wrap justify-center gap-2 md:gap-5 my-5'>
          {filteredGroups.patterns.map((item, index) => (
            <Link key={index} href={item.href || '#'}>
              <Card
                isHoverable
                isPressable
                shadow='sm'
                className='flex justify-center items-center w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60'
              >
                <CardBody className='text-8xl items-center text-foreground mt-2'>
                  {getPatternIcon(item.title)}
                </CardBody>
                <CardFooter className='justify-center mb-5'>
                  <span className='text-2xl text-foreground text-center'>
                    {item.title}
                  </span>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
