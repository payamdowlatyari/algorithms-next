'use client'

import {Accordion, AccordionItem, Divider} from "@nextui-org/react";
import CodeSnippet from "../components/CodeSnippet";
import Problem from "../components/Problem";
import { algorithmsList } from "../constant/algorithmsList";

export default function Array () {

    const isArray = (item: any) => {
        return item.tags.includes('Array') 
    }

    return ( 
        <Accordion variant="splitted" className="font-mono">
            {algorithmsList.filter(isArray).map((item, index) => (
                <AccordionItem key={index} aria-label={item.title} title={item.title}>
                    <Problem problem={item.problem}/>
                    <Divider className="my-2" />
                    <CodeSnippet codeSample={item.code}/>
                </AccordionItem>
            ))}
        </Accordion>
    );
}