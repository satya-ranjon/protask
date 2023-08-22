import { useSelector } from "react-redux";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import Modal from "../../components/modal/Modal";
import { selectUserAvatar200 } from "../../services/auth/authSelector";
import { useUpdateProfilePictureMutation } from "../../services/user/userApi";
import LoadingButton from "../../components/common/LoadingButton";

const ProfilePicture = () => {
  const avatar = useSelector(selectUserAvatar200);
  const [selectFile, setSelectFile] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const inputRef = useRef(null);
  const allowedFileTypes = ["image/jpg", "image/jpeg", "image/png"];
  // allowedFileTypes.includes(fileExtension);

  const [updateProfilePicture, { isSuccess, isLoading }] =
    useUpdateProfilePictureMutation();

  // Effect to handle successful profile picture update
  useEffect(() => {
    if (isSuccess) {
      setSuccess(true);
    }
  }, [isSuccess]);

  // Effect to reset state when the modal is closed
  useEffect(() => {
    if (!modalIsOpen) {
      setSelectFile(null);
      setSuccess(false);
    }
  }, [modalIsOpen]);

  // Effect to control modal open/close based on file selection and success status
  useEffect(() => {
    if (allowedFileTypes.includes(selectFile?.type)) {
      selectFile ? setModalIsOpen(true) : setModalIsOpen(false);
      selectFile && !success ? setModalIsOpen(true) : setModalIsOpen(false);
    } else {
      setModalIsOpen(false);
    }
  }, [success, selectFile]);

  // Handle click on profile picture to trigger file selection
  const handleSelectImage = () => {
    if (!isLoading) {
      inputRef.current.click();
    }
  };

  // Handle modal close
  const handleCloseModal = () => {
    if (!isLoading) {
      setModalIsOpen(false);
      setSelectFile(null);
    }
  };

  // Handle image upload
  const handleUpload = () => {
    if (selectFile) {
      const formData = new FormData();
      formData.append("profilePicture", selectFile);
      updateProfilePicture(formData);
    }
  };

  // Function to render modal content
  const renderModalContent = () => (
    <div
      onClick={handleSelectImage}
      className={`flex justify-center items-center w-full h-full ${
        !isLoading && "cursor-pointer"
      }`}>
      {selectFile && (
        <img
          className="max-h-[600px]"
          src={URL.createObjectURL(selectFile)}
          alt="Selected"
        />
      )}
    </div>
  );
  return (
    <>
      <div className=" relative w-52 h-52 rounded-full overflow-hidden profile_imagContainer">
        <img className=" w-52 h-52" src={avatar} alt={avatar} />
        <div
          onClick={handleSelectImage}
          className={`w-full h-full absolute bg-[#0000005e] -top-100 left-0 duration-300 transition-all selectImage cursor-pointer`}>
          <div className="w-full h-full text-white flex justify-center items-center text-2xl">
            <AiOutlineCloudUpload />
            <input
              type="file"
              accept="image/jpeg, image/jpg, image/png"
              ref={inputRef}
              onChange={(e) => setSelectFile(e.target.files[0])}
              className="hidden"
            />
          </div>
        </div>
      </div>

      {/* Modal for image selection */}
      <Modal isOpen={modalIsOpen} onClose={handleCloseModal}>
        {renderModalContent()}
        <div className=" w-full flex justify-end mt-4">
          <LoadingButton
            isLoading={isLoading}
            disabled={isLoading}
            onClick={handleUpload}>
            {isLoading ? "Saving..." : "Save"}
          </LoadingButton>
        </div>
      </Modal>
    </>
  );
};

export default ProfilePicture;
