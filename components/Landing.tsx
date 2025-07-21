'use client';

import { Card, CardBody, CardFooter, Link, Spinner } from '@heroui/react';
import { Icons } from './Icons';
import { useEffect, useState } from 'react';
import SearchGroup from './SearchGroup';

/**
 * Represents a topic with a title and a link.
 */
interface Topic {
  title: string;
  href: string;
}

/**
 * Renders a list of topics as cards that can be filtered using a search input.
 *
 * This component maintains a search field state to filter the displayed topics
 * based on user input. When the search field changes, the list of topics is
 * filtered to only include those whose title includes the search term.
 */
export default function Landing() {
  const [searchField, setSearchField] = useState('');
  const [topicList, setTopicList] = useState<Topic[]>([]);
  const [filteredGroups, setFilteredGroups] = useState<Topic[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const newFilteredGroups = topicList.filter((group) => {
      return group.title.toLowerCase().includes(searchField);
    });

    setFilteredGroups(newFilteredGroups);
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
        <Spinner label='Loading topics...' color='current' size='lg' />
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
        <div className='min-w-[200px] w-full flex justify-end'>
          <Link
            href='/problems'
            className='text-foreground block text-center text-sm md:text-base'
          >
            View all
          </Link>
        </div>
      </div>
      <div className='w-full flex flex-wrap justify-center gap-2 md:gap-5'>
        {filteredGroups.map((item, index) => (
          <Link key={index} href={item.href || '#'}>
            <Card
              shadow='sm'
              className='flex justify-center items-center w-40 h-40 md:w-52 md:h-52 lg:w-60 lg:h-60 ease-in-out hover:scale-105 duration-300'
            >
              <CardBody className='text-8xl items-center text-foreground mt-2'>
                <Icons topic={item.title} />
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
  );
}
