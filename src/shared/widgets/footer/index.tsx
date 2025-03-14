"use client";

import { Button } from "@/shared/components/ui/button";
import MemoArrow from "@/shared/icons/arrow";
import Link from "next/link";
import { socials } from "./lib/const";

export const Footer = () => {
  const handleCVDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "Niyaztay_Yelsultan_CV.pdf";
    link.click();
  };

  return (
    <div className="flex gap-6 flex-col xs:flex-row">
      <Button
        onClick={handleCVDownload}
        variant="link"
        className="flex gap-1 items-center text-base font-normal px-0"
      >
        <MemoArrow className="text-xl rotate-45" />
        download cv
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
