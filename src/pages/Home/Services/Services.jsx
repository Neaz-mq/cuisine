import React from 'react';

const Services = () => {
    const services = [
        {
            icon: '/Path 67.svg',
            title: 'Fresh and High-Quality Ingredients',
            desc: 'We source only the freshest and highest-quality ingredients to ensure',
        },
        {
            icon: '/unique.svg',
            title: 'Unique and Delicious Menu',
            desc: 'Our menu is carefully crafted by expert chefs who bring creativity and passion',
        },
        {
            icon: '/customer.svg',
            title: 'Outstanding Customer Service',
            desc: 'Our staff is dedicated to providing warm and attentive service, making sure that',
        },
        {
            icon: '/cazy.svg',
            title: 'Cozy and Inviting Atmosphere',
            desc: 'We have designed our restaurant to offer a comfortable and stylish',
        },
        {
            icon: '/safety.svg',
            title: 'Commitment to Cleanliness and Safety',
            desc: 'We adhere to the highest standards of hygiene and food safety, ensuring that',
        },
        {
            icon: '/value.svg',
            title: 'Affordable Prices with Great Value',
            desc: 'We believe that exceptional food should be accessible to everyone',
        },
    ];

    return (
        <div className='min-h-screen'>
            <div className="bg-white w-[90rem] h-[70rem] left-[17rem] -mt-[29rem] rounded-[120px] mb-80 z-50 absolute">
                <div className='mt-14 flex justify-center items-center text-center px-4'>
                    <h1 className='text-[#888888] text-base font-normal leading-relaxed max-w-2xl'>
                        At <span className='font-medium'>[Restaurant Name]</span>, we don’t just serve food—
                        we create unforgettable dining experiences. From the moment you step through our doors.
                    </h1>
                </div>

                <div className="relative w-full flex flex-col items-center justify-center -mt-[32rem] mb-8">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-no-repeat bg-center bg-contain pointer-events-none"
                        style={{
                            backgroundImage: 'url("https://res.cloudinary.com/dxohwanal/image/upload/v1745037051/Stand_out_aj6upw.png")',
                        }}
                    ></div>

                    {/* Foreground Content */}
                    <div className="relative z-10 text-center mt-[50rem]">
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

                        <h1 className="text-5xl font-semibold text-[#2C6252] mt-14 mb-6">
                            What Makes Us Stand Out
                        </h1>
                    </div>

                    {/* Services Grid */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-14 mt-12 px-20">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 max-w-md"
                            >
                                {/* Icon Container */}
                                <div className="flex-shrink-0 w-20 h-20 bg-[#2C6252] rounded-md flex items-center justify-center">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="w-10 h-10 object-contain"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-[#2C6252] mb-1 leading-snug max-w-[220px]">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#CCCCCC] text-[12px] py-2">
                                        {service.desc}
                                    </p>
                                    <button className="text-[11px] text-[#2C6252] font-medium hover:underline">
                                        Discover More
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="py-24"></div>
                </div>
            </div>
        </div>
    );
};

export default Services;
