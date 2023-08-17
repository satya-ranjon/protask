import React, { useState } from "react";
import { useSelector } from "react-redux";
import { BiUser } from "react-icons/bi";
import { BsKey } from "react-icons/bs";
import Item from "./Item";
import ProfilePicture from "./ProfilePicture";
import ChangeNameEmail from "./ChangeNameEmail";
import ChangePassword from "./ChangePassword";
import Message from "./Message";

// Define menu items with icons
const MENU_ITEMS = [
  { id: 1, name: "Account", icon: <BiUser /> },
  { id: 2, name: "Change Password", icon: <BsKey /> },
];

const Setting = () => {
  const [activeModal, setActiveModal] = useState({ id: "Account" });

  // Function to handle changing the active modal
  const handleActiveModal = (value) => {
    setActiveModal({ id: value });
  };
  return (
    <div className="mx-3 sm:mx-5 2xl:mx-16 py-3 2xl:py-10 ">
      <div className=" mt-4 w-full flex justify-start items-start gap-4">
        <div className="min-w-fit max-w-[20%] sm:min-w-[300px] text-dark-light">
          {/* Component to display the user's profile picture */}
          <ProfilePicture />
          <div className="mt-5">
            {/* // Component representing each item in the menu */}
            {MENU_ITEMS?.map((item) => (
              <Item
                key={item.id}
                isActive={activeModal.id === item.name ? true : false}
                onClick={() => handleActiveModal(item.name)}>
                {item.icon} <span>{item.name}</span>
              </Item>
            ))}
          </div>
        </div>
        <div className=" overflow-scroll overflow-x-hidden max-h-[880px]   w-[80%]">
          {/* Render the appropriate content based on the active modal */}
          {activeModal.id === "Account" && <ChangeNameEmail />}
          {activeModal.id === "Change Password" && <ChangePassword />}
        </div>
      </div>
    </div>
  );
};

export default Setting;
