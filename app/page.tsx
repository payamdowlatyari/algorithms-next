'use client'

import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";
import { MdDataArray, MdDynamicForm, MdOutlineViewArray} from "react-icons/md";
import { TbBinaryTree, TbTransformFilled, TbTournament, TbLayoutBoardSplit} from "react-icons/tb";
import { BiCategoryAlt } from "react-icons/bi";
export default function Home() {

  return (
      <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 m-5">

          <Card shadow="sm">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="datastructure" 
              color="warning"
              className="text-9xl justify-center text-foreground">
                <BiCategoryAlt /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-4xl text-foreground text-center">Data Structures</span>
            </CardFooter>
          </Card>

          <Card shadow="sm">
            <CardBody
               className="w-full m-1 mt-5"
              ><Link href="array" 
              className="text-9xl justify-center text-secondary">
                <MdDataArray /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
              <span className="text-4xl text-secondary text-center">Array</span>
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
            <span className="text-4xl text-success text-center">Tree</span>
            </CardFooter>
          </Card>

          <Card shadow="sm">
            <CardBody
              className="w-full m-1 mt-5"
              ><Link href="dynamic" 
              color="primary"
              className="text-9xl justify-center text-primary">
                <MdDynamicForm /> 
                </Link>
            </CardBody>
            <CardFooter className="justify-center mb-5">
            <span className="text-4xl text-primary text-center">Dynamic Programming</span>
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
            <span className="text-4xl text-warning text-center">Linked List</span>
            </CardFooter>
          </Card>

      </div>
  )
}


