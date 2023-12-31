'use client'

import { useState } from "react";
import { Navbar, NavbarContent, NavbarBrand, Link, NavbarMenuToggle, NavbarMenu, NavbarMenuItem } from "@nextui-org/react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Header() { 

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuItems = [
    {
      title: "Data Structures",
      href: "/datastructure"
    },
    {
      title: "Array",
      href : "/array"
    },
    {
      title: "Tree",
      href: "/tree"
    },
    {
      title: "Dynamic Programming",
      href : "/dynamic"
    },
    {
      title: "Linked List",
      href: "/linkedlist"
    },
    {
      title: "Hash Table",
      href: "/hashtable"
    },
    {
      title: "String",
      href: "/string"
    },
    {
      title: "Sort",
      href: "/sort"
    },
    {
      title: "Search",
      href: "/search"
    },
    {
      title: "Recursion",
      href: "/recursion"
    },
    {
      title: "Graph",
      href: "/graph"
    },
    {
      title: "Pointer",
      href: "/pointer"
    },
  ];
    return ( 
      <Navbar onMenuOpenChange={setIsMenuOpen}>
        <NavbarContent className="gap-4 font-mono" justify="start">
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
        <NavbarMenu className="items-center font-mono">
        {menuItems.map((item, index) => (
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

