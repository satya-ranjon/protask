import { useState } from "react";
import TitleInput from "./TitleInput";
import StatusSet from "./StatusSet";
import TagsSet from "./TagsSet";
import BlockNoteView from "./BlockNoteView";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const [tags, setTags] = useState("");
  const [document, setDocument] = useState("");

  const titleHandle = (value) => {
    setTitle(value);
  };

  const statusHandle = (value) => {
    setStatus(value);
  };

  const tagsHandle = (value) => {
    setTags(value);
  };

  const handleDocument = (value) => {
    setDocument(value);
  };
  console.log(document);
  return (
    <div className="p-8">
      <TitleInput titleHandle={titleHandle} />

      <StatusSet statusHandle={statusHandle} />

      <TagsSet tagsHandle={tagsHandle} />

      <hr className="my-4" />

      <BlockNoteView handleDocument={handleDocument} />
    </div>
  );
};

export default CreateTask;
