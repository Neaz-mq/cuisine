import React from 'react';

const Banner = () => {
    return (
        <div className="relative bg-white z-0 ml-36">
            {/* Content and Image Container */}
            <div className="flex items-start justify-between">
                {/* Left Side Content */}
                <div className="relative w-1/2 p-8">
                    <img className='absolute left-[-20px] right-10 -top-10 opacity-60 blur-sm' src="/Ellipse 9.svg" alt="" />
                    
                    <div className="ml-4">
                        <h1 className="text-6xl font-bold text-[#2C6252] leading-tight flex items-center -mt-3">
                            Savor the
                            <button className="bg-white text-black py-1 px-3 rounded-full flex items-center space-x-2 ml-8 text-sm border border-black">
                                <span className="flex items-center text-[20px]">
                                    <span className="text-red-500 ml-2">Live</span>
                                    <span className='text-[#2C6252]'>kitchen</span>
                                </span>
                                <div className="bg-[#FF4C15] rounded-full p-2 ml-2 w-8 h-8 flex items-center justify-center">
                                    <img src="/Polygon 2.svg" alt="" className='h-2 w-5' />
                                </div>
                            </button>
                        </h1>
                        
                        <h1 className="text-6xl font-bold text-[#2C6252] leading-tight mt-2">Flavor, Relish</h1>
                    </div>
                    
                    <div className="flex items-center space-x-4 ml-4 mt-5">
                        <span className="text-[#FF4C15] text-6xl font-bold">Every Bite!</span>
                        <button className="bg-[#2C6252] text-white py-2 px-4 rounded-full flex items-center space-x-2 border-2 border-orange-500">
                            <span>Up to 50% Off</span>
                            <div className="bg-white p-2 rounded-full flex items-center justify-center">
                                <img src="/public/arrow.svg" alt="Arrow" className="h-3 w-3" />
                            </div>
                        </button>
                    </div>
                    
                    <div className='-mt-6'>
                        <p className="mb-8 text-[20px] ml-2 p-4 bg-cover bg-center w-[650px] h-[250px] flex flex-col justify-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dxohwanal/image/upload/v1742627149/Tasty_uw9ilh.png')" }}>
                            <span className="inline-flex">
                                <span className="text-[#FF4C15] whitespace-nowrap">Experience the perfect blend of taste and joy—</span>
                                <span className="text-[#AAAAAA] ml-2 whitespace-nowrap">every bite is a</span>
                            </span>
                            <span className="text-[#AAAAAA] block mt-2">moment of delight, crafted to satisfy your cravings!</span>
                        </p>
                    </div>
                    
                    <div className="flex items-center space-x-20 -mt-10">
                        {[
                            { src: "https://res.cloudinary.com/dxohwanal/image/upload/v1742626992/pngegg_17_u4hkq7.png", price: "20$", top: "60px" },
                            { src: "https://res.cloudinary.com/dxohwanal/image/upload/v1742627043/pngegg_18_fyzuz7.png", price: "10$", top: "32px", extraClass: "-mt-16"}
                        ].map((item, index) => (
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
                <div className="w-1/2 -mt-72 overflow-hidden">
                    <img src="https://res.cloudinary.com/dxohwanal/image/upload/v1742632805/Rectangle_3_kyld2u.png" alt="Banner" className="w-full h-full object-cover ml-56" />
                </div>
            </div>
            
            {/* Decorative Images */}
            {[
                { src: "https://res.cloudinary.com/dxohwanal/image/upload/v1742634046/Group_21_ycil0t.png", className: "ml-[78rem] -mt-[21rem] overflow-hidden" },
                { src: "https://res.cloudinary.com/dxohwanal/image/upload/v1742636903/pngegg_6_ttou9i.png", className: "ml-[73rem] -mt-[60rem] overflow-hidden" }
            ].map((item, index) => (
                <div key={index} className={item.className}>
                    <img className="ml-28" src={item.src} alt="" />
                </div>
            ))}
        </div>
    );
};

export default Banner;