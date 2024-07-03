import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

// type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type divProps = React.HTMLAttributes<HTMLDivElement> & {
  sideRun?: 'x' | 'y' | '-x' | '-y';
};

const Translation = React.forwardRef<HTMLDivElement, divProps>(({ sideRun = 'x', ...props }, ref) => {
  const position = sideRun.startsWith('-');
  let side = position ? sideRun[1] : sideRun[0];
  return (
    <motion.div
      ref={ref}
      initial={{
        [side]: `${position ? '' : '-'}100px`,
        opacity: 0,
      }}
      whileInView={{
        [side]: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={twMerge('', props.className)}
    >
      {props.children}
    </motion.div>
  );
});

export default Translation;
