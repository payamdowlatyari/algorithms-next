'use client'

import { Chip } from "@nextui-org/react";

export default function Chips({tags}: any)  {

    console.log(tags)

    const getChips = (tag: any ) => {
        return <Chip>{tag}</Chip>
    }

    return (
        <div className="flex gap-2">
            {tags && tags?.map((tag: any, index: any) => {
                <span key={index}>{getChips(tag)}</span>
            })}
         </div>
    );
};