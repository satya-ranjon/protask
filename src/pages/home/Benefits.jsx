import { useState } from "react";
import Container from "../../components/common/Container";
import { GoDotFill } from "react-icons/go";
import { SiNotion, SiJira, SiSlack } from "react-icons/si";
import benefit from "../../data/benefits.json";
import { motion } from "framer-motion";
import SectionTitle from "../../components/common/SectionTitle";

const modalVariants = {
  hidden: {
    opacity: 0,
    y: "20%",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const Benefits = () => {
  const [active, setActive] = useState(1);
  return (
    <div className=" py-28">
      <Container>
        <SectionTitle>
          Who <span className=" text-primary">Benefits</span> from Our Task
          Management Solution?
        </SectionTitle>

        <div className=" flex flex-col lg:flex-row justify-between items-start mt-10 md:mt-24 gap-5 xl:gap-28">
          {/* Tab Button  */}
          <div className=" w-full lg:w-4/12 flex flex-wrap justify-center lg:flex-col gap-3 text-base md:text-xl xl:text-2xl font-bold">
            {benefit.map((item) => {
              const isActive = active == item.id;
              return (
                <h3
                  onClick={() => setActive(item.id)}
                  key={item.id}
                  className={`w-fit rounded-md border-transparent p-1 md:p-3 cursor-pointer duration-300 transition-colors ease-in-out hover:border-primary border-2 lg:w-full px-2 md:px-4 ${
                    isActive && "border-primary bg-red-50"
                  }`}>
                  {item.name}
                </h3>
              );
            })}
          </div>

          {/* Tab Info  */}
          <div className="w-full lg:w-8/12 ">
            {benefit.map((item) => {
              const isActive = active == item.id;

              return (
                isActive && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={modalVariants}
                    key={item.id}
                    className="text-zinc-500">
                    <div className=" flex flex-col md:flex-row justify-start items-start gap-4 px-4 pr-8 py-6 border-2  rounded-lg">
                      <video
                        src={item.url}
                        autoPlay
                        loop
                        muted
                        height={250}
                        width={250}
                      />
                      <div className="">
                        <h1 className=" font-semibold text-lg">{item.name}</h1>
                        <h3 className=" text-zinc-600 text-base">
                          {item.description}
                        </h3>
                        <div className=" flex flex-col gap-2 mt-4  border-b-2 pb-4">
                          {item.features.map((feature, index) => (
                            <h1
                              key={index}
                              className=" flex justify-start gap-2 items-center">
                              <GoDotFill />
                              <span className="text-zinc-600 text-base">
                                {feature}
                              </span>
                            </h1>
                          ))}

                          <div className=" flex justify-start gap-3 text-2xl mt-3">
                            <SiNotion />
                            <SiJira />
                            <SiSlack />
                          </div>
                        </div>
                        <div className=" flex justify-end mt-4">
                          <span className=" font-semibold text-lg cursor-pointer  text-primary ">
                            Learn more
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Benefits;
