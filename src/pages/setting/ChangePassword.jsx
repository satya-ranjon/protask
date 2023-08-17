import React, { useEffect, useState } from "react";
import Message from "./Message";
import { useChangePasswordMutation } from "../../services/user/userApi";

const initialState = {
  newPassword: "",
  confirmPassword: "",
  oldPassword: "",
};

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [oldPassword, setOldPassword] = useState("");
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
      setNewPassword("");
      setConfirmPassword("");
      setOldPassword("");
      setShowMessage({
        type: "success",
        message: "Password change successfully",
      });
      setTimeout(() => {
        setShowMessage({
          message: "",
        });
      }, 3000);
    }

    // Handle error message display and timeout
    if (isError) {
      setShowMessage({
        type: "error",
        message: "Error , Please check your credentials !",
      });
      setTimeout(() => {
        setShowMessage({
          message: "",
        });
      }, 3000);
    }
  }, [isSuccess, isError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword.length === 0) {
      setShowMessage({
        type: "error",
        message: "Define New Password",
      });
      setTimeout(() => {
        setShowMessage({
          message: "",
        });
      }, 3000);
    } else if (newPassword !== confirmPassword) {
      setShowMessage({
        type: "error",
        message: "Password Not Match",
      });
      setTimeout(() => {
        setShowMessage({
          message: "",
        });
      }, 3000);
    } else if (newPassword.length < 6 || oldPassword.length < 6) {
      setShowMessage({
        type: "error",
        message: "Password More then 6 character",
      });
      setTimeout(() => {
        setShowMessage({
          message: "",
        });
      }, 3000);
    } else {
      changePassword({ newPassword: newPassword, oldPassword: oldPassword });
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
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className=" outline-none border-2 p-2"
            placeholder=" New Password"
          />
        </div>
        <div className="flex w-full flex-col">
          <label htmlFor="" className=" text-xl my-2 font-semibold">
            Confirm New Password
          </label>
          <input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
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
