import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const SecondSection = () => {
  const divRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: divRef,
    offset: ["start center", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.4]);

  return (
    <section className="overflow-">
      <div ref={divRef} className="w-full h-auto overflow-hidden mb-[60px]">
        <motion.img
          style={{ scale }}
          className="w-full inline-block duration-100"
          src="./aboutbg.webp"
        />
      </div>
    </section>
  );
};

export default SecondSection;
