import React, { useState, useEffect, useRef } from "react";

const TextareaInput = ({
  placeholder = "",
  value = "",
  size = "lg",
  handleTitleValue = () => {},
}) => {
  // const [textareaValue, setTextareaValue] = useState("");
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
  const handleInputValue = (event) => {
    handleTitleValue(event.target.value);
  };

  // Run adjustHeight whenever textareaValue changes
  useEffect(() => {
    adjustHeight();
  }, [value]);

  const classes =
    size === "sm"
      ? "p-1 text-3xl font font-semibold"
      : "p-2 text-5xl font-bold";

  return (
    <textarea
      ref={textareaRef}
      className={`${classes} w-full h-fit  overflow-hidden outline-none border-none placeholder:text-gray-300`}
      placeholder={placeholder}
      value={value}
      style={{ height: `${textareaHeight}px` }}
      onChange={handleInputValue}
    />
  );
};

export default React.memo(TextareaInput);
