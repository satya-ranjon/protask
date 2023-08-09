import { useDispatch, useSelector } from "react-redux";
import { updateDocument } from "../../../services/task/createTaskSlice";
import { BlockNoteView, useBlockNote } from "@blocknote/react";

const DocumentAdd = () => {
  const dispatch = useDispatch();
  const description = useSelector((state) => state.createTask.description);

  // Creates a new editor instance.
  const editor = useBlockNote({
    theme: "light",
    // initialContent: initialState,
    initialContent: description,
    // Listens for when the editor's contents change.
    onEditorContentChange: (editor) =>
      dispatch(updateDocument(editor.topLevelBlocks)),
  });
  return <BlockNoteView editor={editor} />;
};

export default DocumentAdd;
