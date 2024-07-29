"use client";

import { Infinite } from "@/shared/components/custom/carousel";
import { Title } from "@/shared/components/custom/title";
import MemoArrow from "@/shared/icons/arrow";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Title text="Niyaztay Yelsultan" />
      <p>
        {`I do my best at night when everything is quiet and I can really dive into coding. I'm convinced my productivity has a direct correlation with caffeine levels, so with Red Bull keeping me energized, I feel unstoppable. And it's all about finding that perfect workflow that lets me get things done faster and more effectively.`}
      </p>
      <Infinite />
      <div className="flex gap-6">
        <Link href="https://t.me/yelsultan" className="flex gap-1 items-center">
          <MemoArrow className="text-xl rotate-45" /> telegram
        </Link>
        <Link
          href="https://github.com/ye1sultan"
          className="flex gap-1 items-center"
        >
          <MemoArrow className="text-xl rotate-45" /> github
        </Link>
        <Link
          href="https://www.instagram.com/yels667/"
          className="flex gap-1 items-center"
        >
          <MemoArrow className="text-xl rotate-45" /> instagram
        </Link>
      </div>
    </div>
  );
};

export default Home;
