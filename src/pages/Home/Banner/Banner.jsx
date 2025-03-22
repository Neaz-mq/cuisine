import { Youtube, ChevronUp } from 'lucide-react';
import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-white ml-[18rem] mt-14">
            {/* Background Image (Right Side) */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: 'url(/banner-food.jpg)' }}>
                <div className="absolute inset-0 bg-gradient-to-l from-white/20 to-transparent"></div> {/* Gradient Overlay */}
            </div>

            {/* Content (Left Side) */}
            <div className="relative z-10 p-8 w-full ">
                <img className='absolute left-[-20px] right-10 -top-10 opacity-60 blur-sm' src="/Ellipse 9.svg" alt="" />

                <h1 className="text-6xl font-bold text-[#2C6252] mb-4 ml-4 leading-[1.3] -mt-4 flex items-center">
                    Savor the
                    <button className="bg-white text-black py-1 px-3 rounded-full flex items-center space-x-2 ml-8 text-sm border border-black"> {/* Reduced padding and font size */}
                        <span className="flex items-center">
                            <span className="flex items-center space-x-2 text-[20px]">
                                <span className="text-red-500 ml-2">Live</span>
                                <span>kitchen</span>
                            </span>

                            <div className="flex items-center justify-end bg-[#FF4C15] rounded-full p-2 ml-2 w-8 h-8">
                                <img src="/Polygon 2.svg" alt="" className='h-2 w-5 ' />
                            </div>

                        </span>
                    </button>
                </h1>

                <h1 className="text-6xl font-bold text-[#2C6252] mb-4 ml-4  -mt-14 "><br /> Flavor, Relish <br />  </h1>
                <div className="flex items-center space-x-4 ml-4 mt-8">
                    <span className="text-[#FF4C15] text-6xl font-bold mb-4 ">Every Bite!</span>

                    <button className="bg-[#2C6252] text-white py-2 px-4 rounded-full flex items-center space-x-2 -mt-4">
                        <span>Up to 50% Off</span>
                        <div className="bg-white p-2 rounded-full flex items-center justify-center">
                            <img src="/public/arrow.svg" alt="Arrow" className="h-3 w-3" />
                        </div>
                    </button>
                </div>


                <p
                    className="mb-8 text-[20px] ml-2 p-4 bg-cover bg-center w-[620px] h-[250px] flex flex-col justify-center"
                    style={{ backgroundImage: "url('https://res.cloudinary.com/dxohwanal/image/upload/v1742627149/Tasty_uw9ilh.png')" }}
                >
                    <span className="inline-flex">
                        <span className="text-[#FF4C15] whitespace-nowrap">
                            Experience the perfect blend of taste and joy—
                        </span>
                        <span className="text-[#AAAAAA] ml-2 whitespace-nowrap">
                            every bite is
                        </span>
                    </span>
                    <span className="text-[#AAAAAA] block mt-2">
                        moment of delight, crafted to satisfy your cravings!
                    </span>
                </p>





                <div className="flex items-center space-x-4 mt-36">
                    <div className="relative">
                        <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1742626992/pngegg_17_u4hkq7.png" alt="Burger" className="w-24" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-20%</span>
                    </div>
                    <div className="relative">
                        <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1742627043/pngegg_18_fyzuz7.png" alt="Chicken" className="w-24" />
                        <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded-full">-10%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;