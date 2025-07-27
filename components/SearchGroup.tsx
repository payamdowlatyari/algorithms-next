import { Input } from '@/components/ui/Input';

/**
 * Props for the search input component.
 */
interface SearchGroupProps {
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A single search input field with a placeholder and an onChange handler.
 * @param {string} placeholder - The placeholder text to display in the input field.
 */
export default function SearchGroup({
  placeholder,
  onChangeHandler,
}: SearchGroupProps) {
  return (
    <Input
      type='search'
      label='Search Algorithms'
      placeholder={placeholder}
      onChange={onChangeHandler}
      className='w-full md:w-2/3'
      value={''}
    />
  );
}
