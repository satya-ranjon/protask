import React from "react";
import Container from "../../components/common/Container";
import SectionTitle from "../../components/common/SectionTitle";
import { images } from "../../constants";
import useTitleSet from "../../hooks/useTitleSet";

const Features = () => {
  useTitleSet("Features");

  return (
    <div className=" py-24">
      <Container>
        <SectionTitle>
          Innovative <span className=" text-primary">features</span> to ensure
        </SectionTitle>
        <div className=" grid grid-cols-1 md:grid-cols-3 mt-24 gap-16">
          <div className="flex justify-start items-start gap-4 flex-col ">
            <img src={images.plus} alt="" />
            <h1 className=" font-bold text-xl xl:text-2xl 2xl:text-4xl">
              Intuitive Task Creation
            </h1>
            <h3 className="text-sm xl:text-xl 2xl:text-2xl text-zinc-600">
              Quickly create tasks with our intuitive
            </h3>
          </div>
          <div className="flex justify-start items-start gap-4 flex-col ">
            <img src={images.task} alt="" />
            <h1 className=" font-bold text-xl xl:text-2xl 2xl:text-4xl">
              Smart Task Organization
            </h1>
            <h3 className="text-sm xl:text-xl 2xl:text-2xl text-zinc-600">
              Organize your tasks with ease. and Customize task lists.
            </h3>
          </div>
          <div className="flex justify-start items-start gap-4 flex-col ">
            <img src={images.analysis} alt="" />
            <h1 className=" font-bold text-xl xl:text-2xl 2xl:text-4xl">
              Interactive Dashboard
            </h1>
            <h3 className="text-sm xl:text-xl 2xl:text-2xl text-zinc-600">
              Gain insights at a glance with our interactive dashboard{" "}
            </h3>
          </div>
          <div className="flex justify-start items-start gap-4 flex-col ">
            <img src={images.time} alt="" />
            <h1 className=" font-bold text-xl xl:text-2xl 2xl:text-4xl">
              Advanced Filtering
            </h1>
            <h3 className="text-sm xl:text-xl 2xl:text-2xl text-zinc-600">
              Stay organized with advanced filtering and sorting options.
            </h3>
          </div>
          <div className="flex justify-start items-start gap-4 flex-col ">
            <img src={images.progress} alt="" />
            <h1 className=" font-bold text-xl xl:text-2xl 2xl:text-4xl">
              Task Progress Tracking
            </h1>
            <h3 className="text-sm xl:text-xl 2xl:text-2xl text-zinc-600">
              Understand where each task stands and monitor overall project
              advancement
            </h3>
          </div>
          <div className="flex justify-start items-start gap-4 flex-col ">
            <img src={images.login} alt="" />
            <h1 className=" font-bold text-xl xl:text-2xl 2xl:text-4xl">
              Mobile Accessibility
            </h1>
            <h3 className="text-sm xl:text-xl 2xl:text-2xl text-zinc-600">
              Access TaskFlow from any device with our responsive design
            </h3>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Features;
