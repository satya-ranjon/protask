import React, { useEffect, useRef, useState } from "react";
import { useLayoutEffect } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { PiEyeSlashLight } from "react-icons/pi";

const InputField = ({ focus = false, type, children, ...argument }) => {
  // Reference to the input element
  const inputRef = useRef();

  // State to track input focus
  const [inputFocus, setInputFocus] = useState(false);

  // State to toggle password visibility
  const [seePassword, setSeePassword] = useState(false);

  // Event handler for input focus
  const handleInputFocus = () => {
    setInputFocus(true);
  };

  // Event handler for input blur
  const handleInputBlur = () => {
    setInputFocus(false);
  };

  // Effect to focus on the input field when `focus` prop is true
  useLayoutEffect(() => {
    if (inputRef.current && focus) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div
      className={`sm:min-w-[400px] py-1 duration-200 transition-colors border-b-2 border-dark ${
        inputFocus ? " border-primary" : " border-dark"
      } gap-2 flex justify-start items-center`}>
      {/* Render the provided icon */}
      {children}

      {/* Input element */}
      <input
        ref={inputRef}
        type={type === "password" ? (seePassword ? "text" : "password") : type}
        className="outline-none w-full text-lg font-mono  placeholder:text-sm placeholder:text-dark-light "
        {...argument}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />

      {/* Render the password visibility toggle icon for password fields */}
      {type === "password" && (
        <div
          className="cursor-pointer"
          onClick={() => setSeePassword((prev) => !prev)}>
          {seePassword ? <LiaEyeSolid /> : <PiEyeSlashLight />}
        </div>
      )}
    </div>
  );
};

export default InputField;
