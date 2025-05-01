"use client";

import { Button } from "@/shared/components/ui/button";
import MemoArrow from "@/shared/icons/arrow";
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
        <MemoArrow className="text-xl rotate-45" />
        cv
      </Button>
      {socials.map((item) => (
        <Link key={item.id} href={item.url} className="flex gap-1 items-center">
          <item.icon className="text-xl rotate-45" />
          {item.label}
        </Link>
      ))}
    </div>
  );
};
