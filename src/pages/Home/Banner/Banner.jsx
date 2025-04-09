import React, { useState, useEffect } from 'react';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS CSS

const Banner = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Initialize AOS on component mount
    useEffect(() => {
        AOS.init();
    }, []);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="relative bg-white z-0 ml-36">
            {/* Content and Image Container */}
            <div className="flex items-start justify-between">
                {/* Left Side Content */}
                <div className="relative w-1/2 p-8">
                    <img className='absolute left-[-20px] right-10 -top-10 opacity-60 blur-sm' src="/Ellipse 9.svg" alt="" />

                    <div className="ml-4">
                        <h1 className="3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-lg font-bold text-[#2C6252] leading-tight flex items-center -mt-3">
                            Savor the
                            <button
                                className="bg-white text-black py-1 3xl:px-3 2xl:px-3 xl:px-3 lg:px-2 rounded-full flex items-center space-x-2 ml-8 text-sm border border-black cursor-pointer transition-all duration-300 hover:scale-105"
                                onClick={handleOpenModal}
                            >
                                <span className="flex items-center 3xl:text-[20px] 2xl:text-[20px] xl:text-[20px] lg:text-[14px]">
                                    <span className="text-red-500 ml-2 mr-1">Live</span>
                                    <span className='text-[#2C6252]'>kitchen</span>
                                </span>
                                <div className="bg-[#FF4C15] rounded-full p-2 ml-2 3xl:w-8 2xl:w-8 xl:w-8 lg:w-6  3xl:h-8 2xl:h-8 xl:h-8 lg:h-6 flex items-center justify-center">
                                    <img src="/Polygon 2.svg" alt="" className='h-2 w-5' />
                                </div>
                            </button>
                        </h1>

                        <h1 className="3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-lg font-bold text-[#2C6252] leading-tight mt-2">Flavor, Relish</h1>
                    </div>

                    <div className="flex items-center space-x-4 ml-4 3xl:mt-5 2xl:mt-5 xl:mt-2">
                        <span className="text-[#FF4C15] 3xl:text-6xl 2xl:text-5xl xl:text-4xl font-bold">Every Bite!</span>
                        <button className="bg-[#2C6252] text-white py-2 px-4 rounded-full flex items-center space-x-2 border-2 border-orange-500 transition-all duration-300 hover:scale-105">
                            <span>Up to 50% Off</span>
                            <div className="bg-white p-2 rounded-full flex items-center justify-center">
                                <img src="/arrow.svg" alt="Arrow" className="h-3 w-3" />
                            </div>
                        </button>
                    </div>

                    <div className='-mt-6'>
                        <p className="mb-8 3xl:text-[20px] 2xl:text-[16px] ml-2 p-4 bg-cover bg-center w-[650px] h-[250px] flex flex-col justify-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dxohwanal/image/upload/v1742627149/Tasty_uw9ilh.png')" }}>
                            <span className="inline-flex">
                                <span className="text-[#FF4C15] whitespace-nowrap">Experience the perfect blend of taste and joy—</span>
                                <span className="text-[#AAAAAA] ml-2 whitespace-nowrap">every bite is a</span>
                            </span>
                            <span className="text-[#AAAAAA] block mt-2">moment of delight, crafted to satisfy your cravings!</span>
                        </p>
                    </div>

                    <div className="flex items-center space-x-20 -mt-20">
                        {[{ src: "https://res.cloudinary.com/dxohwanal/image/upload/v1742626992/pngegg_17_u4hkq7.png", price: "20$", top: "60px" },
                        { src: "https://res.cloudinary.com/dxohwanal/image/upload/v1742627043/pngegg_18_fyzuz7.png", price: "10$", top: "32px", extraClass: "-mt-16" }].map((item, index) => (
                            <div key={index} className="relative">
                                <img src={item.src} alt="Food Item" className={`w-auto ${item.extraClass || ''}`} />
                                <div className="absolute right-[-20px]" style={{ top: item.top }}>
                                    <img src="/flowershape.svg" alt="Flower shape" className="w-16" />
                                    <span className="absolute top-[29px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm">{item.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Side Background Image */}
                <div className="3xl:-mt-80 2xl:-mt-40 xl:-mt-40 overflow-hidden 3xl:ml-24 2xl:ml-2">
                    <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1744105102/pngegg_27_jjdv28.png" alt="Banner" className="w-full 3xl:h-[68rem] 2xl:h-[50rem] xl:h-[46rem]  object-cover 3xl:ml-56 2xl:ml-10" />
                </div>
            </div>


            {/* Modal for YouTube Video */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
                    <div
                        className="bg-white p-4 rounded-lg relative"
                        data-aos="fade-down" // Apply AOS animation here
                        data-aos-duration="700" // Duration for fade-up animation
                    >
                        <button
                            className="absolute top-2 right-0 text-white rounded-full p-2 bg-[#FF4C15] transition duration-300"
                            onClick={handleCloseModal}
                        >
                            X
                        </button>


                        <iframe
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/LVI8veUnSLQ"
                            title="YouTube video"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Banner;
