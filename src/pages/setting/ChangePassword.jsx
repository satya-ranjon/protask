import React, { useEffect, useState } from "react";
import Message from "./Message";
import { useChangePasswordMutation } from "../../services/user/userApi";

const initialState = {
  newPassword: "",
  confirmPassword: "",
  oldPassword: "",
};

const ChangePassword = () => {
  const [inputValue, setInputValue] = useState(initialState);
  const [showMessage, setShowMessage] = useState({
    type: "error",
    message: "",
  });

  const [changePassword, { isSuccess, isLoading, isError }] =
    useChangePasswordMutation();

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
        message: "Password change successfully",
      });
      clearMessages();
      setInputValue(initialState);
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
    if (inputValue.newPassword.length === 0) {
      setShowMessage({
        type: "error",
        message: "Define New Password",
      });
      clearMessages();
    } else if (inputValue.newPassword !== inputValue.confirmPassword) {
      setShowMessage({
        type: "error",
        message: "Password Not Match",
      });
      clearMessages();
    } else if (inputValue.newPassword.length < 6) {
      setShowMessage({
        type: "error",
        message: "Password More then 6 character",
      });
      clearMessages();
    } else if (!inputValue.oldPassword.length) {
      setShowMessage({
        type: "error",
        message: "Define old password !",
      });
      clearMessages();
    } else {
      changePassword({
        newPassword: inputValue.newPassword,
        oldPassword: inputValue.oldPassword,
      });
    }
  };

  return (
    <>
      <Message type={showMessage.type} message={showMessage.message} />
      <form
        className="mt-20 flex w-full flex-col gap-4"
        onSubmit={handleSubmit}>
        <div className="flex w-full flex-col">
          <label htmlFor="" className=" text-xl my-2 font-semibold">
            New Password
          </label>
          <input
            type="text"
            value={inputValue.newPassword}
            onChange={(e) =>
              setInputValue({ ...inputValue, newPassword: e.target.value })
            }
            className=" outline-none border-2 p-2"
            placeholder=" New Password"
          />
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="" className=" text-xl my-2 font-semibold">
            Confirm New Password
          </label>
          <input
            value={inputValue.confirmPassword}
            onChange={(e) =>
              setInputValue({ ...inputValue, confirmPassword: e.target.value })
            }
            type="text"
            className=" outline-none border-2 p-2"
            placeholder="Confirm New Password"
          />
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="" className=" text-xl my-2 font-semibold">
            Old Password
          </label>
          <input
            value={inputValue.oldPassword}
            onChange={(e) =>
              setInputValue({ ...inputValue, oldPassword: e.target.value })
            }
            type="text"
            className=" outline-none border-2 p-2"
            placeholder="Old Password"
          />
        </div>
        <div className=" w-full flex justify-end mt-4">
          <button
            disabled={isLoading}
            className=" text-lg  bg-black text-white rounded-sm p-2 px-8">
            {isLoading ? "Waiting.." : "Change Password"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ChangePassword;
