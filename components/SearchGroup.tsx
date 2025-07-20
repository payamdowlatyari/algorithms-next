import { Input } from '@nextui-org/react';

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
      placeholder={placeholder}
      onChange={onChangeHandler}
      size='sm'
    />
  );
}
