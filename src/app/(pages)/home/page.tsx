import { Carousel } from "@/shared/components/carousel";
import { Title } from "@/shared/components/title";

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Title text="Niyaztay Yelsultan" />
      <p>
        {`I do my best at night when everything is quiet and I can really dive into coding. I'm convinced my productivity has a direct correlation with caffeine levels, so with Red Bull keeping me energized, I feel unstoppable. And it's all about finding that perfect workflow that lets me get things done faster and more effectively.`}
      </p>
      <Carousel />
    </div>
  );
};

export default Home;
