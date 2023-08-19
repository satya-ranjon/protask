import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import { PiKeyholeDuotone } from "react-icons/pi";
import InputField from "./InputField";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  useLoginMutation,
  useRegisterMutation,
} from "../../services/auth/authApi";
import authInputValidator from "../../utils/authInputValidator";

const initialState = { name: "", email: "", password: "" };

const Form = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const [errors, setErrors] = useState(initialState);

  // Determine if it's a registration form based on the URL path
  const { pathname } = useLocation();
  const isRegister = pathname === "/register";

  // Auth-related mutations for registration and login
  const [register, { isLoading: isLoadingRegister }] = useRegisterMutation();
  const [login, { isLoading: isLoadingLogin }] = useLoginMutation();

  // Handle input changes in the form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setErrors({ ...errors, [name]: "" });
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form input and update errors state
    const inputErrors = authInputValidator(inputValue, isRegister);
    setErrors(inputErrors);

    // If there are no input errors, proceed with registration or login
    if (Object.keys(inputErrors).length === 0) {
      try {
        if (isRegister) {
          // Perform registration using the register mutation
          await register({
            name: inputValue.name,
            email: inputValue.email,
            password: inputValue.password,
          }).unwrap();
          window.location.reload();
        } else {
          // Perform login using the login mutation
          await login({
            email: inputValue.email,
            password: inputValue.password,
          }).unwrap();
          window.location.reload();
        }
      } catch (error) {
        // Handle API request errors and update the errors state
        setErrors({
          ...errors,
          requestError: error?.error || error?.data?.message,
        });
      }
    }
  };

  return (
    <>
      {/* Display request error message if present */}
      <p className="h-2 text-red-500 text-xs">{errors?.requestError}</p>
      <form className="w-full flex flex-col gap-2" onSubmit={handleSubmit}>
        {isRegister && (
          // Display name input field only for registration form
          <>
            <p className=" h-2 text-red-500 text-xs"> {errors?.name}</p>
            <InputField
              focus={isRegister}
              onChange={handleInputChange}
              value={inputValue.name}
              type="text"
              name="name"
              // required
              placeholder="Name ">
              <AiOutlineUser className=" text-xl text-dark-light" />
            </InputField>
          </>
        )}

        {/* Display email input field */}
        <p className="h-2 text-red-500 text-xs"> {errors?.email}</p>
        <InputField
          focus={!isRegister}
          onChange={handleInputChange}
          value={inputValue.email}
          type="email"
          name="email"
          // required
          placeholder="Email">
          <AiOutlineMail className=" text-xl text-dark-light" />
        </InputField>

        {/* Display password input field */}
        <p className="h-2 text-red-500 text-xs"> {errors?.password}</p>
        <InputField
          onChange={handleInputChange}
          value={inputValue.password}
          // required
          type="password"
          name="password"
          placeholder="Password">
          <PiKeyholeDuotone className=" text-xl text-dark-light" />
        </InputField>

        {/* Submit button */}
        <button
          disabled={isLoadingLogin || isLoadingRegister}
          className=" w-full bg-primary text-white p-2 rounded-md hover:opacity-90 duration-300 transition-opacity">
          {isRegister
            ? isLoadingRegister
              ? "Registering..."
              : "Register"
            : isLoadingLogin
            ? "Login..."
            : "Login"}
        </button>
      </form>
    </>
  );
};

export default Form;
