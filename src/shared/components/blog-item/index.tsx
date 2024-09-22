import { IBlog } from "@/shared/types/blog";
import Link from "next/link";

export const BlogItem = ({ name, date, link, description }: IBlog) => {
  return (
    <div>
      <div className="flex w-full gap-2 justify-between items-start mb-4">
        <Link href={link} target="_blank" className="text-xl">
          • {name}
        </Link>
        <p className="text-neutral-300 shrink-0">{date}</p>
      </div>
      <p>{description}</p>
    </div>
  );
};
