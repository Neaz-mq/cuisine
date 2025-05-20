import { FaFacebookF, FaLinkedinIn, FaInstagram, FaRegCopyright } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaPhone, FaLocationDot } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-[#2C6252] text-white 3xl:mt-32 lg:mt-14  ">
      {/* Top Image */}
      <div className="w-full flex justify-center 3xl:mt-14 2xl:mt-14 xl:mt-14 lg:mt-14  ">
        <img
          src="https://res.cloudinary.com/dxohwanal/image/upload/v1747630031/Mask_Group_23_pyld0k.png"
          alt="Footer Background"
          className="3xl:w-[72rem] lg:w-[58rem] 3xl:h-[15rem]  object-cover  3xl:ml-[27.9rem] "
        />
      </div>


      {/* Middle section */}
      <div className="max-w-screen-3xl mx-auto px-6 py-10 grid grid-cols-1 3xl:grid-cols-4 gap-12 ">
        {/* Logo */}
        <div className="flex flex-col items-center 3xl:mt-14 3xl:ml-[20rem]">
          <div className="bg-[#3A7563] px-12 py-5  flex items-center space-x-2">
            <img src="/logo.svg" alt="Cuisine Logo" className="w-6 h-6 3xl:-ml-6" />
            <span className="font-bold text-lg">Cuisine</span>
          </div>
        </div>

        {/* Customer Services */}
        <div className='3xl:ml-[6.5rem] 2xl:text-center xl:text-center lg:text-center 3xl:text-start'>
          <h2 className="font-semibold mb-6 3xl:text-xl 2xl:text-xl xl:text-xl lg:text-lg">Customer Services</h2>
          <ul className="space-y-2 text-sm font-thin">
            <li>My Account</li>
            <li>Track Your Order</li>
            <li>Return</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Our Information */}
        <div className='3xl:ml-[3.5rem] 2xl:text-center xl:text-center lg:text-center 3xl:text-start'>
          <h4 className="font-semibold mb-6 3xl:text-xl 2xl:text-xl xl:text-xl lg:text-lg">Our Information</h4>
          <ul className="space-y-2 text-sm font-thin">
            <li>Privacy</li>
            <li>User Terms & Condition</li>
            <li><a href="#" className="underline">Return Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="2xl:text-center xl:text-center lg:text-center 3xl:text-start 2xl:flex 2xl:flex-col 2xl:items-center xl:flex xl:flex-col xl:items-center 3xl:items-start mb-10 lg:flex lg:flex-col lg:items-center">
          <h4 className="font-semibold mb-6 3xl:text-xl 2xl:text-xl xl:text-xl lg:text-lg">Contact Info</h4>
          <ul className="space-y-2 text-sm font-thin">
            <li className="flex items-center gap-2 2xl:justify-center xl:justify-center 3xl:justify-start lg:justify-center">
              <FaPhone /> +0123-456-789
            </li>
            <li className="flex items-center gap-2 2xl:justify-center 3xl:justify-start xl:justify-center lg:justify-center">
              <MdEmail /> example@gmail.com
            </li>
            <li className="flex items-start gap-2 2xl:justify-center 3xl:justify-start xl:justify-center lg:justify-center">
              <FaLocationDot />
              <span className="text-left 2xl:text-center 3xl:text-start lg:justify-center">
                8502 Preston Rd. Inglewood, Maine 98380
              </span>
            </li>
          </ul>
        </div>

      </div>

      {/* Underline separator */}
      <div className='3xl:ml-44'>
        <div className="3xl:w-[89.5rem]  border-t border-[#ACBCB8] mx-auto mb-10 " />
      </div>

      {/* Bottom bar */}
      <div className="bg-[#FF4C15] w-full">
        <div className="max-w-screen-3xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm px-6 py-6 gap-4">
          <div className="flex items-center gap-2 3xl:ml-[18.8rem] ">
            <FaRegCopyright />
            <span>2025 Grocery Website Design. All Rights Reserved.</span>
          </div>
          <div className="flex items-center gap-4 3xl:mr-28 2xl:mr-28">
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