import { IBlog } from "@/shared/types/blog";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

export const BlogItem = ({ name, date, link, description }: IBlog) => {
  return (
    <AccordionItem value={name}>
      <AccordionTrigger className="py-5" hideIcon>
        <div className="flex w-full justify-between items-start gap-4">
          <h4 className="text-xl">{name}</h4>
          <p className="text-neutral-300 shrink-0 text-base">{date}</p>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <ul className="flex flex-col gap-1 text-base">
          {description?.map((item, index) =>
            typeof item === "string" ? (
              <li
                key={index}
                className="list-inside list-disc"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ) : (
              <li key={index} className="list-inside list-disc">
                {item}
              </li>
            ),
          )}
        </ul>
      </AccordionContent>
    </AccordionItem>
  );
};
