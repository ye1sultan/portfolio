"use client";

import { cn } from "@/shared/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  const isHome = pathname === "/" || pathname === "/home";
  const isExperience = pathname === "/experience";
  const isEducation = pathname === "/education";

  return (
    <header>
      <nav className="flex items-center gap-6">
        <Link href="/home" className={cn(isHome ? "border-b" : "")}>
          home
        </Link>
        <Link href="/experience" className={cn(isExperience ? "border-b" : "")}>
          experience
        </Link>
        <Link href="/education" className={cn(isEducation ? "border-b" : "")}>
          education
        </Link>
      </nav>
    </header>
  );
};
