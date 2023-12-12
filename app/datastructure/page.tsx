'use client'

import {Accordion, AccordionItem, Divider} from "@nextui-org/react";
import CodeSnippet from "../components/CodeSnippet";
import Problem from "../components/Problem";
import { algorithmsList } from "../constant/algorithmsList";

export default function DynamicProgramming () {

    const isDataStructure = (item: any) => {
        return item.tags.includes('Data Structure') 
    }

    return ( 
        <Accordion variant="splitted" className="font-mono">
            {algorithmsList.filter(isDataStructure).map((item, index) => (
                <AccordionItem key={index} aria-label={item.title} title={item.title}>
                    <Problem problem={item.problem}/>
                    <Divider className="my-4" />
                    <CodeSnippet codeSample={item.code}/>
                </AccordionItem>
            ))}
        </Accordion>
    );
}