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

export const patternIcons = [
  {
    category: 'Behavioral',
    name: 'ChainOfResponsibility',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Behavioral',
    name: 'Command',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Behavioral',
    name: 'Iterator',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Behavioral',
    name: 'Mediator',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Behavioral',
    name: 'Memento',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Behavioral',
    name: 'Observer',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Behavioral',
    name: 'State',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Behavioral',
    name: 'Strategy',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Behavioral',
    name: 'TemplateMethod',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Behavioral',
    name: 'Visitor',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Creational',
    name: 'AbstractFactory',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Creational',
    name: 'Builder',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },

  {
    category: 'Creational',
    name: 'FactoryMethod',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Creational',
    name: 'Prototype',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Creational',
    name: 'Singleton',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Structural',
    name: 'Adapter',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Structural',
    name: 'Bridge',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Structural',
    name: 'Composite',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Structural',
    name: 'Decorator',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Structural',
    name: 'Facade',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Structural',
    name: 'Flyweight',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
  {
    category: 'Structural',
    name: 'Proxy',
    icon: (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-12 w-12'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
        strokeWidth={2}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
        />
      </svg>
    ),
  },
];

export const getPatternIcon = (name: string) => {
  const pattern = patternIcons.find((icon) => icon.name === name);
  return pattern ? pattern.icon : null;
};
