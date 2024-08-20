import React, { useEffect, useState } from "react";
import { Html } from "@react-three/drei";
import { motion } from "framer-motion";

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 4, delay: 1 },
  },
};

const Loader = ({ isContact }: { isContact?: boolean }) => {
  const [index, setIndex] = useState(0);

  const words = [
    "Hello",
    "Namaste",
    "Hallo",
    "Bonjour",
    "Olá",
    "Hola",
    "Namaste",
  ];

  useEffect(() => {
    if (index == words.length - 1) return;
    setTimeout(
      () => {
        setIndex(index + 1);
      },
      index == 0 ? 1000 : 150
    );
  }, [index]);

  return (
    <Html>
      <div className="w-[50vw] relative right-[50%]">
        {!isContact && (
          <motion.p
            variants={opacity}
            initial="initial"
            animate="enter"
            className="text-white text-center w-full text-5xl font-bold"
          >
            &lt; {words[index]} /&gt; World!
          </motion.p>
        )}
        <div className="spinner"></div>
      </div>
    </Html>
  );
};

export default Loader;
