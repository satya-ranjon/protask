import { useState } from "react";
import TitleInput from "./TitleInput";
import StatusSet from "./StatusSet";
import TagsSet from "./TagsSet";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState("");

  const titleHandle = (value) => {
    setTitle(value);
  };

  const statusHandle = (value) => {
    setStatus(value);
  };

  const tagsHandle = (value) => {
    setTags(value);
  };

  console.log(title, status, tags);

  return (
    <div className="p-8">
      <TitleInput titleHandle={titleHandle} />

      <StatusSet statusHandle={statusHandle} />

      <TagsSet tagsHandle={tagsHandle} />
    </div>
  );
};

export default CreateTask;
