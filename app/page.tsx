'use client'

import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import { 
  TbBinaryTree, 
  TbChartTreemap,
  TbBracketsContain, 
  TbListSearch, 
  TbHash, 
  TbLineHeight, 
  TbReorder, 
  TbAlphabetLatin, 
  TbTriangleSquareCircle, 
  TbTransform,
  TbPolygon,
  TbStepInto 
} from "react-icons/tb";

export default function Home() {

  return (
      <div className="gap-5 flex flex-wrap justify-center m-5 font-mono">

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="mt-1"
              ><Link href="datastructure" 
              className="text-8xl justify-center text-foreground">
                <TbTriangleSquareCircle /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-2xl text-foreground text-center">Data Structures</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
               className="mt-1"
              ><Link href="array" 
              className="text-8xl justify-center text-secondary">
                <TbBracketsContain /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
              <span className="text-2xl text-secondary text-center">Array</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="mt-1"
              ><Link href="tree" 
              className="text-8xl justify-center text-success">
                <TbBinaryTree /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-2xl text-success text-center">Tree</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="mt-1"
              ><Link href="dynamic" 
              className="text-8xl justify-center text-primary">
                <TbTransform /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-2xl text-primary text-center">Dynamic Programming</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="mt-1"
              ><Link href="linkedlist" 
              className="text-8xl justify-center text-warning">
                <TbReorder /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-2xl text-warning text-center">Linked List</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="mt-1"
              ><Link href="hashtable" 
              className="text-8xl justify-center text-red-500">
                <TbHash /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-2xl text-red-500 text-center">Hash Table</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="mt-1"
              ><Link href="string" 
              className="text-8xl justify-center text-pink-500">
                <TbAlphabetLatin /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-2xl text-pink-500 text-center">String</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="mt-1"
              ><Link href="sort" 
              className="text-8xl justify-center text-cyan-500">
                <TbLineHeight /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-2xl text-cyan-500 text-center">Sort</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="mt-1"
              ><Link href="search" 
              className="text-8xl justify-center text-orange-500">
                <TbListSearch /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-2xl text-orange-500 text-center">Search</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="mt-1"
              ><Link href="recursion" 
              className="text-8xl justify-center text-yellow-400">
                <TbChartTreemap /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-2xl text-yellow-400 text-center">Recursion</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="mt-1"
              ><Link href="graph" 
              className="text-8xl justify-center text-indigo-500">
                <TbPolygon /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-2xl text-indigo-500 text-center">Graph</span>
            </CardFooter>
          </Card>

          <Card shadow="sm" className="w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody
              className="mt-1"
              ><Link href="pointer" 
              className="text-8xl justify-center text-sky-500">
                <TbStepInto /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-2xl text-sky-500 text-center">Pointer</span>
            </CardFooter>
          </Card>

      </div>
  )
}


