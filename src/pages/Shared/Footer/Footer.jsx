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
    <footer className="bg-[#2C6252] text-white sm:-ml-[4.2rem] 3xl:-ml-0 2xl:-ml-0 xl:-ml-0 lg:-ml-0 md:-ml-0"> 
      {/* Top Footer Content */}
      <Container>
        <div className="px-6 py-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 3xl:gap-10 2xl:gap-14 xl:gap-16 lg:gap-20 text-center lg:text-left ">
          {/* Logo */}
          <div className="flex justify-center 3xl:justify-center items-start w-full 3xl:ml-8 2xl:ml-[5.2rem] 2xl:justify-start xl:ml-[7rem] lg:ml-[5rem] md:-ml-10 xl:justify-start lg:justify-start relative">
            <a href="/">
              <div className="bg-[#3A7563] 3xl:px-4 3xl:py-4 2xl:px-4 2xl:py-4 xl:px-4 xl:py-4 lg:px-3 lg:py-3 md:px-4 md:py-3 sm:px-4 sm:py-3  flex items-center sm:ml-[4.7rem] 3xl:ml-0 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-[4.8rem]  space-x-2 w-fit 3xl:mt-1 2xl:mt-1 xl:mt-0 lg:mt-0 mx-auto">
                <img
                  src="/logo.svg"
                  alt="Cuisine Logo"
                  className="3xl:w-6 3xl:h-6 2xl:w-6 2xl:h-6 xl:w-4 xl:h-4 lg:w-3 lg:h-3 md:w-4 md:h-4 sm:w-4 sm:h-4"
                />
                <span className="font-bold 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[11px] md:text-[12px] sm:text-[12px]">
                  Cuisine
                </span>
              </div>
            </a>
          </div>

          {/* Customer Services */}
          <div className="sm:mt-10 md:mt-10 3xl:mt-0 2xl:mt-0 xl:mt-0 lg:mt-0 sm:ml-[4.3rem] 3xl:ml-0 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0 ">
            <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[11px] md:text-[17px] sm:text-[16px] whitespace-nowrap">
              Customer Services
            </h2>
            <ul className="space-y-2 3xl:text-sm 2xl:text-sm xl:text-xs lg:text-[9px] md:text-[12px] sm:text-[11px] font-thin">
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
          <div className="sm:mt-10 md:mt-10 3xl:mt-0 2xl:mt-0 xl:mt-0 lg:mt-0 sm:ml-[4.3rem] 3xl:ml-0 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0">
            <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px] md:text-[17px] sm:text-[16px] whitespace-nowrap">
              Our Information
            </h2>
            <ul className="space-y-2 3xl:text-sm 2xl:text-sm xl:text-xs lg:text-[9px] md:text-[12px] sm:text-[11px] font-thin">
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
          <div className="sm:mt-10 md:mt-10 3xl:mt-0 2xl:mt-0 xl:mt-0 lg:mt-0 sm:ml-[4.3rem] 3xl:ml-0 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0">
            <h2 className="font-semibold mb-4 3xl:text-lg 2xl:text-lg xl:text-base lg:text-[12px] md:text-[17px] sm:text-[16px]">
              Contact Info
            </h2>
            <ul className="space-y-2 3xl:text-sm 2xl:text-sm xl:text-xs lg:text-[9px] md:text-[12px] sm:text-[11px] font-thin inline-block lg:block">
              <li className="flex items-center gap-2 justify-center lg:justify-start">
                <FaPhone />
                <span className="underline">+0123-456-789</span>
              </li>
              <li className="flex items-center gap-2 justify-center lg:justify-start sm:ml-[1rem] 3xl:ml-0 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0">
                <MdEmail />
                <span className="underline">example@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 justify-center lg:justify-start text-left sm:ml-[1.3rem] 3xl:ml-0 2xl:ml-0 xl:ml-0 lg:ml-0 md:ml-0">
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
          <div className="border-t border-[#ACBCB8] 3xl:w-[80rem] 2xl:w-[62rem] xl:w-[57rem] lg:w-[45rem] mt-6 mb-12 3xl:ml-36 2xl:ml-28 xl:ml-36 lg:ml-[7.5rem] sm:ml-20"></div>
        </Container>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#FF4C15] w-full flex justify-center">
        <Container>
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center px-6 py-4 3xl:text-sm 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-[11px] text-white gap-4 3xl:ml-28 2xl:ml-20 xl:ml-28 lg:ml-16 sm:ml-16">
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
