import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/volumes">Volumes</Link>
        </li>
      </ul>
    </div>
  );
}
