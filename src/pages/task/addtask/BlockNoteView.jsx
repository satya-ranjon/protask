import React from "react";

const BlockNoteView = ({ handleDocument }) => {
  return (
    <textarea
      name="document"
      rows="10"
      placeholder="Write hare"
      className="w-full outline-none "
      onChange={(e) => handleDocument(e.target.value)}
    />
  );
};

export default BlockNoteView;
