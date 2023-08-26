import { AiOutlineCheckCircle } from "react-icons/ai";

const AddedEmailList = ({ emails }) => {
  return (
    <div className="w-full xl:mt-6  max-h-[300px] overflow-y-scroll">
      {emails?.map((email) => (
        <div className="flex justify-between items-center text-sm xl:text-lg border-b-2 py-2">
          <span>{email}</span>
          <AiOutlineCheckCircle />
        </div>
      ))}
    </div>
  );
};

export default AddedEmailList;
