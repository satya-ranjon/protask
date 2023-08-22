import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useUpdateUserInfoMutation } from "../../services/user/userApi";
import Message from "./Message";
import { selectUserName } from "../../services/auth/authSelector";
import LoadingButton from "../../components/common/LoadingButton";

const ChangeName = () => {
  const name = useSelector(selectUserName);
  const [inputValue, setInputValue] = useState(name);
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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputValue) {
      setShowMessage({
        type: "error",
        message: "Define Your Name !",
      });
      clearMessages();
    } else if (inputValue === name) {
      setShowMessage({
        type: "error",
        message: "Already Update ",
      });
      clearMessages();
    } else {
      updateUserInfo({
        name: inputValue,
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
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            name="name"
            className=" outline-none border-2 p-2"
            placeholder="Change Your Name"
          />
        </div>
        <div className=" w-full flex justify-end mt-4">
          <LoadingButton isLoading={isLoading} disabled={isLoading}>
            {isLoading ? "Updating..." : "Update Name"}
          </LoadingButton>
        </div>
      </form>
    </>
  );
};

export default ChangeName;
