import React from "react";
import images from "../../constants/images";
import Loader from "../../components/common/Loader";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const VerifySuccess = () => {
  const [l, setL] = useState(false);

  const { token } = useParams();

  const navigate = useNavigate();

  return l ? (
    <Loader />
  ) : (
    <div className=" flex justify-center items-center h-screen flex-col gap-4 select-none">
      <img
        src={images.verifySuccess}
        alt="verify"
        className="w-96 h-96 pointer-events-none "
      />

      <h1 className=" text-3xl text-[#00cccc] font-bold">
        Verify Successfully
      </h1>
      <button
        onClick={() => navigate("/login")}
        className="px-3 p-1 text-white bg-[#00cccc] rounded-md cursor-pointer font-medium">
        login
      </button>
    </div>
  );
};

export default VerifySuccess;
