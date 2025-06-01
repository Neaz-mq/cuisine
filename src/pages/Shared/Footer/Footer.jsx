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
        {/*
          Removed specific ml classes for the image.
          'justify-center' will center it within its flex container.
          'max-w-full' ensures it scales down on smaller screens.
          Adjust image sizing using width and height based on design intent.
        */}
        <div className="flex justify-center items-center pt-10">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1747630031/Mask_Group_23_pyld0k.png"
            alt="Footer Background"
            className="w-full max-w-[1100px] h-[15rem] object-cover sm:h-[10rem] md:h-[12rem] lg:h-[15rem]"
          />
        </div>

        {/* Middle Section */}
        {/*
          'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4' remains good for responsiveness.
          'justify-items-center' for desktop will center the content of each grid column.
          'text-center' for smaller screens ensures content is centered before grid kicks in.
          Removed all specific 'ml' classes from direct children and their parents.
          'gap-8' or 'gap-x-16' can be adjusted for spacing between columns.
          Added 'w-full' to the logo container to allow 'mx-auto' to work.
        */}
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
          {/*
            No 'ml' classes needed. 'justify-items-center' or 'text-center' on parent grid
            container, combined with 'lg:text-left' handles alignment.
          */}
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
        {/*
          'justify-center' for md and smaller, 'justify-between' for larger screens.
          'items-center' for vertical alignment.
          'text-center' for small screens, 'text-left' for larger if needed.
        */}
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