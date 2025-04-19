import React from 'react';

const Services = () => {
    return (
        <div className='min-h-screen'>
            <div className="bg-white w-[90rem] h-[70rem] left-[17rem] -mt-[29rem] rounded-[120px] mb-80 z-50 absolute ">
                {/* You can add content inside this div */}
                <div className='mt-14 flex justify-center items-center text-center px-4'>
                    <h1 className='text-[#888888] text-base font-normal leading-relaxed max-w-2xl'>
                        At <span className='font-medium'>[Restaurant Name]</span>, we don’t just serve food—
                        we create unforgettable dining experiences. From the moment you step through our doors.
                    </h1>
                </div>
                <div className="relative w-full flex flex-col items-center justify-center -mt-36  mb-8">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-no-repeat bg-center bg-contain pointer-events-none"
                        style={{
                            backgroundImage: 'url("https://res.cloudinary.com/dxohwanal/image/upload/v1745037051/Stand_out_aj6upw.png")',
                        }}
                    ></div>

                    {/* Foreground Content */}
                    <div className="relative z-10 text-center mt-[26rem]">
                        <h2 className="text-gray-500 text-xs font-semibold tracking-wide mb-2">
                            <span className="bg-[#FF4C15] text-white py-1 px-4 rounded-full flex items-center justify-center transform rotate-[5deg] w-fit mx-auto">
                                <div className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2">
                                    <img src="/svg.png" className="w-3 h-3" alt="Services Icon" />
                                </div>
                                <div className="text-center">
                                    <span className="text-xs">
                                        Your Services <span className="font-thin">(And Benefits)</span>
                                    </span>
                                </div>
                            </span>
                        </h2>

                        <h1 className="text-5xl font-semibold text-[#2C6252] mt-10">
                            What Makes Us Stand Out
                        </h1>
                    </div>

                    {/* Add some padding to make sure the container has enough height */}
                    <div className="py-24"></div>
                </div>

            </div>

        </div>
    );
};

export default Services;