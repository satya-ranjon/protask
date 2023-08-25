import useTitleSet from "../../hooks/useTitleSet";
import BigCalendar from "../event/calendar/BigCalendar";

const Document = () => {
  useTitleSet("Document");
  return (
    <div>
      <BigCalendar />
    </div>
  );
};

export default Document;
