'use client'

import {Accordion, AccordionItem, Chip, Divider} from "@nextui-org/react";
import CodeSnippet from "../components/CodeSnippet";
import Problem from "../components/Problem";
import { algorithmsList } from "../constant/algorithmsList";

export default function Sort() {

    const isSort = (item: any) => {
        return item.tags.includes('Sort') 
    }
    
    const getChip = (tag: any ) => {
        return <Chip size="sm" color="default" variant="flat" className="mt-1 mr-1">{tag}</Chip>
    }

    return ( 
        <Accordion variant="splitted" className="font-mono">
            {algorithmsList.filter(isSort).map((item, index) => (
                <AccordionItem key={index} aria-label={item.title} title={item.title} subtitle={item.tags.map(tag => getChip(tag))}>
                    <Problem problem={item.problem}/>
                    <Divider className="my-4" />
                    <CodeSnippet codeSample={item.code}/>
                </AccordionItem>
            ))}
        </Accordion>
    );
}