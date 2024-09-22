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
    name: "Qtap",
    date: "Jan 24 - Jun 24",
    link: "https://qtap.kz/",
    description:
      "Web app, that allows users to store personal info in customizable tiles (video, audio, text, links, photos) with a minimalistic design. I used Next.js, Tailwind CSS, Jotai, and TanStack Query to create a responsive and user-friendly experience.",
  },
  {
    name: "Finance.kz",
    date: "Jun 24 - Present",
    link: "https://finance.kz/",
    description:
      "Platform that provides listings and information about credits, microcredits, mortgages, deposits, as well as credit and debit cards. I used Next.js, SCSS, and Redux to create a responsive and efficient site that helps users easily navigate financial options.",
  },
  {
    name: "EasyRent",
    date: "Aug 24 - Present",
    link: "https://easyrent.one",
    description:
      "Web app for renting various cars, allowing users to browse and select vehicles through an intuitive interface. I utilized Next.js, Tailwind CSS, Jotai, and TanStack Query to develop a responsive and user-friendly platform that streamlines the car rental experience.",
  },
];

export const education: IBlog[] = [
  {
    name: "Suleyman Demirel University",
    date: "Sep 19 - Jun 23",
    link: "https://sdu.edu.kz/language/en/",
    description:
      "I gained a solid foundation in programming, algorithms, data structures, and software development. I learned how to problem-solve using various programming languages, work with databases, and understand computer systems on a deeper level.",
  },
  {
    name: "JavaScript + React • Udemy",
    date: "Jul 19 - Sep 23",
    link: "https://www.udemy.com/certificate/UC-34fb3124-d03c-474a-9350-bb92f48fe19d/",
  },
];
