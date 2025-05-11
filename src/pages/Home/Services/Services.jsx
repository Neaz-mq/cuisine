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
        
    ];

    // Arc layout Y-offsets
    

    return (
        <div className="relative bg-[#F8F8F8] flex justify-center -mt-44 3xl:-ml-44">
            <div className="relative w-full flex flex-col items-center justify-center">

                {/* Red Arc Curve Background */}
               
                {/* Hero Headings */}
                <div className="relative z-10 text-center mt-[5rem]">
                    <h2 className="text-gray-500 text-xs font-semibold tracking-wide mb-2">
                        <div className="-mt-32">
                            <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1745037051/Stand_out_aj6upw.png" alt="" />
                        </div>
                        <span className="bg-[#FF4C15] text-white py-1 px-4 rounded-full flex items-center justify-center transform rotate-[5deg] w-fit mx-auto -mt-56">
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

                    <h1 className="3xl:text-[42px] 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold text-[#2C6252] 3xl:mt-10 2xl:mt-10 xl:mt-8 lg:mt-10 mb-6">
                        What Makes Us Stand Out
                    </h1>

                    <h1 className="text-[#888888] 3xl:text-base 2xl:text-base xl:text-base lg:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
                        <span className="font-medium text-[#FF4C15]">At Restaurant Name </span> we don’t just serve food—
                        we create unforgettable dining experiences. From the moment you step through our doors.
                    </h1>
                </div>

                {/* Services in Arc Layout */}
               {/* Arc Layout for Service Items */}
            <div className="relative z-10 flex justify-center items-center gap-x-10 flex-wrap max-w-7xl mx-auto mt-16">
                {services.map((service, index) => {
                    const arcTopOffsets = ['translate-y-[160px]', 'translate-y-[40px]', '', 'translate-y-[50px]', 'translate-y-[160px]'];
                    return (
                        <div
                            key={index}
                            className={`flex flex-col items-center text-center w-[200px] ${arcTopOffsets[index]}`}
                        >
                            <div className="w-20 h-20 rounded-full border-4 border-[#FF4C15] bg-[#2C6252] flex items-center justify-center mb-4">
                                <img src={service.icon} alt={service.title} className="w-8 h-8 object-contain" />
                            </div>
                            <h3 className="text-sm font-semibold text-[#2C6252]">
                                {service.title.split(' ').map((word, i) => (
                                    <span
                                        key={i}
                                        className={`${
                                            i % 2 === 1 ? 'text-[#FF4C15]' : ''
                                        }`}
                                    >
                                        {word}{' '}
                                    </span>
                                ))}
                            </h3>
                            <p className="text-xs text-gray-400 mt-2">{service.desc}</p>

                          
                        </div>
                        
                    );
                    
                })}
            </div>
              <div className="-mt-36">
                <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1746959012/Group_1028_xr3pdo.png" alt="" className="w-[95rem]" />

              </div>
                <div className="py-28" />
            </div>
        </div>
    );
};

export default Services;
