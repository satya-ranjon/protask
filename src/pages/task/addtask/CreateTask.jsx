import { useState } from "react";
import TitleInput from "./TitleInput";
import StatusSet from "./StatusSet";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const titleHandle = (value) => {
    setTitle(value);
  };
  const statusHandle = (value) => {
    setTitle(value);
  };
  console.log(title);
  return (
    <div className="p-8">
      <div className="">
        <TitleInput titleHandle={titleHandle} />
      </div>

      <StatusSet statusHandle={statusHandle} />
    </div>
  );
};

export default CreateTask;
