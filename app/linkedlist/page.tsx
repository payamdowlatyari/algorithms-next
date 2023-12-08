'use client'

import {Accordion, AccordionItem, Divider} from "@nextui-org/react";
import CodeSnippet from "../components/CodeSnippet";
import Problem from "../components/Problem";
import { linkedList } from "../constant/algorithmsList";

export default function LinkedList () {

    return ( 
        <Accordion variant="splitted">
            {linkedList.map((item, index) => (
                <AccordionItem key={index} aria-label={item.title} title={item.title}>
                    <Problem problem={item.problem}/>
                    <Divider className="my-4" />
                    <CodeSnippet codeSample={item.code}/>
                </AccordionItem>
            ))}
        </Accordion>
    );
}