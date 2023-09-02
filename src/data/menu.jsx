import { AiOutlineDashboard, AiOutlineCalendar } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";

const menuItems = [
  { path: "/", icon: <AiOutlineDashboard /> },
  { path: "/tasks", icon: <GoTasklist /> },
  { path: "/event", icon: <AiOutlineCalendar /> },
  // { path: "/document", icon: <IoDocumentOutline /> },
];

export default menuItems;
