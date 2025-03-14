import { BlogItem } from "@/shared/components/blog-item";
import { Title } from "@/shared/components/title";
import { Accordion } from "@/shared/components/ui/accordion";
import { experience } from "@/shared/data/experience";

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <Title text="Experience" />
      <Accordion
        type="single"
        defaultValue={experience[0]?.name}
        collapsible
        className="w-full"
      >
        {experience.map((item, index) => (
          <BlogItem key={index} {...item} />
        ))}
      </Accordion>
    </div>
  );
};

export default Page;
