import { Chip } from "@nextui-org/react";

export default function Chips({tags}: {tags: string []})  {

    const getChips = (tag: string ) => {
        return <Chip>{tag}</Chip>
    }

    return (
        <div className="flex gap-2">
            <>
            {tags && tags?.map((tag: any, index: any) => {
                <span key={index}>{getChips(tag)}</span>
            })}
            </>
         </div>
    );
};