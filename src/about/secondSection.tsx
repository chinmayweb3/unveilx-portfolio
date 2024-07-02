import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const SecondSection = () => {
  const divRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ['start center', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  return (
    <section>
      <div ref={divRef} className="mb-[60px] h-auto w-full overflow-hidden">
        <motion.img style={{ scale }} className="inline-block w-full duration-100" src="./aboutbg.webp" />
      </div>
    </section>
  );
};

export default SecondSection;
