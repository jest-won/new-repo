import Link from 'next/link';

export default function UserPostsFull({ params }: { params: { id: string } }) {
  return (
    <main style={{ padding: 16 }}>
      <h1>User #{params.id} Posts</h1>
      <p>Directly opening this route renders full screen.</p>
      <Link href={`/users/${params.id}`}>← Back to user</Link>
    </main>
  );
}

