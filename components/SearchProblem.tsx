import { Input } from '@/components/ui/Input';

/**
 * Props for the search input component.
 */
interface SearchProblemProps {
  placeholder: string;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

/**
 * A single search input field with a placeholder and an onChange handler.
 * @param {string} placeholder - The placeholder text to display in the input field.
 */
export default function SearchProblem({
  placeholder,
  onChangeHandler,
}: SearchProblemProps) {
  return (
    <Input
      type='search'
      label='Search Problems'
      placeholder={placeholder}
      onChange={onChangeHandler}
      className='w-full md:w-2/3'
      value={''}
    />
  );
}
