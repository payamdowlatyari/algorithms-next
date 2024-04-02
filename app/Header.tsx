'use client'

import { useState } from "react";
import { Navbar, NavbarContent, NavbarBrand, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";
import { topicList } from "./constant/topicList";

export default function Header() { 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return ( 
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="gap-4 font-sans" justify="start">
          <NavbarBrand>
            <Link 
              color="foreground" 
              href="/" 
              className="font-semibold"
            >
            Algorithms for Life
            </Link>
          </NavbarBrand>
          <ThemeSwitcher/>
          <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        </NavbarContent>
        <NavbarMenu className="flex flex-col items-center font-sans">
        {topicList.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground" 
              className="w-full p-1 text-2xl sm:text-4xl border-b-2 border-transparent transition ease-in-out delay-100 hover:border-current duration-500"
              href={item.href}
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
      </Navbar>
    );
}

