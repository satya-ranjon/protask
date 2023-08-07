import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { PiKeyholeDuotone } from "react-icons/pi";
import InputField from "./InputField";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const initialState = { name: "", email: "", password: "" };

const Form = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const { pathname } = useLocation();
  const isRegister = pathname === "/register";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form action="" className="w-full flex flex-col gap-8">
      {isRegister && (
        <InputField
          focus={isRegister}
          onChange={handleInputChange}
          type="text"
          name="name"
          placeholder="Name ">
          <AiOutlineUser className=" text-xl text-dark-light" />
        </InputField>
      )}

      <InputField
        focus={!isRegister}
        onChange={handleInputChange}
        type="email"
        name="email"
        placeholder="Email">
        <AiOutlineMail className=" text-xl text-dark-light" />
      </InputField>
      <InputField
        onChange={handleInputChange}
        type="password"
        name="password"
        placeholder="Password">
        <PiKeyholeDuotone className=" text-xl text-dark-light" />
      </InputField>

      <button className=" w-full bg-primary text-white p-2 rounded-md hover:opacity-90 duration-300 transition-opacity">
        {isRegister ? "Register" : "Login"}
      </button>
    </form>
  );
};

export default Form;
