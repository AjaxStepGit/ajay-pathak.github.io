//DELETE THIS

// components/ScrollReveal.tsx
'use client';

import { motion } from 'framer-motion';

export default function ScrollReveal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.2 }} // Trigger when 20% in view
      className="flex w-full"
    >
      {children}
    </motion.div>
  );
}
