import { useState } from "react";
import TitleInput from "./TitleInput";
import StatusSet from "./StatusSet";
import TagsSet from "./TagsSet";
import BlockNoteView from "./BlockNoteView";
import { useSelector } from "react-redux";

const CreateTask = () => {
  const state = useSelector((state) => state.createTask);

  return (
    <div className="p-8">
      <TitleInput />

      <StatusSet />

      <TagsSet />

      <hr className="my-4" />

      <BlockNoteView />
    </div>
  );
};

export default CreateTask;
