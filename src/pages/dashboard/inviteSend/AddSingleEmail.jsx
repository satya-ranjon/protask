import { IoIosSend } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
import validateEmail from "../../../utils/isValidEmail";

const AddSingleEmail = ({
  handleAddedEmailList,
  handleAddSingleEmailModal,
  emailList,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState(false);

  const addedEmailList = () => {
    const find = emailList?.find((item) => item === inputValue);
    if (validateEmail(inputValue) && !find) {
      handleAddedEmailList(inputValue);
      setInputValue("");
      setError(false);
    } else {
      setError(true);
    }
  };

  const handleInputChange = (e) => {
    setError(false);
    setInputValue(e.target.value);
  };

  return (
    <div className="w-full border-b flex justify-between items-center py-1">
      <input
        type="text"
        className={`w-full p-2 outline-none ${error && "text-red-600"}`}
        placeholder=" Enter email "
        value={inputValue}
        onChange={handleInputChange}
      />
      <div className="flex gap-4 items-center justify-between w-fit">
        <IoIosSend
          onClick={addedEmailList}
          className=" text-4xl w-fit p-1 text-primary hover:bg-slate-50 transition-colors duration-300 cursor-pointer"
        />
        <GrClose
          onClick={handleAddSingleEmailModal}
          className=" text-4xl w-fit p-1 hover:bg-slate-50 transition-colors duration-300 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default AddSingleEmail;
