import React from 'react';
import { HTMLMotionProps, motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

type divProps = HTMLMotionProps<'div'> & {
  sideRun?: 'x' | 'y' | '-x' | '-y';
  sidePx?: number;
  duration?: number | string;
};

const Translation = React.forwardRef<HTMLDivElement, divProps>(({ ...props }, ref) => {
  if (!props.sideRun) props.sideRun = 'x';
  const position = props.sideRun.startsWith('-');
  let side = position ? props.sideRun[1] : props.sideRun[0];
  return (
    <motion.div
      ref={ref}
      initial={{
        [side]: `${position ? '' : '-'}${props.sidePx ?? 100}px`,
        opacity: 0,
      }}
      whileInView={{
        [side]: 0,
        opacity: 1,
      }}
      viewport={{ once: true }}
      transition={{ duration: props.duration ?? 0.5, ease: 'easeOut' }}
      className={twMerge('', props.className)}
      {...props}
    >
      {props.children}
    </motion.div>
  );
});

export default Translation;
