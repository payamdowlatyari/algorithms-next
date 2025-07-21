'use client';

import { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { NavbarLink } from '@/components/ui/links';

/**
 * Header component that renders a Navbar with a theme switcher,
 * a menu toggle, and a menu with links to algorithm topics.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [topicList, setTopicList] = useState([]);

  /**
   * Fetches the list of topics from the API and updates the component state.
   * If the response is not ok, logs the error to the console.
   * If the response is ok, updates the topicList state with the received data.
   * In any case, sets isMenuOpen to false after completing the request.
   */
  async function fetchData() {
    try {
      const response = await fetch('/api/topics');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setTopicList(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsMenuOpen(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Navbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      className='shadow-sm shadow-gray-500 sticky top-0 z-50 h-20'
    >
      <NavbarContent className='gap-4' justify='start'>
        <NavbarBrand>
          <Link color='foreground' href='/' className='font-bold text-xl'>
            Algorithms for Life
          </Link>
        </NavbarBrand>
        <ThemeSwitcher />
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        />
      </NavbarContent>
      {isMenuOpen && (
        <NavbarMenu
          aria-label='Topics'
          className='flex flex-col items-center justify-center gap-2'
        >
          {topicList.map(({ title, href }) => (
            <NavbarMenuItem key={title}>
              <NavbarLink href={href}>{title}</NavbarLink>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
