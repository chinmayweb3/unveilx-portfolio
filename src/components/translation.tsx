import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

// type buttonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
type divProps = HTMLMotionProps<'div'> & {
  sideRun?: 'x' | 'y' | '-x' | '-y';
  sidePx?: number;
};

const Translation = React.forwardRef<HTMLDivElement, divProps>(({ sidePx = 100, sideRun = 'x', ...props }, ref) => {
  const position = sideRun.startsWith('-');
  let side = position ? sideRun[1] : sideRun[0];
  return (
    <motion.div
      ref={ref}
      initial={{
        [side]: `${position ? '' : '-'}${sidePx}px`,
        opacity: 0,
      }}
      whileInView={{
        [side]: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={twMerge('', props.className)}
      {...props}
    >
      {props.children}
    </motion.div>
  );
});

export default Translation;
