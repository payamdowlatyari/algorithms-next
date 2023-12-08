'use client'

import { Link } from "@nextui-org/react"

export default function Footer() {

    return (
        <div className="text-center text-xs py-2">
            Copyright © {new Date().getFullYear()} - Designed by 
            <Link className="px-1 text-xs" href="https://www.payamd.com/">payamd.com</Link>
        </div>
    )
}