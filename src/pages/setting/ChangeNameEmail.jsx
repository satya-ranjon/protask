import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateUserInfoMutation } from "../../services/user/userApi";
import { isValidEmail } from "../../utils/authInputValidator";
import Message from "./Message";

const ChangeNameEmail = () => {
  const { email, name } = useSelector((state) => state.auth.user);
  const [inputValue, setInputValue] = useState({ name, email });
  const [showMessage, setShowMessage] = useState({
    type: "error",
    message: "",
  });

  const [updateUserInfo, { isSuccess, isError, isLoading }] =
    useUpdateUserInfoMutation();

  const clearMessages = () => {
    setTimeout(() => {
      setShowMessage({ type: "", message: "" });
    }, 3000);
  };

  useEffect(() => {
    // Handle success message display and timeout
    if (isSuccess) {
      setShowMessage({
        type: "success",
        message: "Update successfully",
      });
      clearMessages();
    }

    // Handle error message display and timeout
    if (isError) {
      setShowMessage({
        type: "error",
        message: "Error , Please check your credentials !",
      });
      clearMessages();
    }
  }, [isSuccess, isError]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(inputValue.email)) {
      setShowMessage({
        type: "error",
        message: "Define Valid Email !",
      });
      clearMessages();
    } else if (inputValue.email === email) {
      setShowMessage({
        type: "error",
        message: "Email already exist !",
      });
      clearMessages();
    } else if (!inputValue.name) {
      setShowMessage({
        type: "error",
        message: "Define Your Name !",
      });
      clearMessages();
    } else {
      updateUserInfo({
        name: inputValue.name,
        email: inputValue.email,
      });
    }
  };

  return (
    <>
      <Message type={showMessage.type} message={showMessage.message} />

      <form className=" w-full" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col mt-20">
          <label htmlFor="" className=" text-xl my-2 font-semibold">
            Change Name
          </label>
          <input
            value={inputValue.name}
            onChange={(e) =>
              setInputValue({ ...inputValue, name: e.target.value })
            }
            type="text"
            name="name"
            className=" outline-none border-2 p-2"
            placeholder="Change Your Name"
          />
        </div>
        <div className="flex w-full flex-col mt-3">
          <label htmlFor="" className=" text-xl my-2 font-semibold">
            Change Email
          </label>
          <input
            value={inputValue.email}
            onChange={(e) =>
              setInputValue({ ...inputValue, email: e.target.value })
            }
            type="text"
            className=" outline-none border-2 p-2"
            placeholder="Change Your Email"
          />
        </div>
        <div className=" w-full flex justify-end mt-4">
          <button
            disabled={isLoading}
            className=" text-lg bg-black text-white rounded-sm p-2 px-8">
            {isLoading ? "Updating..." : "Update"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ChangeNameEmail;
