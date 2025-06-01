import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#2C6252] text-white">
     <div className="container mx-auto">
 {/* Top Image */}
      <div className="flex justify-center items-center pt-10 3xl:ml-[30rem] 2xl:ml-[30rem] xl:ml-[30rem] lg:ml-[23rem]">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1747630031/Mask_Group_23_pyld0k.png"
          alt="Footer Background"
          className="w-full 3xl:max-w-[1100px] 2xl:max-w-[750px] xl:max-w-[650px] lg:max-w-[550px] 3xl:h-[15rem] 2xl:h-[12rem] object-cover "
        />
      </div>

      {/* Middle Section */}
      <div className="max-w-[1152px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 3xl:gap-28 2xl:gap-0 3xl:text-left">
        {/* Logo */}
        <div className="flex items-start container mx-auto lg:ml-60 xl:ml-72 2xl:ml-56 3xl:ml-0 ">
          <a href="/">
            <div className="bg-[#3A7563] px-6 py-4 flex items-center space-x-2 w-fit 3xl:mt-2 2xl:mt-2 xl:mt-1 lg:mt-1 ">
              <img src="/logo.svg" alt="Cuisine Logo" className="3xl:w-6 3xl:h-6 2xl:w-6 2xl:h-6 xl:w-6 xl:h-6 lg:w-3 lg:h-3 " />
              <span className="font-bold 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-sm">Cuisine</span>
            </div>
          </a>
        </div>

        {/* Customer Services */}
        
        <div className=" 3xl:-ml-14 2xl:ml-36 xl:ml-48 lg:ml-40">
          <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[13px] whitespace-nowrap">Customer Services</h2>
          <ul className="space-y-2 3xl:text-sm 2xl:text-sm xl:text-[10px] lg:text-[9px] font-thin">
            <li>My Account</li>
            <li>Track Your Order</li>
            <li>Return</li>
            <li>
              <a href="#" className="underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Our Information */}
        <div className="lg:ml-32 3xl:-ml-10 2xl:ml-36 xl:ml-40">
          <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[13px] whitespace-nowrap">Our Information</h2>
          <ul className="space-y-2 3xl:text-sm 2xl:text-sm xl:text-[10px] lg:text-[9px] font-thin">
            <li>Privacy</li>
            <li>User Terms & Condition</li>
            <li>
              <a href="#" className="underline">
                Return Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:ml-20 3xl:-ml-4 2xl:ml-36 xl:ml-36">
          <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[13px]">Contact Info</h2>
          <ul className="space-y-2 3xl:text-sm 2xl:text-sm xl:text-[10px] lg:text-[9px] font-thin">
            <li className="flex items-center gap-2">
              <FaPhone />
              <span className="underline">+0123-456-789</span>
            </li>
            <li className="flex items-center gap-2">
              <MdEmail />
              <span className="underline">example@gmail.com</span>
            </li>
            <li className="flex items-start gap-2">
              <FaLocationDot />
              <span className="underline">
                8502 Preston Rd. Inglewood, Maine 98380
              </span>
            </li>
          </ul>
        </div>
      </div>
 </div>
      {/* Divider Line */}
      <div className="border-t border-[#ACBCB8] max-w-[1100px] mx-auto mb-12 mt-6" />

      {/* Bottom Bar */}
      <div className="bg-[#FF4C15] w-full">
        <div className="max-w-[1150px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 py-4 text-sm text-white gap-4">
          <div className="flex items-center gap-2">
            <FaRegCopyright />
            <span>2025 Grocery Website Design. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4">
            <span>English</span>
            <span>|</span>
            <span>USD</span>
            <FaFacebookF />
            <FaLinkedinIn />
            <FaInstagram />
          </div>
        </div>
     
     </div>
    </footer>
  );
};

export default Footer;