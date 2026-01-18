"use client";

import { motion } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      //   initial={{ y: 20, opacity: 0 }}
      //   animate={{ y: 0, opacity: 1 }}
      //   transition={{ ease: [0.21, 0.47, 0.32, 0.98], duration: 0.8 }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
