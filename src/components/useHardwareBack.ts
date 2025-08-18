'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function useHardwareBack() {
  const router = useRouter();

  useEffect(() => {
    const onAppBack = () => router.back();

    // 1) 커스텀 이벤트
    const evtHandler = () => onAppBack();
    window.addEventListener('appback', evtHandler);

    // 2) postMessage (React Native WebView 등)
    const msgHandler = (e: MessageEvent) => {
      if (e?.data === 'app-back') onAppBack();
    };
    window.addEventListener('message', msgHandler);

    return () => {
      window.removeEventListener('appback', evtHandler);
      window.removeEventListener('message', msgHandler);
    };
  }, [router]);
}
