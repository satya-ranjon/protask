import { IoIosSend } from "react-icons/io";
import { GrClose } from "react-icons/gr";
import { useState } from "react";
const AddSingleEmail = ({
  handleAddedEmailList,
  handleAddSingleEmailModal,
}) => {
  const [inputValue, setInputValue] = useState("");
  const addedEmailList = () => {
    handleAddedEmailList(inputValue);
    setInputValue("");
  };

  return (
    <div className="w-full border-b flex justify-between items-center py-1">
      <input
        type="text"
        className=" w-full p-2 outline-none "
        placeholder=" Enter email "
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
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
