import { BlogItem } from "@/shared/components/blog-item";
import { Title } from "@/shared/components/title";
import { education, experience } from "@/shared/data/const";

const Blog = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Title text="Experience" />
        {experience.map((item, index) => (
          <BlogItem
            key={index}
            name={item.name}
            date={item.date}
            link={item.link}
            description={item.description}
          />
        ))}
        <div className="flex flex-col gap-8">
          <Title text="Education" />
          {education.map((item, index) => (
            <BlogItem
              key={index}
              name={item.name}
              date={item.date}
              link={item.link}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
