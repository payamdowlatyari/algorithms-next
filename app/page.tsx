'use client'

import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";

import { topicList } from "./constant/topicList";
import { Icons } from "./components/Icons";

const displayTopics = () => {

  return (
          <>
            {topicList.map((item, index) => (
              <Link key={index} href={item.href}>
                <Card shadow="sm" className="flex justify-center w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
                  <CardBody className="text-8xl items-center text-foreground mt-2">
                    <Icons topic={item.title}/>
                  </CardBody>
                  <CardFooter className="justify-center mb-5">
                    <span className="text-2xl text-foreground text-center">{item.title}</span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </>
      )
}

export default function Home() {

  return (
      <div className="gap-5 flex flex-wrap justify-center m-5 font-mono">
        {displayTopics()}
      </div>
  )
}


