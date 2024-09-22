import MemoArrow from "@/shared/icons/arrow";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="flex gap-6 flex-col xs:flex-row">
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
  );
};
