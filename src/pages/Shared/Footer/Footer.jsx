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
       
        <div className="flex justify-center items-center pt-10">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1747630031/Mask_Group_23_pyld0k.png"
            alt="Footer Background"
            className="w-full 3xl:max-w-[1100px] 2xl:max-w-[900px] xl:max-w-[750px] lg:max-w-[550px] 2xl:h-[12rem] h-[15rem] object-cover sm:h-[10rem] 3xl:h-[12rem] lg:h-[10rem]"
          />
        </div>

        {/* Middle Section */}
       
        <div className="3xl:max-w-[1152px] 2xl:max-w-[952px]  xl:max-w-[795px]  lg:max-w-[595px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 3xl:gap-x-16 2xl:gap-x-10 xl:gap-x-12  lg:gap-x-12 text-center lg:text-left">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start items-start w-full">
            <a href="/">
              <div className="bg-[#3A7563] 3xl:px-6 3xl:py-4 2xl:px-6 2xl:py-4 xl:px-6 xl:py-4 lg:px-4 lg:py-2 flex items-center space-x-2 w-fit 3xl:mt-2 2xl:mt-2 xl:mt-2 lg:mt-1 mx-auto lg:mx-0">
                <img src="/logo.svg" alt="Cuisine Logo" className="3xl:w-6 3xl:h-6 2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 lg:w-4 lg:h-4" />
                <span className="font-bold 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px]">Cuisine</span>
              </div>
            </a>
          </div>

          {/* Customer Services */}
         
          <div>
            <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px] whitespace-nowrap">Customer Services</h2>
            <ul className="space-y-2 3xl:text-sm 2xl:text-sm xl:text-xs lg:text-[9px] font-thin">
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
          {/* Similar adjustments for centering */}
          <div>
            <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px]  whitespace-nowrap">Our Information</h2>
            <ul className="space-y-2 3xl:text-sm 2xl:text-sm xl:text-xs lg:text-[9px] font-thin">
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
          {/* Similar adjustments for centering */}
          <div>
            <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px] ">Contact Info</h2>
            <ul className="space-y-2 3xl:text-sm 2xl:text-sm xl:text-xs lg:text-[9px] font-thin inline-block lg:block">
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <FaPhone />
                <span className="underline">+0123-456-789</span>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <MdEmail />
                <span className="underline">example@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 justify-center lg:justify-start text-left">
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
      <div className="border-t border-[#ACBCB8] 3xl:max-w-[1100px] 2xl:max-w-[900px] xl:max-w-[700px] lg:max-w-[700px] mx-auto mb-12 mt-6" />

      {/* Bottom Bar */}
      <div className="bg-[#FF4C15] w-full">
       
        <div className="3xl:max-w-[1150px] 2xl:max-w-[950px] xl:max-w-[750px] lg:max-w-[750px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-6 py-4 text-sm text-white gap-4">
          <div className="flex items-center gap-2">
            <FaRegCopyright />
            <span className="whitespace-nowrap">2025 Grocery Website Design. All Rights Reserved.</span>
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