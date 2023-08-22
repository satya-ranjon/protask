import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateDocument } from "../../../services/task/taskSlice";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";
import { selectTaskDescription } from "../../../services/task/taskSelector";

const DocumentAdd = () => {
  // Redux dispatch to update the document content
  const dispatch = useDispatch();

  //TODO
  console.log("%cDocumentAdd", "color:orange");

  // Get the current document description from the Redux store
  const description = useSelector(selectTaskDescription);

  // Initialize the BlockNote editor
  const editor = useBlockNote({
    theme: "light",
    // Set the initial content of the editor to the current description
    initialContent: description,
    onEditorContentChange: (editor) =>
      // Dispatch an action to update the document content in the Redux store
      dispatch(updateDocument(editor.topLevelBlocks)),
  });

  return <BlockNoteView editor={editor} />;
};

export default React.memo(DocumentAdd);
