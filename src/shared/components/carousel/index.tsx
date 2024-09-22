import Link from "next/link";

export const Carousel = () => {
  return (
    <div className="mb-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-50px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_span]:max-w-none animate-infinite-scroll tracking-wider">
        <li>
          <Link href="https://nodejs.org/en">node.js</Link>
        </li>
        <li>
          <Link href="https://expressjs.com/">express.js</Link>
        </li>
        <li>
          <Link href="">react</Link>
        </li>
        <li>
          <Link href="">next.js</Link>
        </li>
        <li>
          <Link href="">tailwind</Link>
        </li>
        <li>
          <Link href="">scss</Link>
        </li>
        <li>
          <Link href="">jotai</Link>
        </li>
        <li>
          <Link href="">tanstack</Link>
        </li>
        <li>
          <Link href="">redux</Link>
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_span]:max-w-none animate-infinite-scroll tracking-wider"
        aria-hidden="true"
      >
        <li>
          <Link href="https://nodejs.org/en">node.js</Link>
        </li>
        <li>
          <Link href="https://expressjs.com/">express.js</Link>
        </li>
        <li>
          <Link href="">react</Link>
        </li>
        <li>
          <Link href="">next.js</Link>
        </li>
        <li>
          <Link href="">tailwind</Link>
        </li>
        <li>
          <Link href="">scss</Link>
        </li>
        <li>
          <Link href="">jotai</Link>
        </li>
        <li>
          <Link href="">tanstack</Link>
        </li>
        <li>
          <Link href="">redux</Link>
        </li>
      </ul>
    </div>
  );
};
