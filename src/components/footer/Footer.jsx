import { FaInstagram, FaFacebookF, FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import { images } from "../../constants";

const menu = [
  { label: "Home", link: "/" },
  { label: "Features", link: "/features" },
  { label: "Pricing", link: "/pricing" },
];

const Footer = () => {
  return (
    <div className=" pt-24  bg-violet-950  text-white">
      <Container>
        <div className=" grid grid-cols-2 gap-6 lg:grid-cols-5 ">
          <div className=" col-span-1 lg:col-span-2">
            <div className=" flex justify-start items-center gap-3">
              <img
                src={images.Logo2}
                alt="logo"
                className=" w-10 h-10 lg:w-11 lg:h-11"
              />
              <span className="text-white font-bold text-2xl lg:text-3xl">
                Protask
              </span>
            </div>
            <h1 className="  mt-4 max-w-sm text-sm xl:text-lg xl:text-xl text-gray-200">
              Try our reliable task manager today and experience the difference
              it can make for you team
            </h1>
          </div>
          <div className=" col-span-1 flex flex-col gap-3 text-sm xl:text-lg">
            <h1 className=" font-semibold text-lg md:text-xl">Address</h1>
            <h2 className=" text-gray-200">Technology Park Dhaka</h2>
            <h2 className=" text-gray-200">Recidance 52585 Dhaka</h2>
          </div>
          <div className=" col-span-1 flex flex-col gap-3 text-sm xl:text-lg">
            <h1 className=" font-semibold text-lg md:text-xl">Email Address</h1>
            <h2 className=" text-gray-200">protask@gmail.com</h2>
            <h2 className=" text-gray-200">protaskhelp@gmail.com</h2>
          </div>
          <div className=" col-span-1 flex flex-col gap-3 text-sm xl:text-lg">
            <h1 className=" font-semibold text-lg md:text-xl">Phone Number</h1>
            <h2 className=" text-gray-200">+88 018000000000</h2>
            <h2 className=" text-gray-200">+88 018000000000</h2>
          </div>
        </div>
        <div className=" flex flex-col md:flex-row gap-5 items-center justify-between py-8 border-b-2 border-violet-800 ">
          <div className=" flex justify-start items-center text-3xl gap-4 ">
            <FaInstagram />
            <FaPinterest />
            <FaXTwitter />
            <FaFacebookF />
          </div>
          <div className=" flex justify-start items-center gap-5 text-lg font-semibold ">
            {menu.map((item, index) => (
              <Link key={index} to={item.link}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className=" py-8 text-center">
          <h1>© 2023 Satya Ranjon. All rights reserved.</h1>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
