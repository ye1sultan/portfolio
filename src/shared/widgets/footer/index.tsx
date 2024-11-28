"use client";

import Link from "next/link";
import { socials } from "./lib/const";

export const Footer = () => {
  return (
    <div className="flex gap-6 flex-col xs:flex-row">
      {socials.map((item) => (
        <Link key={item.id} href={item.url} className="flex gap-1 items-center">
          <item.icon className="text-xl rotate-45" />
          {item.label}
        </Link>
      ))}
    </div>
  );
};
