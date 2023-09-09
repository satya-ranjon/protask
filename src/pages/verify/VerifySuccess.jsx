import React from "react";
import images from "../../constants/images";
import Loader from "../../components/common/Loader";
import { useNavigate, useParams } from "react-router-dom";
import { useGetVerifyAccountQuery } from "../../services/auth/authApi";

const VerifySuccess = () => {
  const { token } = useParams();
  const tokenModify = token.split("---").join(".");

  const { isLoading } = useGetVerifyAccountQuery(tokenModify);

  const navigate = useNavigate();

  return isLoading ? (
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
