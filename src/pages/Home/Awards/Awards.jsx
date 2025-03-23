import React from 'react';

const Awards = () => {
    return (
        <div className="relative bg-white h-[1000px] overflow-hidden mt-[45rem] mx-52">
            {/* Background Image (lower background) */}
            <div className="absolute top-[50%] left-[5%]"> 
  <img
    src="https://res.cloudinary.com/dxohwanal/image/upload/v1742701566/bgchef_wc6qsv.png"
    alt="Background"
    className="object-cover"
  />
</div>

            {/* Main Image (upper layer) */}
            <div className="absolute inset-0">
                <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1742700637/chef_onbsl5.png"
                    alt="Awards"
                    className="object-cover"
                />
            </div>

            {/* Content Overlay - Centered with flexbox */}
            <div className="relative flex justify-center items-center h-full">
                <div className="text-center text-white">
                    {/* You can add more text content here if needed */}
                </div>
            </div>

            {/* Floating Elements (using absolute positioning) */}

            {/* Award Trophy */}
            <div className="absolute top-[10%] left-[5%] transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">BEST</span>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">CHEF</span>
                    </div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AWARD</span>
                    </div>
                </div>
            </div>

            {/* Experiences Tag */}
            <div className="absolute top-[15%] left-[30%] bg-white text-gray-800 px-3 py-1 rounded-full text-xs">
                experiences
            </div>

            {/* 24/7 Open (top right) */}
            <div className="absolute top-[15%] right-[20%] bg-white text-gray-800 px-3 py-1 rounded-full text-xs">
                24/7 open
            </div>

            {/* 5 Star Rating */}
            <div className="absolute top-[20%] right-[30%] text-yellow-400 text-xs">
                ★★★★★
            </div>

            {/* Live Kitchen */}
            <div className="absolute top-[20%] right-[5%] bg-white text-gray-800 px-3 py-1 rounded-full text-xs">
                Live kitchen
            </div>

            {/* Green Food */}
            <div className="absolute top-[40%] left-[10%] bg-white text-gray-800 px-3 py-1 rounded-full text-xs">
                Green Food
            </div>

            {/* 24/7 Open (bottom left) */}
            <div className="absolute top-[40%] left-[25%] bg-red-500 text-white px-3 py-1 rounded-full text-xs">
                24/7 Open
            </div>

            {/* Organic Food */}
            <div className="absolute top-[40%] right-[20%] bg-white text-gray-800 px-3 py-1 rounded-full text-xs">
                Organic Food
            </div>

            {/* Eco Friendly Icon */}
            <div className="absolute top-[40%] right-[5%] bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                Eco Friendly
            </div>

            {/* Healthy Food */}
            <div className="absolute bottom-[10%] left-[5%] bg-white text-gray-800 px-3 py-1 rounded-full text-xs">
                healthy food
            </div>
        </div>
    );
};

export default Awards;