'use client'

import { Link } from "@nextui-org/react"

export default function Footer() {

    return (
        <div className="text-center text-xs py-2">
            <span className=" opacity-75">
            Copyright © {new Date().getFullYear()} - Designed by </span>
            <Link color="foreground" isExternal showAnchorIcon 
            className="px-1 text-xs font-semibold" href="https://www.payamd.com/">payamd.com</Link>
        </div>
    )
}