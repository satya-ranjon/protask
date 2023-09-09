import { AiOutlineClose } from "react-icons/ai";

const SelectedSleipners = ({ sleipners, getSleipnerIdOrEvent }) => {
  return (
    sleipners?.length > 0 && (
      <div className="flex flex-wrap min-w-fit">
        {sleipners?.map((item) => (
          <div
            key={item._id}
            className="flex justify-start items-center gap-2 bg-hover rounded-full group  duration-300 transition-all cursor-pointer">
            <img
              src={item.avatar[64].url}
              className=" w-10 h-10 rounded-full border-white border"
              alt="Selected Sleipner"
            />
            <p className="font-semibold text-lg hidden group-hover:block duration-300 transition-all">
              {item.name}
            </p>
            <AiOutlineClose
              className=" text-2xl mr-2 hidden group-hover:block cursor-pointer hover:text-primary duration-300 transition-colors"
              onClick={(event) => getSleipnerIdOrEvent(item._id, event)}
            />
          </div>
        ))}
      </div>
    )
  );
};

export default SelectedSleipners;
