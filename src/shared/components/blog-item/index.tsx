import { IBlog } from "@/shared/types/blog";
import Link from "next/link";

export const BlogItem = ({ name, date, link, description }: IBlog) => {
  return (
    <div>
      <div className="flex w-full gap-2 justify-between items-start mb-4">
        <Link
          href={link}
          target="_blank"
          className="text-xl underline underline-offset-4"
        >
          {name}
        </Link>
        <p className="text-neutral-300 shrink-0">{date}</p>
      </div>
      <ul className="flex flex-col gap-1">
        {description?.map((item, index) => (
          <li key={index} className="list-inside list-disc">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};
