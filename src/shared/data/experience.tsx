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
        Scaled a <span className="font-bold">Node.js</span> +{" "}
        <span className="font-bold">GraphQL</span> backend reliably handling{" "}
        <span className="font-bold">30k+</span> monthly requests, improving
        system stability and performance.
      </Fragment>,
      "Led a full refactor of a legacy admin panel, significantly improving performance, code consistency, and long-term maintainability.",
      <Fragment key="3">
        Delivered a <span className="font-bold">React</span> +{" "}
        <span className="font-bold">Electron</span> POS system now actively used
        in <span className="font-bold">6+</span> physical stores.
      </Fragment>,
      <Fragment key="4">
        Shipped a cross-platform <span className="font-bold">React Native</span>{" "}
        mobile app with full feature parity, increasing mobile user engagement by{" "}
        <span className="font-bold">30%</span>.
      </Fragment>,
      "Owned features across backend, web, desktop, and mobile, collaborating closely with product and operations teams.",
      <Link
        key="6"
        target="_blank"
        rel="noopener noreferrer"
        href="https://herosjourney.kz/"
      >
        https://herosjourney.kz/
      </Link>,
    ],
  },
  {
    name: "JobEscape",
    date: "Jul 25 - Nov 25",
    link: "https://jobescape.me/",
    description: [
      <Fragment key="1">
        Built and launched a <span className="font-bold">React Native</span>{" "}
        mobile application from scratch, successfully releasing it to the App
        Store.
      </Fragment>,
      "Maintained and extended a React.js web application, focusing on stability, performance, and feature delivery.",
      "Worked closely with product stakeholders to deliver production-ready features under tight timelines.",
      <Link
        key="4"
        target="_blank"
        rel="noopener noreferrer"
        href="https://jobescape.me/"
      >
        https://jobescape.me/
      </Link>,
    ],
  },
  {
    name: "Finance.kz",
    date: "May 24 - Mar 25",
    link: "https://finance.kz/",
    description: [
      <Fragment key="1">
        Built a full admin panel from scratch using{" "}
        <span className="font-bold">Next.js</span> and{" "}
        <span className="font-bold">Tailwind</span>, reducing operational
        workload by <span className="font-bold">50%</span>.
      </Fragment>,
      "Defined and introduced frontend architecture standards adopted across the team.",
      "Mentored 3+ interns, covering frontend fundamentals, Git workflows, and modern tooling.",
      "Conducted weekly code reviews and authored a frontend best-practices guide adopted team-wide.",
      <Link
        key="5"
        target="_blank"
        rel="noopener noreferrer"
        href="https://finance.kz/"
      >
        https://finance.kz/
      </Link>,
    ],
  },
  {
    name: "Qtap",
    date: "Jun 23 - Jun 24",
    link: "https://qtap.kz/",
    description: [
      <Fragment key="1">
        Led the migration of the entire codebase to{" "}
        <span className="font-bold">TypeScript</span>, reducing runtime errors
        by <span className="font-bold">40%</span>.
      </Fragment>,
      <Fragment key="2">
        Built a reusable design system using{" "}
        <span className="font-bold">Tailwind CSS</span> and{" "}
        <span className="font-bold">Storybook</span>, ensuring UI consistency at
        scale.
      </Fragment>,
      <Fragment key="3">
        Implemented CI/CD pipelines with{" "}
        <span className="font-bold">GitHub Actions</span>, cutting deployment
        time by <span className="font-bold">30%</span>.
      </Fragment>,
      <Fragment key="4">
        Delivered new <span className="font-bold">React</span>-based features
        that increased user engagement by{" "}
        <span className="font-bold">25%</span>.
      </Fragment>,
      <Link
        key="5"
        target="_blank"
        rel="noopener noreferrer"
        href="https://qtap.kz/"
      >
        https://qtap.kz/
      </Link>,
    ],
  },
];
