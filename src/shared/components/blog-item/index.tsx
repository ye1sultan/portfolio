import Link from "next/link";

interface BlogItemProps {
  name: string;
  date: string;
  link: string;
  description: string;
}

export const BlogItem = ({ name, date, link, description }: BlogItemProps) => {
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
