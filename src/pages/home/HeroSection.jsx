import { SiNotion, SiJira, SiSlack, SiDropbox } from "react-icons/si";
import { Link } from "react-router-dom";
import { images } from "../../constants";
import Container from "../../components/common/Container";

const HeroSection = () => {
  return (
    <div>
      <Container>
        <div className=" flex flex-col  md:flex-row gap-10 md:gap-0 justify-between items-center">
          <div className=" md:w-5/12 py-20 flex flex-col gap-4 lg:gap-6 ">
            <h1 className=" text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold lg:leading-[52px] xl:leading-[80px]">
              Fast and Clean help
              <span className=" text-primary"> structure</span> your work
            </h1>
            <h4 className="text-lg lg:text-xl text-zinc-600">
              Plan projects, stay on track, and deliver on time without
              overworking your team
            </h4>
            <div className=" w-fit">
              <Link to="/dashboard">
                <button className="bg-zinc-900 text-zinc-200 rounded-md font-semibold px-5 py-2 text-lg">
                  Let’s Explore
                </button>
              </Link>
            </div>
            <div className="flex flex-col gap-3">
              <h1 className=" font-semibold text-zinc-600">
                Smart integration
              </h1>
              <div className=" flex justify-start items-center gap-6 text-3xl">
                <SiSlack />
                <SiDropbox />
                <SiNotion />
                <SiJira />
              </div>
            </div>
          </div>
          <div className="md:w-7/12 ">
            <img src={images.HeroSection} alt="herosection" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
