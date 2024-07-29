import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav className="flex gap-6">
        <Link href="/home">home</Link>
        <Link href="/blog">blog</Link>
      </nav>
    </header>
  );
};
