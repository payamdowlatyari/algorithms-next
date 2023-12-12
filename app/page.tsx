'use client'

import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import { MdDataArray, MdDynamicForm } from "react-icons/md";
import { TbBinaryTree, TbTransformFilled } from "react-icons/tb";
import { BiCategoryAlt, BiSort } from "react-icons/bi";
import { FaSlackHash } from "react-icons/fa";
import { VscSymbolString } from "react-icons/vsc";

export default function Home() {

  return (
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 m-5 font-mono">

          <Card shadow="sm" className="transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="datastructure" 
              color="warning"
              className="text-9xl justify-center text-foreground">
                <BiCategoryAlt /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-3xl text-foreground text-center">Data Structures</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="transition ease-in-out hover:scale-105 duration-300">
            <CardBody
               className="w-full m-1 mt-5"
              ><Link href="array" 
              className="text-9xl justify-center text-secondary">
                <MdDataArray /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
              <span className="text-3xl text-secondary text-center">Array</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="tree" 
              color="secondary"
              className="text-9xl justify-center text-success">
                <TbBinaryTree /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-3xl text-success text-center">Tree</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="dynamic" 
              color="primary"
              className="text-9xl justify-center text-primary">
                <MdDynamicForm /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-3xl text-primary text-center">Dynamic Programming</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="linkedlist" 
              color="warning"
              className="text-9xl justify-center text-warning">
                <TbTransformFilled /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-3xl text-warning text-center">Linked List</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="hashtable" 
              className="text-9xl justify-center text-red-500">
                <FaSlackHash /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-3xl text-red-500 text-center">Hash Table</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="string" 
              className="text-9xl justify-center text-pink-500">
                <VscSymbolString /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-3xl text-pink-500 text-center">String</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="sort" 
              className="text-9xl justify-center text-cyan-500">
                <BiSort /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-3xl text-cyan-500 text-center">Sort</span>
            </CardFooter>
          </Card>

      </div>
  )
}


