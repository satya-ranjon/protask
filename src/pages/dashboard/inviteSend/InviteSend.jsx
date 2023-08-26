import Button from "../../../components/common/Button";
import { images } from "../../../constants";
import AddedEmailList from "./AddedEmailList";

const emails = [
  "email1@example.com",
  "email2@example.com",
  "email3@example.com",
  "email4@example.com",
  "email5@example.com",
  "email6@example.com",
  "email7@example.com",
  "email8@example.com",
  "email9@example.com",
  "email10@example.com",
  "email11@example.com",
  "email12@example.com",
  "email13@example.com",
  "email14@example.com",
  "email15@example.com",
  "email16@example.com",
  "email17@example.com",
  "email18@example.com",
  "email19@example.com",
  "email20@example.com",
];
const InviteSend = ({ handleAddOrSendSleipner }) => {
  return (
    <>
      <div className="flex justify-center items-center lg:absolute lg:left-0 lg:top-0 pointer-events-none">
        <img
          src={images.inviteSend}
          alt="inviteSend image"
          className="w-56 lg:w-72 xl:w-96 3xl:w-[700px]"
        />
      </div>
      <div className="w-full flex justify-center items-center lg:h-screen">
        <div className="max-w-[400px] xl:max-w-[520px]">
          <h1 className=" font-bold text-2xl xl:text-4xl"> Invite Send </h1>
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
          <AddedEmailList emails={emails} />
          <div className="w-full mt-3 xl:mt-6 flex justify-start items-center gap-10">
            <Button>Done</Button>
            <Button type="white">Add more members</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InviteSend;
