'use client'

import {Navbar, NavbarContent, NavbarItem, Link} from "@nextui-org/react";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

export default function Header() { 
    return ( 
      <Navbar>
        <NavbarContent className="gap-4" justify="start">
        <NavbarItem>
            <Link color="foreground" href="/" className="font-semibold uppercase">
            Algorithms
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link isBlock color="foreground" href="/array">
              Array
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link isBlock color="foreground" href="/tree">
              Tree
            </Link>
          </NavbarItem>
        </NavbarContent>
        <ThemeSwitcher/>
      </Navbar>
    );
}

