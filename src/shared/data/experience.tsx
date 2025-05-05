import Link from "next/link";
import { Fragment } from "react";
import { IBlog } from "../types/blog";

export const experience: IBlog[] = [
  {
    name: "Hero's Journey",
    date: "Feb 25 - Present",
    link: "https://herosjourney.kz/",
    description: [
      <Fragment key="1">
        Rebuilt the legacy admin platform using{" "}
        <span className="font-bold">Next.js App Router</span> and{" "}
        <span className="font-bold">Tailwind CSS</span>, reducing load times by{" "}
        <span className="font-bold">70%</span> and improving Lighthouse scores
        to <span className="font-bold">95+</span>.
      </Fragment>,
      <Fragment key="2">
        Developed a high-performance POS system with{" "}
        <span className="font-bold">React</span> and{" "}
        <span className="font-bold">Electron</span>, deployed to 4+ stores for
        seamless in-store operations.
      </Fragment>,
      <Fragment key="3">
        Built a cross-platform mobile app in{" "}
        <span className="font-bold">React Native</span> with feature parity to
        web, increasing mobile engagement by{" "}
        <span className="font-bold">30%</span>.
      </Fragment>,
      <Fragment key="4">
        Designed a robust backend with{" "}
        <span className="font-bold">Node.js</span>,{" "}
        <span className="font-bold">GraphQL</span>, and{" "}
        <span className="font-bold">MongoDB</span>, supporting{" "}
        <span className="font-bold">30k+</span> monthly queries across
        platforms.
      </Fragment>,
      <Link key="5" href="https://herosjourney.kz/">
        https://herosjourney.kz/
      </Link>,
    ],
  },
  {
    name: "Finance.kz",
    date: "Jun 24 - Mar 25",
    link: "https://finance.kz/",
    description: [
      <Fragment key="1">
        Built a full admin panel from scratch using{" "}
        <span className="font-bold">Next.js</span> and{" "}
        <span className="font-bold">Tailwind</span>, reducing product ops time
        by <span className="font-bold">50%</span>.
      </Fragment>,
      "Led intern development process and introduced front-end architecture standards adopted by the team.",
      "Mentored 3+ interns in front-end fundamentals, Git workflows, and modern tooling.",
      "Conducted weekly code reviews and authored a front-end best practices guide adopted team-wide.",
      <Link key="5" href="https://finance.kz/">
        https://finance.kz/
      </Link>,
    ],
  },
  {
    name: "Qtap",
    date: "Jan 24 - Jun 24",
    link: "https://qtap.kz/",
    description: [
      <Fragment key="1">
        Integrated <span className="font-bold">Jotai</span> and{" "}
        <span className="font-bold">TanStack Query</span> to streamline
        state/data logic across the app.
      </Fragment>,
      <Fragment key="2">
        Refactored responsive UI with{" "}
        <span className="font-bold">Tailwind</span> and{" "}
        <span className="font-bold">Next.js</span>, cutting UI bugs by{" "}
        <span className="font-bold">40%</span>.
      </Fragment>,
      <Fragment key="3">
        Increased test coverage to <span className="font-bold">60%</span> using{" "}
        <span className="font-bold">Jest</span> and{" "}
        <span className="font-bold">React Testing Library</span>.
      </Fragment>,
      <Fragment key="4">
        Built 20+ transactional emails with{" "}
        <span className="font-bold">React Email</span> to improve customer
        engagement.
      </Fragment>,
      <Link key="5" href="https://qtap.kz/">
        https://qtap.kz/
      </Link>,
    ],
  },
];
