import useTitleSet from "../../hooks/useTitleSet";
import DashBoardHeader from "./DashBoardHeader";
import FullModal from "../../components/modal/FullModal";
import { useState } from "react";
import InviteSend from "./inviteSend/InviteSend";
import AddSleipner from "./addSleipner/AddSleipner";
import Activates from "./Activates";
import ToDayEvents from "./ToDayEvents";

const Dashboard = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [addSleipner, setAddSleipner] = useState(true);

  useTitleSet("Dashboard");

  const handleOpenModal = () => {
    setModalIsOpen((prv) => !prv);
    setAddSleipner(true);
  };
  const handleAddOrSendSleipner = () => {
    setAddSleipner((prv) => !prv);
  };

  return (
    <>
      <DashBoardHeader handleAddSleipner={handleOpenModal} />

      <div className="2xl:mx-14 flex flex-col lg:flex-row justify-between">
        <div className="w-full">
          <Activates />
        </div>

        <div className="lg:ml-24 min-w-[400px]">
          <ToDayEvents />
        </div>
      </div>
      <FullModal isOpen={modalIsOpen} onClose={handleOpenModal}>
        {/* <InviteSend /> */}
        {addSleipner ? (
          <AddSleipner handleAddOrSendSleipner={handleAddOrSendSleipner} />
        ) : (
          <InviteSend handleAddOrSendSleipner={handleAddOrSendSleipner} />
        )}
      </FullModal>
    </>
  );
};

export default Dashboard;
