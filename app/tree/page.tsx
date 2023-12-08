'use client'

import {Accordion, AccordionItem, Divider} from "@nextui-org/react";
import CodeSnippet from "../components/CodeSnippet";
import Problem from "../components/Problem";
import { algorithmsListTree } from "../constant/algorithmsList";

export default function Tree () {

    return ( 
        <Accordion variant="splitted">
            {algorithmsListTree.map((item, index) => (
                <AccordionItem key={index} aria-label={item.title} title={item.title}>
                    <Problem problem={item.problem}/>
                    <Divider className="my-4" />
                    <CodeSnippet codeSample={item.code}/>
                </AccordionItem>
            ))}
        </Accordion>
    );
}