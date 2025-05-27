import React from 'react';

const Week = () => {
    return (
        <div className="min-h-screen font-sans flex flex-col bg-gray-100">
            {/* Header Section */}
            <div className="bg-[#3D6A5D] text-white p-4 flex justify-between items-center shadow-md">
                <h1 className="text-2xl font-bold ml-4">Don't Miss This Week's Delights</h1>
                <span className="text-sm italic mr-4">* Authority suggested food</span>
            </div>

            {/* Main Content Area */}
            <div className="flex flex-col lg:flex-row flex-grow p-8 overflow-hidden relative">

                {/* Left Section - Days of the Week */}
                <div className="lg:w-1/2 flex flex-col justify-center items-start p-4 space-y-8 z-10">
                    {/* Monday */}
                    <div className="relative flex items-start">
                        {/* Vertical line for Monday */}
                        <div className="w-1 bg-gray-400 h-24 mr-4 rounded-full opacity-70"></div>
                        <div>
                            <h2 className="text-6xl font-extrabold mb-2 text-gray-400 opacity-70">Monday</h2>
                            <p className="text-xl ml-4 text-gray-600">- Buy 1 Get 1 Free on all Pizzas</p>
                        </div>
                    </div>

                    {/* Wednesday */}
                    <div className="relative flex items-start">
                        {/* Vertical line for Wednesday */}
                        <div className="w-1 bg-gray-400 h-24 mr-4 rounded-full opacity-70"></div>
                        <div>
                            <h2 className="text-6xl font-extrabold mb-2 text-gray-400 opacity-70">Wednesday</h2>
                            <p className="text-xl ml-4 text-gray-600">- 50% OFF on all Pasta Dishes</p>
                        </div>
                    </div>

                    {/* Friday */}
                    <div className="relative flex items-start">
                        {/* Vertical line for Friday */}
                        <div className="w-1 bg-green-700 h-24 mr-4 rounded-full"></div>
                        <div>
                            <h2 className="text-6xl font-extrabold mb-2 text-orange-500">Friday</h2>
                            <p className="text-xl ml-4 text-gray-600">- Free Dessert with any Main Course</p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Images and Customer Service */}
                {/* This container needs to be relative to allow absolute positioning of its children */}
                <div className="lg:w-1/2 flex flex-col items-center justify-center p-4 relative min-h-[800px] lg:min-h-[600px]">

                    {/* Image 1: Donuts (Top Left) */}
                    <div className="absolute w-48 h-48 rounded-lg overflow-hidden shadow-lg transform rotate-[-5deg] top-16 left-1/4 z-20">
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748320998/Mask_Group_36_gbjtya.png"
                            alt="Donuts"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/192x192/FFD700/000000?text=Donuts'; }}
                        />
                        {/* Small icon for donuts */}
                        <div className="absolute bottom-2 right-2 bg-white rounded-md p-1 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 2 2 4-4v5z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* Image 2: Noodles (Top Middle) */}
                    <div className="absolute w-48 h-48 rounded-lg overflow-hidden shadow-lg transform rotate-[2deg] top-24 left-1/2 -translate-x-1/2 z-10">
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748321038/Mask_Group_35_csn6xf.png"
                            alt="Noodles"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/192x192/ADD8E6/000000?text=Noodles'; }}
                        />
                    </div>

                    {/* Image 3: Pasta (Top Right) - NEW */}
                    <div className="absolute w-48 h-48 rounded-lg overflow-hidden shadow-lg transform rotate-[5deg] top-16 right-1/4 z-0">
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748321962/Mask_Group_39_emmfxr.png"
                            alt="Pasta"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/192x192/C0C0C0/000000?text=Image+Error'; }}
                        />
                    </div>

                    {/* Image 4: Snacks (Bottom Left) */}
                    <div className="absolute w-48 h-48 rounded-lg overflow-hidden shadow-lg transform rotate-[0deg] bottom-20 left-1/4 z-20">
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748321078/Mask_Group_37_fqhmcm.png"
                            alt="Snacks"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/192x192/90EE90/000000?text=Snacks'; }}
                        />
                    </div>

                    {/* Image 5: Fried Chicken (Bottom Middle) */}
                    <div className="absolute w-48 h-48 rounded-lg overflow-hidden shadow-lg transform rotate-[3deg] bottom-28 left-1/2 -translate-x-1/2 z-10">
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748321319/Mask_Group_34_mtkkiw.png"
                            alt="Chicken"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/192x192/FFB6C1/000000?text=Image+Error'; }}
                        />
                        {/* Small icon for chicken */}
                        <div className="absolute bottom-2 right-2 bg-white rounded-md p-1 shadow-md">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-4 2 2 4-4v5z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>

                    {/* Image 6: Pancakes (Bottom Right) - NEW */}
                    <div className="absolute w-48 h-48 rounded-lg overflow-hidden shadow-lg transform rotate-[-2deg] bottom-20 right-1/4 z-0">
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748322031/Mask_Group_38_xhbv7y.png"
                            alt="Pancakes"
                            className="w-full h-full object-cover"
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/192x192/D3D3D3/000000?text=Image+Error'; }}
                        />
                    </div>

                    {/* Customer Service Card */}
                    <div className="absolute bg-white rounded-lg p-6 shadow-xl max-w-xs text-center z-30 top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2
                                    md:max-w-sm
                                    lg:max-w-xs">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">Outstanding Customer Service</h3>
                        <p className="text-gray-600">
                            Our staff is dedicated to providing warm and attentive service, making sure that...
                        </p>
                    </div>

                    {/* 50% OFF Text */}
                    <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-1/2 rotate-90 text-orange-500 text-7xl font-extrabold opacity-70 z-0">
                        50%
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Week;
