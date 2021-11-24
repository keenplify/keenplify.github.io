import React from "react";
import { motion } from "framer-motion";

export function FadeInWhenVisible({ children, ...props }) {
  return (
    <motion.div
      whileInView="show"
      viewport={{ once: true }}
      variants={{
        show: {
          opacity: 1,
          x: 0,
          transition: {
            staggerChildren: 0.5,
          },
        },
        hide: { opacity: 0, x: 128 },
      }}
      initial="hide"
      {...props}
    >
      {children}
    </motion.div>
  );
}
