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
            className="w-full max-w-[1100px] h-[15rem] object-cover sm:h-[10rem] md:h-[12rem] lg:h-[15rem]"
          />
        </div>

        {/* Middle Section */}
       
        <div className="max-w-[1152px] mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-x-16 lg:gap-x-28 text-center lg:text-left">
          {/* Logo */}
          <div className="flex justify-center lg:justify-start items-start w-full">
            <a href="/">
              <div className="bg-[#3A7563] px-6 py-4 flex items-center space-x-2 w-fit mt-2 mx-auto lg:mx-0">
                <img src="/logo.svg" alt="Cuisine Logo" className="w-6 h-6" />
                <span className="font-bold text-lg">Cuisine</span>
              </div>
            </a>
          </div>

          {/* Customer Services */}
         
          <div>
            <h2 className="font-semibold mb-4 text-lg whitespace-nowrap">Customer Services</h2>
            <ul className="space-y-2 text-sm font-thin">
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
            <h2 className="font-semibold mb-4 text-lg whitespace-nowrap">Our Information</h2>
            <ul className="space-y-2 text-sm font-thin">
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
            <h2 className="font-semibold mb-4 text-lg">Contact Info</h2>
            <ul className="space-y-2 text-sm font-thin inline-block lg:block">
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
      <div className="border-t border-[#ACBCB8] max-w-[1100px] mx-auto mb-12 mt-6" />

      {/* Bottom Bar */}
      <div className="bg-[#FF4C15] w-full">
       
        <div className="max-w-[1150px] mx-auto flex flex-col md:flex-row justify-center md:justify-between items-center px-6 py-4 text-sm text-white gap-4">
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