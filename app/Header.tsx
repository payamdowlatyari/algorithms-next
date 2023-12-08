'use client'

import { useState } from "react";
import { Navbar, NavbarContent, NavbarBrand, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Header() { 

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      title: "Array",
      href : "/array"
    },
    {
      title: "Tree",
      href: "tree"
    },
    {
      title: "Dynamic Programming",
      href : "/dynamic"
    },
    {
      title: "Linked List",
      href: "linkedlist"
    }
  ];
    return ( 
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="gap-4" justify="start">
        <NavbarBrand>
            <Link 
            color="foreground" 
            href="/" 
            className="font-semibold uppercase"
            >
            Algorithms
            </Link>
          </NavbarBrand>
          <ThemeSwitcher/>
          <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
        </NavbarContent>
        <NavbarMenu className="items-center">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color="foreground" 
              className="w-full text-2xl sm:text-4xl"
              href={item.href}
              size="lg"
            >
              {item.title}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
     
      </Navbar>
    );
}

