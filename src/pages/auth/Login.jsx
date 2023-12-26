import { Link } from "react-router-dom";
import { images } from "../../constants";
import Form from "./Form";
import useTitleSet from "../../hooks/useTitleSet";

const Login = () => {
  useTitleSet("Login");
  return (
    <div className=" container mx-auto font-roboto flex flex-col items-center justify-center h-screen w-full  select-none ">
      <div className=" flex justify-between gap-10 items-start relative ">
        <img
          className="w-72 hidden sm:block absolute sm:-left-[80%] pointer-events-none"
          src={images.Registration}
          alt="login"
        />
        <div className="w-full">
          <h1 className="text-center flex gap-3 justify-center items-center text-primary text-4xl font-bold my-3">
            <Link to="/">
              <img
                className="pointer-events-none w-12"
                src={images.Logo}
                alt={images.Logo}
              />
            </Link>
            Login
          </h1>

          {/* Render the login form */}
          <Form />

          {/* Link to create a new account */}
          <p className=" text-sm font-normal text-dark-light my-4">
            You have no account !{" "}
            <Link to="/register" className=" text-primary">
              @create account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
