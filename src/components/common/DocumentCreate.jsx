import React from "react";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

const DocumentCreate = ({ value, handleValue }) => {
  // Initialize the BlockNote editor using the useBlockNote hook
  const editor = useBlockNote({
    theme: "light",
    initialContent: value,
    onEditorContentChange: (editor) => handleValue(editor.topLevelBlocks),
  });

  // Render the BlockNoteView component with the editor
  return <BlockNoteView editor={editor} />;
};

// Memoize the component to improve performance
export default React.memo(DocumentCreate);
