import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 ">
      {/* Main Footer Section */}
      <div className=" py-8 px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 2xl:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <div className="bg-pink-100 p-4 rounded-lg flex items-center">
            <svg className="h-8 w-8 text-green-600 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
            </svg>
            <span className="text-green-600 font-bold text-lg">Cuisine</span>
          </div>
        </div>

        {/* Customer Section */}
        <div>
          <h3 className="text-green-600 font-semibold mb-4 text-center md:text-left lg:text-left">CUSTOMER</h3>
          <ul className="space-y-2 text-gray-600 text-center md:text-left lg:text-left">
            <li><a href="#" className="hover:underline">MY ACCOUNT</a></li>
            <li><a href="#" className="hover:underline">TRACK YOUR ORDER</a></li>
            <li><a href="#" className="hover:underline">RETURN</a></li>
            <li><a href="#" className="hover:underline">FAQ</a></li>
          </ul>
        </div>

        {/* Our Information Section */}
        <div>
          <h3 className="text-green-600 font-semibold mb-4 text-center md:text-left lg:text-left">OUR INFORMATION</h3>
          <ul className="space-y-2 text-gray-600 text-center md:text-left lg:text-left">
            <li><a href="#" className="hover:underline">PRIVACY</a></li>
            <li><a href="#" className="hover:underline">USER TERMS & CONDITION</a></li>
            <li><a href="#" className="hover:underline">RETURN POLICY</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div>
          <h3 className="text-green-600 font-semibold mb-4 text-center md:text-left lg:text-left">CONTACT INFO</h3>
          <ul className="space-y-2 text-gray-600 text-center md:text-left lg:text-left">
            <li>+0123-456-789</li>
            <li>example@gmail.com</li>
            <li>8502 Preston Rd. Inglewood, Maine 98380</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-orange-500 text-white py-4 w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-2 md:mb-0 text-center md:text-left">
            COPYRIGHT © 2024 GROCERY WEBSITE DESIGN. ALL RIGHT RESERVED.
          </p>
          <div className="flex space-x-4 justify-center md:justify-end">
            <div className="flex items-center">
              <span className="mr-2">ENGLISH</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex items-center">
              <span className="mr-2">USD</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div className="flex space-x-2">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-9h2v6h-2zm0-4h2v2h-2z" />
              </svg>
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm-1-9h2v6h-2zm0-4h2v2h-2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
