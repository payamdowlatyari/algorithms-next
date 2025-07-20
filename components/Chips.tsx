import { Chip } from '@nextui-org/react';

/**
 * A functional component that renders a list of tags as Chip components.
 * @param {Object} props - The component properties.
 * @param {string[]} props.tags - An array of strings representing the tags to be displayed.
 */
export default function Chips({ tags }: { tags: string[] }) {
  return (
    <div className='flex gap-2'>
      {tags?.map((tag, index) => (
        <Chip key={index}>{tag}</Chip>
      ))}
    </div>
  );
}
