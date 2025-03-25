import React from 'react';
import { ChevronRight } from 'lucide-react';


const TopBar = () => {
    return (
        <div className="flex flex-col sm:flex-row items-center bg-white py-2 px-4 sm:px-6 text-gray-700 text-sm relative z-0 overflow-hidden">
            {/* Background Image (Responsive) */}
            <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1742451276/Group_22_fwl6sw.png"
                alt="Group 22"
                className="w-full sm:w-auto h-auto sm:h-[12rem] md:h-[14rem] lg:h-[22rem] xl:h-[23rem] 2xl:h-[24rem] 3xl:h-[25rem] -mt-48 sm:-mt-[6rem] md:-mt-[8.2rem] lg:-mt-[13rem] sm:ml-0 3xl:ml-16 lg:-ml-12 md:-ml-4"
            />

            {/* Content Section (Responsive) */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center w-full sm:-ml-2 md:-ml-6 lg:-ml-2 -mt-2 sm:-mt-10 ml-5">
                {/* Order Label */}
                <span className="text-[#E4E4E4] mr-0 sm:mr-2 md:mr-3 text-base sm:text-sm md:text-sm 3xl:text-[20px] 2xl:text-[12px] xl:text-[9px] lg:text-[12px] md:text-[12px] mb-2 sm:mb-0">
                    Online place order
                </span>

                {/* Order Button */}
                <button className="bg-[#FF4C15] text-white text-sm md:text-base 3xl:text-[20px] 2xl:text-[12px] xl:text-[9px] lg:text-[12px] md:text-[12px] px-2 md:px-3 py-1 md:py-2 rounded-sm flex items-center font-semibold mb-2 sm:mb-0">
                    website/apps
                    <ChevronRight className="ml-1 text-white" size={16} md:size={20} />
                </button>

                {/* Divider */}
                <div className="hidden sm:block">
                    <div className="flex items-center mx-0 sm:mx-1 md:mx-2 mb-2 sm:mb-0">
                        <div className="h-3 w-[1px] md:w-[2px] md:h-4 bg-gray-400 mx-1 md:mx-2"></div>
                    </div>
                </div>

                {/* Kitchen Availability */}
                <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 mr-0 sm:mr-2 md:mr-4 mb-2 sm:mb-0">
                    <img src="/kitchen.svg" alt="Kitchen available" className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-[#2C6252] text-sm md:text-base">Kitchen available</span>
                </div>

                {/* Current Time */}
                <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 mr-0 sm:mr-2 md:mr-4 mb-2 sm:mb-0">
                    <img src="/time.svg" alt="Time" className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-sm md:text-base text-[#2C6252]">3:07:00 PM</span>
                </div>

                {/* Bottom Line */}
                <div className="w-full sm:w-32 md:w-48  xl:w-72 h-[1px] md:h-[1.5px] bg-[#FF4C15] ml-0 sm:ml-1 md:ml-2"></div>
            </div>
          
        </div>
    );
};

export default TopBar;