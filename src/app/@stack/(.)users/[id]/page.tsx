'use client';

import { useRouter } from 'next/navigation';
import StackSheet from '@/components/StackSheet';
import useHardwareBack from '@/components/useHardwareBack';

export default function UserOverlay({ params }: { params: { id: string } }) {
  const router = useRouter();

  // WebView 하드웨어 뒤로가기 → router.back()
  useHardwareBack();

  return (
    <StackSheet onClose={() => router.back()}>
      <div style={{ padding: 16 }}>
        <h2>User #{params.id}</h2>
        <p>이 화면은 현재 페이지 위에 &quot;스택 카드&quot;처럼 덮여 있습니다.</p>

        <button onClick={() => router.back()} style={{ marginTop: 16 }}>
          ← 닫기(뒤로가기)
        </button>
      </div>
    </StackSheet>
  );
}
