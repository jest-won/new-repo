import Link from 'next/link';

const USERS = [
  { id: '1', name: 'Alice' },
  { id: '2', name: 'Bob' },
];

export default function Users() {
  return (
    <main style={{ padding: 16 }}>
      <h1>Users</h1>
      <ul>
        {USERS.map(u => (
          <li key={u.id} style={{ padding: '12px 0' }}>
            <Link href={`/users/${u.id}`}>{u.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
