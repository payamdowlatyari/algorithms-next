'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { cn } from '@/utils/cn';

/**
 * Props for the input component.
 */
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value: string;
  className?: string;
}

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const letterVariants: any = {
  initial: {
    y: 0,
    color: 'inherit',
  },
  animate: {
    y: '-120%',
    color: 'var(--color-neutral-500)',
    transition: {
      type: 'springGenerator',
      stiffness: 300,
      damping: 20,
    },
  },
};

/**
 * A React component that renders an animated input field with a label that
 * animates when the input is focused or contains a value. The label animates by
 * moving up and changing color, providing a smooth transition effect.
 *
 * @param {InputProps} props - The props for the component.
 */
export const Input = ({
  label,
  className = '',
  value,
  ...props
}: InputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const showLabel = isFocused || value.length > 0;

  return (
    <div className={cn('relative', className)}>
      <motion.div
        className='absolute top-1/2 -translate-y-1/2 pointer-events-none text-neutral-900 dark:text-neutral-50'
        variants={containerVariants}
        initial='initial'
        animate={showLabel ? 'animate' : 'initial'}
      >
        {label.split('').map((char, index) => (
          <motion.span
            key={index}
            className='inline-block text-sm'
            variants={letterVariants}
            style={{ willChange: 'transform' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.div>

      <input
        type='text'
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        {...props}
        className='outline-none border-b-2 border-neutral-900 dark:border-neutral-50 py-2 w-full text-base font-medium text-neutral-900 dark:text-neutral-50 bg-transparent placeholder-transparent'
      />
    </div>
  );
};
