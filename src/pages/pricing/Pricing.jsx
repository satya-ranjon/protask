import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import pricing from "../../data/pricing.json";
import { FaCheck } from "react-icons/fa6";
import useTitleSet from "../../hooks/useTitleSet";

const Pricing = () => {
  useTitleSet("Pricing");
  return (
    <div className=" py-24 bg-[#f5f3ff57] ">
      <Container>
        <SectionTitle>
          <span className=" text-primary">Pricing</span> Made Easy
        </SectionTitle>
        <div className=" grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-16 mt-8 md:mt-24">
          {pricing.map((item) => (
            <div
              key={item.name}
              className=" p-5 lg:p-10 rounded-md border-2 border-secondary">
              <div className=" pb-4 border-b-2 border-b-red-100 ">
                <h1 className=" text-xl lg:text-3xl font-semibold uppercase">
                  {item.name}
                </h1>
                <h4 className="text-xs lg:text-sm text-zinc-500">{item.doc}</h4>
                <h1 className=" text-xl lg:text-3xl font-semibold mt-2">
                  {item.price}
                  <span className=" text-lg">
                    {item.price !== "Free" && "  /month"}
                  </span>
                </h1>
              </div>
              <div className=" flex flex-col gap-2 text-sm lg:text-lg mt-4">
                {item.features.map((feature, index) => (
                  <h5
                    key={index}
                    className=" flex justify-start items-center gap-2 text-zinc-600">
                    <FaCheck className=" text-primary" /> <span>{feature}</span>
                  </h5>
                ))}
              </div>
              <button className=" px-3 py-1 text-lg font-semibold text-violet-50 bg-violet-950 rounded-md mt-5">
                Get This Plan
              </button>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Pricing;
