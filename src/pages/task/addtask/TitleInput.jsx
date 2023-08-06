import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTitle } from "../../../services/task/createTaskSlice";

const TitleInput = () => {
  // const [textareaValue, setTextareaValue] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(0);
  const textareaValue = useSelector((state) => state.createTask.title);

  // Ref to access the textarea DOM element
  const textareaRef = useRef(null);
  const dispatch = useDispatch();

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

  // Event handler for textarea change
  const handleTextareaChange = (event) => {
    const { value } = event.target;
    dispatch(updateTitle(value));
  };

  // Run adjustHeight whenever textareaValue changes
  useEffect(() => {
    adjustHeight();
  }, [textareaValue]);

  return (
    <textarea
      ref={textareaRef}
      className="p-2 w-full font-bold text-5xl h-fit  overflow-hidden outline-none border-none placeholder:text-gray-300"
      placeholder="Untitled"
      value={textareaValue}
      style={{ height: `${textareaHeight}px` }}
      onChange={handleTextareaChange}
    />
  );
};

export default TitleInput;
