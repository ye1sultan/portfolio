"use client";

import { ThemeToggle } from "@/shared/components/theme-toggle";
import { Button } from "@/shared/components/ui/button";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { socials } from "./lib/const";

export const Footer = () => {
  const handleCVDownload = () => {
    window.open("https://yelsultan.tiiny.site", "_blank");
  };

  return (
      <div className="flex gap-6 flex-col sm:flex-row">
        <Button
          onClick={handleCVDownload}
          variant="link"
          className="flex gap-1 items-center text-base font-normal p-0 w-fit h-fit"
        >
          <ArrowTopRightIcon />
          cv
        </Button>
        {socials.map((item) => (
          <Link
            key={item.id}
            href={item.url}
            className="flex gap-1 items-center text-neutral-900 dark:text-neutral-50 hover:opacity-70 transition-opacity"
          >
            <item.icon />
            {item.label}
          </Link>
        ))}
      <ThemeToggle />
      </div>
  );
};
