import { useSelector } from "react-redux";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useEffect, useRef, useState, useCallback } from "react";
import Modal from "../../components/modal/Modal";
import { selectUserAvatar } from "../../services/auth/authSelector";

const ProfilePicture = () => {
  const avatar = useSelector(selectUserAvatar);
  const [selectFile, setSelectFile] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (selectFile) {
      setModalIsOpen(true);
    }
  }, [selectFile]);

  const handleSelectImage = () => {
    inputRef.current.click();
  };

  return (
    <>
      <div className=" relative w-52 h-52 rounded-full overflow-hidden profile_imagContainer">
        <img
          className=" w-52 h-52"
          src="http://source.unsplash.com/200x200/?man"
          alt={avatar}
        />
        <div
          onClick={handleSelectImage}
          className="cursor-pointer w-full h-full absolute bg-[#0000005e] -top-100 left-0 duration-300 transition-all selectImage">
          <div className="w-full h-full text-white flex justify-center items-center text-2xl">
            <AiOutlineCloudUpload />
            <input
              ref={inputRef}
              onChange={(e) => setSelectFile(e.target.files[0])}
              type="file"
              className="hidden"
            />
          </div>
        </div>
      </div>

      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        <div>
          <div className=" w-full flex justify-end mt-4">
            <button className="text-lg bg-black text-white rounded-sm p-2 px-8">
              Save
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProfilePicture;
