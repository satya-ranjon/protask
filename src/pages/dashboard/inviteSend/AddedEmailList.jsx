import { AiOutlineDelete } from "react-icons/ai";
import { GiCheckMark } from "react-icons/gi";
import LoadingIconPrimary from "../../../components/common/LoadingIconPrimary";

const AddedEmailList = ({
  emails,
  handleDeleteSingleEmail,
  isSuccess = false,
  isLoading = false,
}) => {
  return (
    <div className="w-full xl:mt-6  max-h-[300px] overflow-y-scroll">
      {emails?.map((email) => (
        <div
          key={email}
          className="flex justify-between items-center text-sm xl:text-lg font-medium border-b-2 py-2">
          <span>{email}</span>
          {!isLoading && !isSuccess && (
            <AiOutlineDelete
              onClick={() => handleDeleteSingleEmail(email)}
              className="text-2xl hover:text-primary cursor-pointer duration-300 transition-colors"
            />
          )}
          {isLoading && <LoadingIconPrimary />}
          {isSuccess && <GiCheckMark className=" text-primary text-xl" />}
        </div>
      ))}
    </div>
  );
};

export default AddedEmailList;
