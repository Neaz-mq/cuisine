import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaRegCopyright,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import Container from '../../../components/Container';

const Footer = () => {
  return (
    <footer className="bg-[#2C6252] text-white"> 
      {/* Top Footer Content */}
      <Container>
        <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 3xl:gap-10 2xl:gap-14 xl:gap-16 lg:gap-20 text-center lg:text-left">
          {/* Logo */}
          <div className="flex justify-center 3xl:justify-center items-start w-full 3xl:ml-8 2xl:ml-20 2xl:justify-start xl:ml-[7rem] lg:ml-[4rem] xl:justify-start lg:justify-start relative">
            <a href="/">
              <div className="bg-[#3A7563] 3xl:px-4 3xl:py-4 2xl:px-4 2xl:py-4 xl:px-4 xl:py-4 lg:px-3 lg:py-3 flex items-center space-x-2 w-fit 3xl:mt-1 2xl:mt-1 xl:mt-0 lg:mt-0 mx-auto">
                <img
                  src="/logo.svg"
                  alt="Cuisine Logo"
                  className="3xl:w-6 3xl:h-6 2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 lg:w-3 lg:h-3"
                />
                <span className="font-bold 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[11px]">
                  Cuisine
                </span>
              </div>
            </a>
          </div>

          {/* Customer Services */}
          <div>
            <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[11px] whitespace-nowrap">
              Customer Services
            </h2>
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
          <div>
            <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px] whitespace-nowrap">
              Our Information
            </h2>
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
          <div>
            <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px]">
              Contact Info
            </h2>
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
      </Container>

      {/* Divider Line */}
      <div className="w-full flex justify-center">
        <Container>
          <div className="border-t border-[#ACBCB8] 3xl:w-[80rem] 2xl:w-[62rem] xl:w-[57rem] lg:w-[45rem] mt-6 mb-12 3xl:ml-36 2xl:ml-28 xl:ml-36 lg:ml-[7.5rem]"></div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FF4C15] w-full flex justify-center">
        <Container>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-6 py-4 text-sm text-white gap-4 3xl:ml-28 2xl:ml-20 xl:ml-28 lg:ml-16">
            <div className="flex items-center gap-2">
              <FaRegCopyright />
              <span className="whitespace-nowrap ">
                2025 Grocery Website Design. All Rights Reserved.
              </span>
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
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
