import { Carousel } from "@/shared/components/carousel";
import { Title } from "@/shared/components/title";
import { me } from "@/shared/data/me";

const Page = () => {
  return (
    <div className="flex flex-col gap-8">
      <Title text={me.name} />
      <p>{me.about}</p>
      <Carousel />
    </div>
  );
};

export default Page;
