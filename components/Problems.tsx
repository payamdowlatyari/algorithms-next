"use client";

import { Card, CardBody, CardFooter, Link } from "@nextui-org/react";

import { topicList } from "@/constant/topicList";
import { Icons } from "./Icons";
import { useEffect, useState } from "react";
import SearchGroup from "./SearchGroup";

/**
 * Renders a list of topics as cards that can be filtered using a search input.
 *
 * This component maintains a search field state to filter the displayed topics
 * based on user input. When the search field changes, the list of topics is
 * filtered to only include those whose title includes the search term.
 */
export default function Problems() {
  const [searchField, setSearchField] = useState("");
  const [filteredGroups, setFilteredGroups] = useState(topicList);

  useEffect(() => {
    const newFilteredGroups = topicList.filter(group => {
      return group.title.toLowerCase().includes(searchField);
    });

    setFilteredGroups(newFilteredGroups);
  }, [searchField]);

  /**
   * Handles the change event for the search input, updating the search field state.
   *
   * @param event - The input change event containing the new value for the search field.
   */
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="gap-5 flex flex-wrap justify-center m-5">
      <div className="m-1 md:m-5 w-full">
        <SearchGroup
          onChangeHandler={onSearchChange}
          placeholder={"Search..."}
        />{" "}
      </div>
      {filteredGroups.map((item, index) => (
        <Link key={index} href={item.href || "#"}>
          <Card
            shadow="sm"
            className="flex justify-center w-60 h-60 transition ease-in-out hover:scale-105 duration-300">
            <CardBody className="text-8xl items-center text-foreground mt-2">
              <Icons topic={item.title} />
            </CardBody>
            <CardFooter className="justify-center mb-5">
              <span className="text-2xl text-foreground text-center">
                {item.title}
              </span>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </div>
  );
}
