import InputField from "./InputField";

const ForgetPassword = () => {
  return (
    <div>
      <div className="flex h-screen gap-3 w-full flex-col justify-center items-center">
        <InputField type="password" placeholder="Password" />
        <InputField type="password" placeholder="Confirm Password" />
        <button className="px-10 bg-primary text-white p-2 rounded-md hover:opacity-90 duration-300 transition-opacity">
          Update
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
