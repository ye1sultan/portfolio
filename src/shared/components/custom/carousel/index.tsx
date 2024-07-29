export const Infinite = () => {
  return (
    <div className="mb-10 w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_20px,_black_calc(100%-50px),transparent_100%)]">
      <ul className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_span]:max-w-none animate-infinite-scroll">
        <li>
          <span>react</span>
        </li>
        <li>
          <span>next.js</span>
        </li>
        <li>
          <span>tailwind</span>
        </li>
        <li>
          <span>jotai</span>
        </li>
        <li>
          <span>tanstack</span>
        </li>
        <li>
          <span>redux</span>
        </li>
      </ul>
      <ul
        className="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_span]:max-w-none animate-infinite-scroll"
        aria-hidden="true"
      >
        <li>
          <span>react</span>
        </li>
        <li>
          <span>next.js</span>
        </li>
        <li>
          <span>tailwind</span>
        </li>
        <li>
          <span>jotai</span>
        </li>
        <li>
          <span>tanstack</span>
        </li>
        <li>
          <span>redux</span>
        </li>
      </ul>
    </div>
  );
};
