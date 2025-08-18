'use client';

import { useRouter } from 'next/navigation';
import StackSheet from '@/components/StackSheet';
import useHardwareBack from '@/components/useHardwareBack';
import Link from 'next/link';

export default function UserPostsOverlay({ params }: { params: { id: string } }) {
  const router = useRouter();
  useHardwareBack();

  return (
    <StackSheet onClose={() => router.back()}>
      <div style={{ padding: 16 }}>
        <h3>User #{params.id} Posts</h3>
        <p>This screen is stacked above the user overlay.</p>
        <Link href={`/users/${params.id}/posts`}>Open full page</Link>
        <button onClick={() => router.back()} style={{ marginTop: 16 }}>
          ← Close
        </button>
      </div>
    </StackSheet>
  );
}

