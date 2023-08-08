import { useDispatch, useSelector } from "react-redux";
import { updateDocument } from "../../../services/task/createTaskSlice";
import { useEffect, useRef, useState } from "react";

const BlockNoteView = () => {
  const [textareaHeight, setTextareaHeight] = useState(0);
  const dispatch = useDispatch();
  const description = useSelector((state) => state.createTask.description);

  // Ref to access the textarea DOM element
  const textareaRef = useRef(null);

  // Function to check if the textarea content overflows
  const isOverflowing = () => {
    if (textareaRef.current) {
      return (
        textareaRef.current.scrollHeight > textareaRef.current.clientHeight
      );
    }
    return false;
  };

  // Function to adjust textarea height based on content overflow
  const adjustHeight = () => {
    if (isOverflowing()) {
      const newHeight = textareaRef.current.scrollHeight + 2;
      setTextareaHeight(newHeight);
    }
  };

  // Run adjustHeight whenever textareaValue changes
  useEffect(() => {
    adjustHeight();
  }, [description]);

  const handleDocument = (value) => {
    dispatch(updateDocument(value));
  };

  return (
    <textarea
      ref={textareaRef}
      name="document"
      rows="10"
      placeholder="Write hare"
      className="w-full outline-none "
      value={description}
      style={{ height: `${textareaHeight}px` }}
      onChange={(e) => handleDocument(e.target.value)}
    />
  );
};

export default BlockNoteView;
