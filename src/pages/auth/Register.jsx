import { Link } from "react-router-dom";
import { images } from "../../constants";
import Form from "./Form";
import useTitleSet from "../../hooks/useTitleSet";

const Register = () => {
  useTitleSet("Register");
  return (
    <div className=" container mx-auto font-roboto flex flex-col items-center justify-center h-screen w-full">
      <div className=" flex justify-between gap-10 items-start relative ">
        <img
          className="w-72 hidden sm:block absolute sm:-left-[80%]"
          src={images.Login}
          alt="Register"
        />
        <div className="w-full">
          <h1 className="text-center flex gap-3 justify-center items-center text-primary text-4xl font-bold my-3">
            <img className=" w-12" src={images.Logo} alt="" />
            Create a Account
          </h1>

          {/* Render the registration form */}
          <Form />

          {/* Link to navigate to the login page */}
          <p className=" text-sm font-normal text-dark-light my-4">
            You have an account already !{" "}
            <Link to="/login" className=" text-primary">
              @login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
