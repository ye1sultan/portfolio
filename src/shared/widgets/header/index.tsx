import Link from "next/link";

export const Header = () => {
  return (
    <header>
      <nav className="flex items-center gap-6">
        <Link href="/home">home</Link>
        <Link href="/experience">experience</Link>
        <Link href="/education">education</Link>
        <Link href="/cv">cv</Link>
      </nav>
    </header>
  );
};
