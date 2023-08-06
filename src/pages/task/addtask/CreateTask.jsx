import { useState } from "react";
import TitleInput from "./TitleInput";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const titleHandle = (value) => {
    setTitle(value);
  };
  console.log(title);
  return (
    <div className="p-8">
      <div className="">
        <TitleInput titleHandle={titleHandle} />
      </div>
      <div className="">
        <MdOutlineArrowDropDownCircle />
      </div>
    </div>
  );
};

export default CreateTask;
