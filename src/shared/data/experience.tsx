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
        Rewrote the legacy admin panel from scratch using{" "}
        <span className="font-bold">Next.js</span> and{" "}
        <span className="font-bold">Tailwind CSS</span>, boosting performance and user experience by over{" "}
        <span className="font-bold">70%</span>.
      </Fragment>,
      <Fragment key="2">
        Developed and maintained a POS panel using{" "}
        <span className="font-bold">React</span> and{" "}
        <span className="font-bold">Electron</span>, delivering a smooth and efficient desktop experience for in-store operations.
      </Fragment>,
      <Fragment key="3">
        Built and shipped a cross-platform mobile application using{" "}
        <span className="font-bold">React Native</span>, extending platform capabilities to mobile users.
      </Fragment>,
      <Fragment key="4">
        Designed and maintained a scalable backend using{" "}
        <span className="font-bold">Node.js</span>,{" "}
        <span className="font-bold">GraphQL</span>, and{" "}
        <span className="font-bold">MongoDB</span>, supporting complex queries and real-time data needs.
      </Fragment>,
      <Link key={3} href="https://herosjourney.kz/">
        https://herosjourney.kz/
      </Link>,
    ],
  },
  {
    name: "EasyRent",
    date: "Aug 24 - Oct 25",
    link: "https://easyrent.one",
    description: [
      <Fragment key="1">
        Developed a responsive and user-friendly car rental platform using{" "}
        <span className="font-bold">Next.js</span>,{" "}
        <span className="font-bold">Tailwind CSS</span>,{" "}
        <span className="font-bold">Jotai</span>, and{" "}
        <span className="font-bold">TanStack Query</span> to streamline the
        browsing and selection experience.
      </Fragment>,
      "Optimized data fetching and state management to improve performance and ensure seamless user interactions across the platform.",
    ],
  },
  {
    name: "Finance.kz",
    date: "Jun 24 - Mar 25",
    link: "https://finance.kz/",
    description: [
      <Fragment key="1">
        Designed and developed a custom admin panel from scratch, streamlining
        workflows and enhancing the user experience by making product creation,
        editing, and management up to <span className="font-bold">50%</span>{" "}
        more efficient.
      </Fragment>,
      "Mentored and guided all interns, providing comprehensive support in feature development and enhancing their mastery of front-end best practices",
    ],
  },
  {
    name: "Qtap",
    date: "Jan 24 - Jun 24",
    link: "https://qtap.kz/",
    description: [
      <Fragment key="1">
        Optimized state management by leveraging{" "}
        <span className="font-bold">Jotai</span> and{" "}
        <span className="font-bold">TanStack Query</span>, improving data
        handling efficiency across the application.
      </Fragment>,
      <Fragment key="2">
        Implemented a fully responsive design using{" "}
        <span className="font-bold">Next.js</span> and{" "}
        <span className="font-bold">Tailwind CSS</span>, enhancing accessibility
        and user experience across all devices.
      </Fragment>,
      <Fragment key="3">
        Covered <span className="font-bold">60%</span> of the web application
        with unit tests, ensuring code reliability and maintainability.
      </Fragment>,
      <Fragment key="4">
        Generated <span className="font-bold">100%</span> of all email templates
        using <span className="font-bold">React Email</span> for consistent and
        dynamic communication.
      </Fragment>,
    ],
  },
];
