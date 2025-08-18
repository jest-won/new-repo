import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 16 }}>
      <h1>홈</h1>
      <p>아래로 이동해 보세요.</p>
      <ul>
        <li><Link href="/users">/users로 이동</Link></li>
      </ul>
    </main>
  );
}
