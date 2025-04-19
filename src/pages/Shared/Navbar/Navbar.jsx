import React from 'react';
import { ChevronDown } from 'lucide-react';

const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu', hasDropdown: true },
    { name: 'Signature Food', path: '/signature-food', hasDropdown: true },
    { name: 'Contact Us', path: '/contact-us', isBold: true }
];

const Navbar = () => {
    return (
        <div className="sticky flex flex-col items-center  w-20 p-4 z-20 3xl:-mt-[8rem] 2xl:-mt-[7.5rem] xl:-mt-[7rem] lg:-mt-[7rem] md:-mt-[4rem] sm:-mt-[4rem]">
            {/* Cuisine Section */}
           <a href="/">
           <div className="absolute left-0 top-0 w-32 bg-[#2C6252] flex flex-col items-center py-4">
                <img src="/logo.svg" alt="Cuisine Logo" className="h-6 w-auto ml-20" />
                <span className="text-lg font-bold text-white mt-4 ml-20" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Cuisine
                </span>
            </div>
           </a>

            {/* Navbar Links */}
            <div className="flex flex-col space-y-6 w-full items-center mt-44 ml-32">
                {navItems.map((item, index) => (
                    <a
                        key={index}
                        href={item.path}
                        className={`text-md ${item.isBold ? 'font-bold text-[#2C6252] hover:text-[#1E4B3A]' : 'text-[#CCCCCC] hover:text-[#2C6252]'} flex flex-row-reverse items-center space-x-1`}
                        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                    >
                        {item.hasDropdown && <ChevronDown size={14} style={{ transform: 'rotate(90deg)' }} />}
                        {item.name}
                    </a>
                ))}
            </div>

            {/* Book Table Button */}
            <button className="bg-[#FF4C15] flex flex-col items-center py-4 px-3 w-full ml-32" style={{ marginTop: '40px' }}>
                <span className="text-[20px] font-bold text-white" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                    Book a Table
                </span>
                <img src="/table.svg" alt="Table Icon" className="h-5 w-auto mt-4" style={{ writingMode: 'vertical-rl' }} />
            </button>
        </div>
    );
};

export default Navbar;