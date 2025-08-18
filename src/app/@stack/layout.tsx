'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect, useRef, useState } from 'react';

type Layer = { key: string; node: ReactNode };

// Maintains a stack of overlay layers similar to native navigation.
export default function StackLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const baseIdx = useRef<number | null>(null);
  const [layers, setLayers] = useState<Layer[]>([]);

  useEffect(() => {
    const idx = window.history.state?.idx ?? 0;
    if (baseIdx.current === null) baseIdx.current = idx;
    const relative = idx - baseIdx.current;

    setLayers(prev => {
      if (relative >= prev.length) {
        // push new layer
        return [...prev, { key: pathname, node: children }];
      }
      // update existing or pop
      const next = prev.slice(0, relative + 1);
      next[relative] = { key: pathname, node: children };
      return next;
    });
  }, [pathname, children]);

  return (
    <AnimatePresence initial={false} mode="sync">
      {layers.map((layer, i) => (
        <motion.div
          key={layer.key}
          className="stack-layer"
          style={{ zIndex: i }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {layer.node}
        </motion.div>
      ))}
    </AnimatePresence>
  );
}
