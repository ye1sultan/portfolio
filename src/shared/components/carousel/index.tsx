import { me } from "@/shared/data/me";
import Link from "next/link";

export const Carousel = () => {
  return (
    <div className="mb-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-50px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_span]:max-w-none animate-infinite-scroll tracking-wider">
        {me.links.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_span]:max-w-none animate-infinite-scroll tracking-wider"
        aria-hidden="true"
      >
        {me.links.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
