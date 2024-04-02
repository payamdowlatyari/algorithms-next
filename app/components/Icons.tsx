import { FcTemplate, FcNumericalSorting12, FcFinePrint, FcGenealogy, FcOrgUnit, FcCandleSticks, FcWorkflow, FcGrid, FcCollect, FcFeedIn, FcRadarPlot, FcTimeline } from "react-icons/fc";

const getIcon = (icon: string) => {

    switch (icon) {
        case "Data Structures":
            return <FcOrgUnit />
        case "Array":
            return <FcGrid />
        case "Tree":
            return <FcGenealogy />
        case "Dynamic Programming":
            return <FcCandleSticks />
        case "Linked List":
            return <FcWorkflow />
        case "Hash Table":
            return <FcTimeline />
        case "String":
            return <FcRadarPlot />
        case "Sort":
            return <FcNumericalSorting12 />
        case "Search":
            return <FcFinePrint />
        case "Recursion":
            return <FcFeedIn />
        case "Template":
            return <FcTemplate />
        case "Pointer":
            return <FcCollect />
       }
}  

export function Icons({topic}: any){
   return getIcon(topic);
}


  
