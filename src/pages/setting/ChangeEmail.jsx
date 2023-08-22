import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateUserInfoMutation } from "../../services/user/userApi";
import { isValidEmail } from "../../utils/authInputValidator";
import Message from "./Message";
import { selectUserEmail } from "../../services/auth/authSelector";
import LoadingButton from "../../components/common/LoadingButton";

const ChangeEmail = () => {
  const email = useSelector(selectUserEmail);
  const [inputValue, setInputValue] = useState(email);
  const [showMessage, setShowMessage] = useState({
    type: "error",
    message: "",
  });

  const [updateUserInfo, { isSuccess, isError, isLoading, error }] =
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
        message: error.data.message
          ? error.data.message
          : "Error , Please check your credentials !",
      });
      clearMessages();
    }
  }, [isSuccess, isError]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidEmail(inputValue)) {
      setShowMessage({
        type: "error",
        message: "Define Valid Email !",
      });
      clearMessages();
    } else if (inputValue === email) {
      setShowMessage({
        type: "error",
        message: "Email already exist !",
      });
      clearMessages();
    } else {
      await updateUserInfo({
        email: inputValue,
      });
    }
  };

  return (
    <>
      <Message type={showMessage.type} message={showMessage.message} />

      <form className=" w-full" onSubmit={handleSubmit}>
        <div className="flex w-full flex-col mt-3">
          <label htmlFor="" className=" text-xl my-2 font-semibold">
            Change Email
          </label>
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            className=" outline-none border-2 p-2"
            placeholder="Change Your Email"
          />
        </div>
        <div className=" w-full flex justify-end mt-4">
          <LoadingButton isLoading={isLoading} disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Email"}
          </LoadingButton>
        </div>
      </form>
    </>
  );
};

export default ChangeEmail;
