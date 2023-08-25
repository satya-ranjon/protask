import SingleEvent from "../../components/event/SingleEvent";

const EventGroup = () => {
  return (
    <div className="min-w-[400px] xl:min-w-[600px] pt-10 sm:pt-0 ">
      <h1 className="px-4 font-medium text-xl text-dark-light mb-4 border-b-2 pb-10 border-b-gray-800 ">
        03'JUN, FRIDAY
      </h1>
      <div className="sm:max-h-[590px] 2xl:max-h-[640px]  overflow-scroll">
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
        <SingleEvent />
      </div>
    </div>
  );
};

export default EventGroup;
