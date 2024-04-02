"use client";

import { 
    TbBinaryTree, 
    TbChartTreemap,
    TbBracketsContain, 
    TbListSearch, 
    TbHash, 
    TbLineHeight, 
    TbReorder, 
    TbAlphabetLatin, 
    TbTriangleSquareCircle, 
    TbTransform,
    TbPolygon,
    TbStepInto 
  } from "react-icons/tb";


const getIcon = (icon: string) => {

    switch (icon) {
        case "Data Structures":
            return <TbTriangleSquareCircle />
        case "Array":
            return <TbBracketsContain />
        case "Tree":
            return <TbBinaryTree />
        case "Dynamic Programming":
            return <TbTransform />
        case "Linked List":
            return <TbReorder />
        case "Hash Table":
            return <TbHash />
        case "String":
            return <TbAlphabetLatin />
        case "Sort":
            return <TbLineHeight />
        case "Search":
            return <TbListSearch />
        case "Recursion":
            return <TbChartTreemap />
        case "Graph":
            return <TbPolygon />
        case "Pointer":
            return <TbStepInto />
       }
}  

export function Icons({topic}: any){
   return getIcon(topic);
}


  
