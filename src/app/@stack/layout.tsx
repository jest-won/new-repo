'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export default function StackLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence initial={false} mode="wait">
      <motion.div
        key={pathname}
        className="stack-layer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
