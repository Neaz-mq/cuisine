import React from 'react';
import { ChevronRight } from 'lucide-react';

const TopBar = () => {
    return (
        <div className="flex items-center bg-white py-2 px-6 text-gray-700 text-sm relative z-0">
            <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1742451276/Group_22_fwl6sw.png"
                alt="Group 22"
                className="h-[16rem] w-auto -mt-[15rem] 3xl:ml-16 sm:ml-0 lg:h-[18rem] xl:h-[20rem] 3xl:h-[26.8rem]"
            />
            <div className="flex items-center justify-start w-full ml-28 -mt-6">
                <span className="text-[#E4E4E4] mr-3 text-[20px]">Online place order</span>
                <button className="bg-[#FF4C15] text-white text-[20px] px-3 py-2 rounded-sm flex items-center font-semibold">
                    website/apps
                    <ChevronRight className="ml-1 text-white" size={20} />
                </button>
                <div className="flex items-center mx-2">
                    <div className="h-4 w-[2px] bg-gray-400 mx-2"></div>
                </div>
                <div className="flex items-center space-x-4 mr-4">
                    <img
                        src="/kitchen.svg"
                        alt="Kitchen available"
                        className="h-5 w-5"
                    />
                    <span className="text-[#2C6252] text-[20px]">Kitchen available</span>
                </div>
                <div className="flex items-center space-x-4 mr-4">
                    <img
                        src="/time.svg"
                        alt="Time"
                        className="h-5 w-5"
                    />
                    <span className="text-[20px] text-[#2C6252]">3:07:00 PM</span>
                </div>
                <div className="w-48 h-[2px] bg-[#FF4C15] ml-2"></div>
            </div>
        </div>
    );
};

export default TopBar;