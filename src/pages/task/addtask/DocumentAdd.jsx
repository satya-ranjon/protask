import { useDispatch, useSelector } from "react-redux";
import { updateDocument } from "../../../services/task/taskSlice";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

const DocumentAdd = () => {
  // Redux dispatch to update the document content
  const dispatch = useDispatch();

  // Get the current document description from the Redux store
  const description = useSelector((state) => state.taskSlice.task.description);

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

export default DocumentAdd;
