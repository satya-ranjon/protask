import React, { useState, useEffect, useRef } from "react";

const TitleInput = ({ titleHandle }) => {
  const [textareaValue, setTextareaValue] = useState("");
  const [textareaHeight, setTextareaHeight] = useState(0);
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

  // Event handler for textarea change
  const handleTextareaChange = (event) => {
    const { value } = event.target;
    setTextareaValue(value);
    titleHandle(value);
  };

  // Run adjustHeight whenever textareaValue changes
  useEffect(() => {
    adjustHeight();
  }, [textareaValue]);

  return (
    <textarea
      ref={textareaRef}
      className="p-2 w-full font-bold text-4xl h-fit  overflow-hidden outline-none border-none placeholder:text-gray-300"
      placeholder="Untitled"
      value={textareaValue}
      style={{ height: `${textareaHeight}px` }}
      onChange={handleTextareaChange}
    />
  );
};

export default TitleInput;
