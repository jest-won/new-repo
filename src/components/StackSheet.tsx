'use client';

import { PropsWithChildren, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export default function StackSheet({
  children,
  onClose,
}: PropsWithChildren<{ onClose: () => void }>) {
  const stop = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

  return (
    <AnimatePresence initial={false} mode="wait">
      {/* 전체 화면 고정 레이어 */}
      <div className="sheet-wrap" onClick={onClose}>
        {/* 어두운 배경 */}
        <motion.div
          className="sheet-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
        {/* 오른쪽 → 왼쪽 슬라이드 인, 닫힐 때 오른쪽으로 빠짐 */}
        <motion.div
          className="sheet-panel"
          onClick={stop}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.28 }}
        >
          {children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
