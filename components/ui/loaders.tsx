'use client';

import { motion, Transition } from 'motion/react';

/**
 * A loader component that displays a row of three dots that move up and down
 * in a loop. The dots are colored with a gradient from a light neutral color to
 * a darker neutral color.
 */
export const LoaderOne = () => {
  /**
   * Creates a transition that can be used to animate the dots in the loader.
   *
   * @param {number} x The index of the dot to animate.
   * @returns {Transition} An object that can be passed to the "transition" prop of a Motion component.
   */
  const transition = (x: number): Transition => {
    return {
      duration: 1,
      repeat: Infinity,
      repeatType: 'loop' as const,
      delay: x * 0.2,
      ease: 'easeInOut',
    };
  };
  return (
    <div className='flex items-center gap-2'>
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={transition(0)}
        className='h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300'
      />
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={transition(1)}
        className='h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300'
      />
      <motion.div
        initial={{
          y: 0,
        }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={transition(2)}
        className='h-4 w-4 rounded-full border border-neutral-300 bg-gradient-to-b from-neutral-400 to-neutral-300'
      />
    </div>
  );
};

/**
 * A component that renders a loader with three dots that move horizontally.
 *
 * This loader is designed to be used in a full-screen loading state, where the
 * dots are positioned in the center of the screen.
 */
export const LoaderTwo = () => {
  /**
   * Creates a transition that can be used to animate the dots in the loader.
   *
   * @param {number} x The index of the dot to animate.
   * @returns {Transition} An object that can be passed to the "transition" prop of a Motion component.
   */
  const transition = (x: number): Transition => {
    return {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop' as const,
      delay: x * 0.2,
      ease: 'easeInOut',
    };
  };
  return (
    <div className='flex items-center'>
      <motion.div
        transition={transition(0)}
        initial={{
          x: 0,
        }}
        animate={{
          x: [0, 20, 0],
        }}
        className='h-4 w-4 rounded-full bg-neutral-200 shadow-md dark:bg-neutral-500'
      />
      <motion.div
        initial={{
          x: 0,
        }}
        animate={{
          x: [0, 20, 0],
        }}
        transition={transition(0.4)}
        className='h-4 w-4 -translate-x-2 rounded-full bg-neutral-200 shadow-md dark:bg-neutral-500'
      />
      <motion.div
        initial={{
          x: 0,
        }}
        animate={{
          x: [0, 20, 0],
        }}
        transition={transition(0.8)}
        className='h-4 w-4 -translate-x-4 rounded-full bg-neutral-200 shadow-md dark:bg-neutral-500'
      />
    </div>
  );
};

/**
 * A loader component that renders an animated SVG icon.
 *
 * The animation involves a path whose length animates from 0 to full length,
 * creating a drawing effect. The fill color transitions from an initial color
 * to a final color. This animation repeats infinitely in reverse.
 * The SVG is styled with stroke and fill properties that adapt to light and dark themes.
 */
export const LoaderThree = () => {
  return (
    <motion.svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='1'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='h-20 w-20 stroke-neutral-500 [--fill-final:var(--color-yellow-300)] [--fill-initial:var(--color-neutral-50)] dark:stroke-neutral-100 dark:[--fill-final:var(--color-yellow-500)] dark:[--fill-initial:var(--color-neutral-800)]'
    >
      <motion.path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <motion.path
        initial={{ pathLength: 0, fill: 'var(--fill-initial)' }}
        animate={{ pathLength: 1, fill: 'var(--fill-final)' }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        d='M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11'
      />
    </motion.svg>
  );
};

/**
 * A loader component that displays an animated text effect.
 *
 * The primary text is animated with a skew and scale transformation,
 * creating a bouncing effect. The component includes two additional
 * `motion.span` elements that provide a blurred text shadow effect
 * with color transitions for a dynamic visual appearance.
 *
 * @param {Object} props
 * @param {string} [props.text='Loading...'] - The text to display in the loader.
 */
export const LoaderFour = ({ text = 'Loading...' }: { text?: string }) => {
  return (
    <div className='relative font-bold text-black [perspective:1000px] dark:text-white'>
      <motion.span
        animate={{
          skewX: [0, -40, 0],
          scaleX: [1, 2, 1],
        }}
        transition={{
          duration: 0.05,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 2,
          ease: 'linear',
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className='relative z-20 inline-block'
      >
        {text}
      </motion.span>
      <motion.span
        className='absolute inset-0 text-[#00e571]/50 blur-[0.5px] dark:text-[#00e571]'
        animate={{
          x: [-2, 4, -3, 1.5, -2],
          y: [-2, 4, -3, 1.5, -2],
          opacity: [0.3, 0.9, 0.4, 0.8, 0.3],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
      >
        {text}
      </motion.span>
      <motion.span
        className='absolute inset-0 text-[#8b00ff]/50 dark:text-[#8b00ff]'
        animate={{
          x: [0, 1, -1.5, 1.5, -1, 0],
          y: [0, -1, 1.5, -0.5, 0],
          opacity: [0.4, 0.8, 0.3, 0.9, 0.4],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
          times: [0, 0.3, 0.6, 0.8, 1],
        }}
      >
        {text}
      </motion.span>
    </div>
  );
};

/**
 * A loader component that renders animated text with a shadow effect.
 *
 * Each character in the text is displayed as a separate animated span
 * element, creating a pulsating effect with scaling and opacity changes.
 * The characters have a shadow that animates in and out, providing a
 * continuous dynamic appearance.
 *
 * @param {Object} props - The component properties.
 * @param {string} props.text - The text to be displayed and animated in the loader.
 */
export const LoaderFive = ({ text }: { text: string }) => {
  return (
    <div className='font-sans font-bold [--shadow-color:var(--color-neutral-500)] dark:[--shadow-color:var(--color-neutral-100)]'>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          className='inline-block'
          initial={{ scale: 1, opacity: 0.5 }}
          animate={{
            scale: [1, 1.1, 1],
            textShadow: [
              '0 0 0 var(--shadow-color)',
              '0 0 1px var(--shadow-color)',
              '0 0 0 var(--shadow-color)',
            ],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: 'loop',
            delay: i * 0.05,
            ease: 'easeInOut',
            repeatDelay: 2,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </div>
  );
};
