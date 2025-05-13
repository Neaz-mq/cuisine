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
            desc: 'Our staff is dedicated to providing warm and attentive services',
        },
        {
            icon: '/cazy.svg',
            title: 'Cozy and Inviting Atmosphere',
            desc: 'We have designed our restaurant to offer a comfortable and stylish',
        },
        {
            icon: '/safety.svg',
            title: 'Commitment to Cleanliness and Safety',
            desc: 'We adhere to the highest standards of hygiene and food safety',
        },
        {
            icon: '/value.svg',
            title: 'Affordable Prices with Great Value',
            desc: 'We believe that exceptional food should be accessible to everyone',
        },
    ];

    return (
        <div className='3xl:-mt-[14rem] 2xl:-mt-[10rem] xl:-mt-[3rem] lg:-mt-[2rem] flex justify-center'>
            <div className=" ">
                <div className='3xl:mt-14 2xl:mt-14 xl:mt-10 lg:mt-10 flex justify-center items-center text-center px-4'>
                   
                </div>

                <div className="relative w-full flex flex-col items-center justify-center 3xl:-mt-[36rem] 2xl:-mt-[38rem] xl:-mt-[42rem] lg:-mt-[45rem]  mb-8">
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-no-repeat bg-center bg-contain pointer-events-none"
                        style={{
                            backgroundImage: 'url("https://res.cloudinary.com/dxohwanal/image/upload/v1745037051/Stand_out_aj6upw.png")',
                        }}
                    ></div>

                    {/* Foreground Content */}
                    <div className="relative z-10 text-center mt-[51rem]">
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

                        <h1 className="3xl:text-5xl 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold text-[#2C6252] 3xl:mt-10 2xl:mt-10 xl:mt-8 lg:mt-10 mb-6">
                            What Makes Us Stand Out
                        </h1>


                         <h1 className='text-[#888888] 3xl:text-base 2xl:text-base xl:text-base lg:text-sm font-normal leading-relaxed max-w-2xl'>
                        At <span className='font-medium'>[Restaurant Name]</span>, we don’t just serve food—
                        we create unforgettable dining experiences. From the moment you step through our doors.
                    </h1>
                    </div>

                    {/* Services Grid */}
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-14  mt-14 3xl:px-28 2xl:px-12 xl:px-6 lg:px-12">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="flex items-start gap-4 max-w-md"
                            >
                                {/* Icon Container */}
                                <div className="flex-shrink-0 3xl:w-20 3xl:h-20 2xl:w-20 2xl:h-20 xl:w-20 xl:h-20 lg:w-14 lg:h-14 bg-[#2C6252]  flex items-center justify-center">
                                    <img
                                        src={service.icon}
                                        alt={service.title}
                                        className="3xl:w-10 3xl:h-10 2xl:w-10 2xl:h-10 xl:w-10 xl:h-10 lg:w-6 lg:h-6 object-contain"
                                    />
                                </div>

                                {/* Text Content */}
                                <div className="flex-1">
                                    <h3 className="3xl:text-lg 2xl:text-lg xl:text-base lg:text-[20px] font-semibold text-[#2C6252] mb-1 leading-snug max-w-[220px]">
                                        {service.title}
                                    </h3>
                                    <p className="text-[#CCCCCC] 3xl:text-[12px] 2xl:text-[10px] xl:text-[8px] lg:text-[7px] py-2">
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