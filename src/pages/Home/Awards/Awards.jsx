import React from 'react';

const Awards = () => {
    return (
        <div className="relative bg-white min-h-screen  overflow-hidden mx-52 mt-14">
            {/* Background Image (lower background) */}
            <div className="absolute top-[35%]">
                <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793095/Ellipse_2_m5jepq.png"
                    alt="Background"
                    className="object-cover "
                />
            </div>

            {/* Main Image (upper layer) */}
            <div className="absolute inset-0 w-[77rem] top-[0%] left-28">
                <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793493/chef_j9jlya.png"
                    alt="Awards"
                    className="object-cover"
                />
            </div>


            <div className="relative">
                <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744863980/Specialty_c98mbf.png" className='-mt-16' alt="" />
                <div className='mt-52 ml-44 absolute top-0 left-0 z-50'>
                    <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744793790/Group_253_oyljhb.png" alt="" />
                </div>
                {/* Green Food */}
                <div className="absolute top-[70%] left-[25%]  text-[#CCCCCC] px-3 py-1 rounded-full text-xs">
                    <span className='text-[#a9a2a2] text-lg'>Green</span> <span className='text-[#CCCCCC] text-lg'>Food</span>
                </div>
                {/* Healthy Food */}
                <div className="absolute top-[123%]  left-[8%]  text-gray-800 px-3 py-1 rounded-full text-xs">
                    <span className='text-[#CCCCCC] text-lg'>Healthy</span> <span className='text-[#a9a2a2] text-lg'>Food</span>
                </div>

                <img className='absolute top-[140%] left-[10%] opacity-20 blur-sm' src="/Ellipse 9.svg" alt="" />
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
                    {/* <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">BEST</span>
                    </div> */}
                    {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">CHEF</span>
                    </div> */}
                    {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        
                    </div> */}
                </div>
            </div>



            {/* Experiences Tag */}
            <div className="absolute top-[6%] left-[26%]  text-gray-800 px-3 py-1">
                <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744871420/Group_255_xzzkmu.png" className='w-40' alt="" />
            </div>

            {/* 24/7 Open (top right) */}
            {/* <div className="absolute top-[15%] right-[20%] bg-white text-gray-800 px-3 py-1 rounded-full text-xs">
                24/7 open
            </div> */}

            {/* 5 Star Rating */}
            <div class="absolute top-[20%] right-[30%] bg-white rounded-full border border-gray-400 shadow-md py-1 px-3 text-yellow-400 text-base">
                ★★★★★
            </div>


            {/* Live Kitchen */}
            <div className="absolute top-[18%] right-[10%] bg-white text-gray-800 px-3 py-1 rounded-full text-[26px]">
                <span className='text-[#FF4C15] font-bold'> Live</span> <span className='font-bold'>kitchen</span>
                <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744868965/Mask_Group_3_zd2ur0.png" className='mt-2 w-40' alt="" />
            </div>




            {/* 24/7 Open (bottom left) */}
            {/* <div className="absolute top-[40%] left-[25%] bg-red-500 text-white px-3 py-1 rounded-full text-xs">
                24/7 Open
            </div> */}

            {/* Organic Food */}
            {/* <div className="absolute top-[40%] right-[20%] bg-white text-gray-800 px-3 py-1 rounded-full text-xs">
                Organic Food
            </div> */}

            {/* Eco Friendly Icon */}
            {/* <div className="absolute top-[40%] right-[5%] bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                Eco Friendly
            </div> */}


        </div>
    );
};

export default Awards;