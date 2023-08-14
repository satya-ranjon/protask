import { AiOutlineDashboard, AiOutlineCalendar } from "react-icons/ai";
import { GoTasklist } from "react-icons/go";
import { IoDocumentOutline } from "react-icons/io5";

const menuItems = [
  { path: "/dashboard", icon: <AiOutlineDashboard /> },
  { path: "/event", icon: <AiOutlineCalendar /> },
  { path: "/tasks", icon: <GoTasklist /> },
  { path: "/document", icon: <IoDocumentOutline /> },
];

export default menuItems;
