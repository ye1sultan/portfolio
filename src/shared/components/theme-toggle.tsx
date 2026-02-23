"use client";

import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button variant="link" className="flex gap-1 items-center text-base font-normal p-0 w-fit h-fit" >
        <SunIcon   />
        light
      </Button>
    );
  }

  return (
    <Button
      variant="link"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
      className="flex gap-1 items-center text-base font-normal p-0 w-fit h-fit sm:ml-auto"
    >
      {theme === "dark" ? <SunIcon   /> : <MoonIcon   />}
      {theme === "dark" ? "light" : "dark"}
    </Button>
  );
}
