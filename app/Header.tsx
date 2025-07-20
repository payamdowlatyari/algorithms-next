'use client';

import { useState } from 'react';
import {
  Navbar,
  NavbarContent,
  NavbarBrand,
  Link,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarItem,
} from '@nextui-org/react';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { topicList } from '@/constant/topicList';

/**
 * Header component that renders a Navbar with a theme switcher,
 * a menu toggle, and a menu with links to algorithm topics.
 */
export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <Link
                color='foreground'
                className='w-full p-1 text-xl md:text-2xl border-b-2 border-transparent transition ease-in-out delay-100 hover:border-current duration-500'
                href={href}
              >
                {title}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      )}
    </Navbar>
  );
}
