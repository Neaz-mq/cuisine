import React from 'react';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="flex flex-col items-center h-screen w-20 p-4 relative z-20 -mt-32">
            {/* Cuisine Section (Full-Width Attached to Left Side) */}
            <div className="absolute left-0 top-0 w-32 bg-[#2C6252] flex flex-col items-center py-4">
                <img
                    src="/logo.svg"
                    alt="Cuisine Logo"
                    className="h-6 w-auto ml-20"
                />
                <span className="text-lg font-bold text-white mt-4 ml-20" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Cuisine
                </span>
            </div>

            {/* Vertical Navbar Links (No Background) */}
            <div className="flex flex-col space-y-6 w-full items-center mt-44 ml-32">
                <a href="/" className="text-md text-[#CCCCCC] hover:text-gray-600" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Home
                </a>

                {/* Menu with Dropdown Icon (Rotated Downward) */}
                <a href="/menu" className="text-md text-[#CCCCCC] hover:text-gray-600 flex flex-row-reverse items-center space-x-1"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    <ChevronDown size={14} style={{ transform: 'rotate(90deg)' }} />
                    Menu
                </a>

                {/* Signature Food with Dropdown Icon (Rotated Downward) */}
                <a href="/signature-food" className="text-md text-[#CCCCCC] hover:text-gray-600 flex flex-row-reverse items-center space-x-1"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    <ChevronDown size={14} style={{ transform: 'rotate(90deg)' }} />
                    Signature Food
                </a>

                <a href="/contact-us" className="text-md font-bold text-[#2C6252] hover:text-[#1E4B3A]" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Contact Us
                </a>

                {/* Book Table Button (Orange Background) - Adjusted for your request */}

                <div className="bg-[#FF4C15] flex flex-col items-center py-4 px-3  w-full" style={{ marginTop: '40px' }}
                > 
                    <span className="text-[20px] font-bold text-white" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                        Book a Table
                    </span>
                    <img
                        src="/table.svg"
                        alt="Table Icon"
                        className="h-5 w-auto mt-4"
                        style={{ writingMode: 'vertical-rl' }}
                    />
                </div>

            </div>
        </div>
    );
};

export default Navbar;