'use client'

import {Card, CardBody, CardFooter, Link, Button} from "@nextui-org/react";
import { MdDataArray } from "react-icons/md";
import { TbBinaryTree } from "react-icons/tb";

export default function Home() {

  const list = [
    {
      title: "Array",
      href: "/array",
    },
    {
      title: "Tree",
      href: "tree",
    }
  ];

  return (
      <div className="gap-5 grid grid-cols-2 sm:grid-cols-4 m-5">

          <Card shadow="sm">
            <CardBody
               className="w-full m-1 mt-5"
              ><Link href="array" 
              className="text-9xl justify-center text-secondary">
                <MdDataArray /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
              <span className="text-4xl text-secondary">Array</span>
            </CardFooter>
          </Card>

          <Card shadow="sm">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="tree" 
              color="secondary"
              className="text-9xl justify-center text-success">
                <TbBinaryTree /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-4xl text-success">Tree</span>
            </CardFooter>
          </Card>

      </div>
  )
}


