import { IMe } from "@/shared/types/me";
import { IBlog } from "../types/blog";

export const me: IMe = {
  name: "Yelsultan Niyaztay",
  about:
    "I do my best at night when everything is quiet and I can really dive into coding. I'm convinced my productivity has a direct correlation with caffeine levels, so with Red Bull keeping me energized, I feel unstoppable. And it's all about finding that perfect workflow that lets me get things done faster and more effectively.",
  links: [
    {
      name: "node.js",
      link: "https://nodejs.org/en",
    },
    {
      name: "express.js",
      link: "https://expressjs.com/",
    },
    {
      name: "react",
      link: "https://react.dev/",
    },
    {
      name: "next.js",
      link: "https://nextjs.org/",
    },
    {
      name: "tailwind",
      link: "https://tailwindcss.com/",
    },
    {
      name: "sass",
      link: "https://sass-lang.com/",
    },
    {
      name: "scss",
      link: "https://sass-lang.com/",
    },
    {
      name: "jotai",
      link: "https://jotai.org/",
    },
    {
      name: "redux",
      link: "https://redux.js.org/",
    },
    {
      name: "tanstack",
      link: "https://tanstack.com/",
    },
  ],
};

export const experience: IBlog[] = [
  {
    name: "EasyRent",
    date: "Aug 24 - Present",
    link: "https://easyrent.one",
    description: [
      "Developed a responsive and user-friendly car rental platform using Next.js, Tailwind CSS, Jotai, and TanStack Query to streamline the browsing and selection experience.",
      "Optimized data fetching and state management to improve performance and ensure seamless user interactions across the platform.",
    ],
  },
  {
    name: "Finance.kz",
    date: "Jun 24 - Present",
    link: "https://finance.kz/",
    description: [
      "Designed and developed a custom admin panel from scratch, streamlining workflows and enhancing the user experience by making product creation, editing, and management up to 50% more efficient.",
      "Mentored and guided all interns, providing comprehensive support in feature development and enhancing their mastery of front-end best practices",
    ],
  },
  {
    name: "Qtap",
    date: "Jan 24 - Jun 24",
    link: "https://qtap.kz/",
    description: [
      "Optimized state management by leveraging Jotai and TanStack Query, improving data handling efficiency across the application.",
      "Implemented a fully responsive design using Next.js and Tailwind CSS, enhancing accessibility and user experience across all devices.",
      "Covered 60% of the web application with unit tests, ensuring code reliability and maintainability.",
      "Developed 100% of all email templates using React Email for consistent and dynamic communication.",
    ],
  },
];

export const education: IBlog[] = [
  {
    name: "Suleyman Demirel University",
    date: "Sep 19 - Jun 23",
    link: "https://sdu.edu.kz/language/en/",
    description: [
      "Gained a solid foundation in programming, algorithms, data structures, and software development. I learned how to problem-solve using various programming languages, work with databases, and understand computer systems on a deeper level.",
    ],
  },
  {
    name: "JavaScript + React • Udemy",
    date: "Jul 19 - Sep 23",
    link: "https://www.udemy.com/certificate/UC-34fb3124-d03c-474a-9350-bb92f48fe19d/",
  },
];
