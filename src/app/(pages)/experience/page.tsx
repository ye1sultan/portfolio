import { BlogItem } from "@/shared/components/blog-item";
import { Title } from "@/shared/components/title";

const Blog = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        <Title text="Experience" />
        <BlogItem
          name="Qtap"
          date="Jan 24 - Jun 24"
          link="https://qtap.kz/"
          description="Web app, that allows users to store personal info in customizable tiles (video, audio, text, links, photos) with a minimalistic design. I used Next.js, Tailwind CSS, Jotai, and TanStack Query to create a responsive and user-friendly experience."
        />
        <BlogItem
          name="Finance.kz"
          date="Jun 24 - Present"
          link="https://finance.kz/"
          description="Platform that provides listings and information about credits, microcredits, mortgages, deposits, as well as credit and debit cards. I used Next.js, SCSS, and React Redux to create a responsive and efficient site that helps users easily navigate financial options."
        />
        <BlogItem
          name="EasyRent"
          date="Aug 24 - Present"
          link="https://easyrent.one"
          description="Web app for renting various cars, allowing users to browse and select vehicles through an intuitive interface. I utilized Next.js, Tailwind CSS, Jotai, and TanStack Query to develop a responsive and user-friendly platform that streamlines the car rental experience."
        />
        <div className="flex flex-col gap-8">
          <Title text="Education" />
          <BlogItem
            name="Suleyman Demirel University"
            date="Sep 19 - Jun 23"
            link="https://sdu.edu.kz/language/en/"
            description="I gained a solid foundation in programming, algorithms, data structures, and software development. I learned how to problem-solve using various programming languages, work with databases, and understand computer systems on a deeper level."
          />
        </div>
      </div>
    </>
  );
};

export default Blog;
