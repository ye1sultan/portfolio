import { BlogItem } from "@/shared/components/blog-item";
import { Title } from "@/shared/components/title";
import { Accordion } from "@/shared/components/ui/accordion";
import { education } from "@/shared/data/education";

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <Title text="Education" />
      <Accordion
        type="single"
        defaultValue={education[0]?.name}
        collapsible
        className="w-full"
      >
        {education.map((item, index) => (
          <BlogItem key={index} {...item} />
        ))}
      </Accordion>
    </div>
  );
};

export default Page;
