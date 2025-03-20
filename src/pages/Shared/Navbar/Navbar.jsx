import React from 'react';
import { Table } from 'lucide-react';

const Navbar = () => {
    return (
        <div className="flex flex-col items-center bg-gray-800 text-white h-screen w-64 p-6 relative z-20 -mt-28">
            {/* Logo with Vertical Cuisine Text (Descending Order) */}
            <div className="flex flex-col items-center mb-8 space-y-1">
                <img
                    src="/logo.svg"
                    alt="Cuisine Logo"
                    className="h-10 w-auto"
                />
                <span className="text-lg text-white flex flex-col" style={{ transform: 'rotate(270deg)', marginTop: '32px' }}>
                    Cuisine
                </span>




            </div>

            {/* Navbar Links */}
            <div className="flex flex-col space-y-4 w-full">
                <a href="/" className="text-lg hover:text-orange-500">
                    <span>Home</span>
                </a>
                <a href="/menu" className="text-lg hover:text-orange-500">
                    <span>Menu</span>
                </a>
                <a href="/signature-food" className="text-lg hover:text-orange-500">
                    <span>Signature Food</span>
                </a>
                <a href="/contact-us" className="text-lg hover:text-orange-500">
                    <span>Contact Us</span>
                </a>
                <a href="/book-table" className="flex items-center text-lg space-x-3 hover:text-orange-500">
                    <Table size={20} />
                    <span>Book a Table</span>
                </a>
                <a href="/about" className="text-lg hover:text-orange-500">
                    <span>About</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
