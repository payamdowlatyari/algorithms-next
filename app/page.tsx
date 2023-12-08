'use client'

import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import { MdDataArray } from "react-icons/md";
import { TbBinaryTree2, TbTransformFilled, TbTournament } from "react-icons/tb";

export default function Home() {

  return (
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 m-5">

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
                <TbBinaryTree2 /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-4xl text-success">Tree</span>
            </CardFooter>
          </Card>

          <Card shadow="sm">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="dynamic" 
              color="primary"
              className="text-9xl justify-center text-primary">
                <TbTournament /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-4xl text-primary">Dynamic Programming</span>
            </CardFooter>
          </Card>

          <Card shadow="sm">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="linkedlist" 
              color="warning"
              className="text-9xl justify-center text-warning">
                <TbTransformFilled /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-4xl text-warning">Linked List</span>
            </CardFooter>
          </Card>

      </div>
  )
}


