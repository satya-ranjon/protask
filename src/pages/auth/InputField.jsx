import React, { useEffect, useRef, useState } from "react";

const InputField = ({ focus = false, children, ...argument }) => {
  const inputRef = useRef();
  const [inputFocus, setInputFocus] = useState(false);

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  useEffect(() => {
    if (inputRef.current && focus) {
      console.log("focus");
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      className={`sm:min-w-[400px] py-1 duration-200 transition-colors border-b-2 border-dark ${
        inputFocus ? " border-primary" : " border-dark"
      } gap-2 flex justify-start items-center`}>
      {children}
      <input
        ref={inputRef}
        className="outline-none w-full text-lg font-mono  placeholder:text-sm placeholder:text-dark-light "
        {...argument}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
    </div>
  );
};

export default InputField;
