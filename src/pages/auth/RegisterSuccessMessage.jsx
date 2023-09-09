import React from "react";
import { images } from "../../constants";
import { useNavigate } from "react-router-dom";

const RegisterSuccessMessage = () => {
  const navigate = useNavigate();
  return (
    <div className=" select-none  flex gap-4 flex-col justify-center items-center h-screen">
      <img
        src={images.registrationSuccess}
        alt="image"
        className="pointer-events-none w-96"
      />
      <h1 className=" text-4xl font-bold text-primary">
        Your are registration successfully
      </h1>
      <h1 className=" text-3xl font-bold text-primary">Verify your account</h1>
      <h1 className=" text-xl font-bold text-zinc-600">Check your email</h1>
      <button
        onClick={() => navigate("/login")}
        className="px-3 p-1 text-zinc-700 bg-[#ffeeeb] rounded-md cursor-pointer font-medium">
        login
      </button>
    </div>
  );
};

export default RegisterSuccessMessage;
