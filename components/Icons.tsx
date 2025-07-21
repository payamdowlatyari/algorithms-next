import {
  FcTemplate,
  FcNumericalSorting12,
  FcFinePrint,
  FcGenealogy,
  FcOrgUnit,
  FcWorkflow,
  FcCollect,
  FcFeedIn,
  FcRadarPlot,
  FcNeutralTrading,
  FcMultipleInputs,
  FcParallelTasks,
  FcDataSheet,
  FcInfo,
} from 'react-icons/fc';
import { AiOutlineFieldString } from 'react-icons/ai';

/**
 * Returns a React component that represents an icon for a given topic, or null
 * if no icon is available for the topic.
 *
 * @param {string} icon The topic for which to return an icon.
 */
const getIcon = (icon: string) => {
  switch (icon) {
    case 'Data Structures':
      return <FcOrgUnit />;
    case 'Array':
      return <FcDataSheet />;
    case 'Tree':
      return <FcGenealogy />;
    case 'Dynamic Programming':
      return <FcMultipleInputs />;
    case 'Linked List':
      return <FcWorkflow />;
    case 'Hash Table':
      return <FcParallelTasks />;
    case 'String':
      return <AiOutlineFieldString />;
    case 'Sort':
      return <FcNumericalSorting12 />;
    case 'Search':
      return <FcFinePrint />;
    case 'Recursion':
      return <FcFeedIn />;
    case 'Template':
      return <FcTemplate />;
    case 'Pointer':
      return <FcCollect />;
    case 'Graph':
      return <FcRadarPlot />;
    case 'Sliding Window':
      return <FcNeutralTrading />;
    case 'Other':
      return <FcInfo />;
    default:
      return null;
  }
};

/**
 * Returns a React component that represents an icon for a given topic, or null
 * if no icon is available for the topic.
 *
 * @param {string} topic - The name of the topic.
 */
export function Icons({ topic }: { topic: string }) {
  return getIcon(topic);
}
