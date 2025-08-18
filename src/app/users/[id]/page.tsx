import Link from 'next/link';

export default function UserFull({ params }: { params: { id: string } }) {
  return (
    <main style={{ padding: 16 }}>
      <h1>User #{params.id}</h1>
      <p>이 페이지는 직접 진입/새로고침 시 전체 화면으로 표시됩니다.</p>
      <Link href="/users">← 목록으로</Link>
    </main>
  );
}
