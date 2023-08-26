import { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import Button from "../../../components/common/Button";
import { images } from "../../../constants";
import AddedEmailList from "./AddedEmailList";
import AddSingleEmail from "./AddSingleEmail";

const InviteSend = ({ handleAddOrSendSleipner }) => {
  const [sentEmailModal, setEmailModal] = useState(false);
  const [addedEmailList, setAddedEmailList] = useState([]);

  const handleAddSingleEmailModal = () => {
    setEmailModal((prev) => !prev);
  };
  const handleAddedEmailList = (email) => {
    if (email) {
      setAddedEmailList([...addedEmailList, email]);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center lg:absolute lg:left-0 lg:top-0 pointer-events-none">
        <img
          src={images.inviteSend}
          alt="inviteSend image"
          className="w-56 lg:w-72 xl:w-96 3xl:w-[700px]"
        />
      </div>
      <div className="  w-full flex justify-center items-center lg:h-screen">
        <div className="relative max-w-[400px] xl:max-w-[520px]">
          <h1 className=" font-bold text-4xl lg:text-5xl xl:text-6xl">
            Invite Send
          </h1>
          <div className=" text-dark-light text-sm xl:text-lg mt-2 xl:mt-4">
            You have add
            <span className=" font-medium text-gray-800"> 3 Members </span> to
            <span className=" font-medium text-gray-800"> Sleipner </span>
            workspace. You can manage them into the
            <span
              onClick={handleAddOrSendSleipner}
              className=" font-medium text-primary border-b border-b-[#f5d592] cursor-pointer
            ">
              {" "}
              My team{" "}
            </span>
            section
          </div>
          {/* Added email list  */}
          <AddedEmailList emails={addedEmailList} />
          <div className="w-full mt-3 xl:mt-6 flex justify-start items-center gap-10">
            {sentEmailModal ? (
              <AddSingleEmail
                handleAddedEmailList={handleAddedEmailList}
                handleAddSingleEmailModal={handleAddSingleEmailModal}
              />
            ) : (
              <>
                <Button disabled={addedEmailList?.length === 0}>
                  <span>Done</span> <BsCheckLg />
                </Button>
                <Button type="white" onClick={handleAddSingleEmailModal}>
                  {addedEmailList?.length > 0
                    ? "Add more members"
                    : "Add member"}
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteSend;
