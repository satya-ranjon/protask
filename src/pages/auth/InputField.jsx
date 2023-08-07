import React, { useEffect, useRef, useState } from "react";
import { LiaEyeSolid } from "react-icons/lia";
import { PiEyeSlashLight } from "react-icons/pi";

const InputField = ({ focus = false, type, children, ...argument }) => {
  const inputRef = useRef();
  const [inputFocus, setInputFocus] = useState(false);
  const [seePassword, setSeePassword] = useState(false);

  const handleInputFocus = () => {
    setInputFocus(true);
  };

  const handleInputBlur = () => {
    setInputFocus(false);
  };

  useEffect(() => {
    if (inputRef.current && focus) {
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
        type={type === "password" ? (seePassword ? "text" : "password") : type}
        className="outline-none w-full text-lg font-mono  placeholder:text-sm placeholder:text-dark-light "
        {...argument}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {type === "password" && (
        <div
          className="cursor-pointer"
          onClick={() => setSeePassword((prv) => !prv)}>
          {seePassword ? <LiaEyeSolid /> : <PiEyeSlashLight />}
        </div>
      )}
    </div>
  );
};

export default InputField;
