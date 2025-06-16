import Container from "../../../../components/Container";

const Roast = () => {
    return (
        <Container>
            <div className="3xl:px-12 3xl:ml-7 3xl:mb-24">
                {/* Header Section */}
                <div className="bg-[#2C6252] text-white relative overflow-hidden p-10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex flex-col md:flex-row items-center md:items-start justify-between">
                        {/* Left Content */}
                        <div className="md:w-1/2 z-10 text-center md:text-left mb-8 md:mb-0">
                            <h1 className="text-3xl md:text-4xl font-bold  mb-4 mt-12">
                                Classic <br /> Roast Brew
                            </h1>
                            <p className="text-xs mb-8 max-w-md mx-auto md:mx-0 mt-6">
                                Management reserves the right to modify or cancel the offer without prior notice.
                            </p>
                            <button className="bg-[#FF4C15]  text-white font-semibold py-2 px-6">
                                Order Now &gt;
                            </button>
                        </div>

                        {/* Right Image */}
                        <div className="flex justify-center md:justify-end w-full">
                            <img
                                src="https://res.cloudinary.com/dxohwanal/image/upload/v1750073781/Mask_Group_49_lumoct.png"
                                alt="Classic Roast Brew"
                                className=" translate-x-24 translate-y-10 md:translate-x-20 -mt-16 "
                            />
                        </div>

                    </div>
                </div>

                {/* Enjoy Unbeatable Deals Section */}
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-10 -mt-10 md:-mt-16 relative z-20 left-28">
                    <div className="bg-white p-12  text-center md:text-left max-w-xl shadow-lg mx-auto relative left-64 ">
                        <h2 className="text-3xl font-bold text-[#2C6252] mb-4 leading-normal">
                            Enjoy unbeatable <br />  deals with us
                        </h2>
                        <p className="text-[#BCB1AD] text-sm">
                            Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee—our weekly offers have.
                        </p>
                    </div>
                </div>

                {/* Features Section */}
                <div className=" px-4 sm:px-6  py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-72 text-center mt-20 whitespace-nowrap">
                    <div className="flex flex-col items-center p-4">

                        <div className="text-5xl text-gray-700 mb-4">🚚</div>
                        <h3 className="font-semibold text-xl">Speedy Delivery</h3>
                        <p className="text-[10px] text-[#CCCCCC] mt-4">Our menu is carefully crafted <br /> by expert 
                            chefs </p>
                    </div>

                    <div className="flex flex-col items-center p-4">
                        {/* Icon for 24/7 Customer Support */}
                        <div className="text-5xl text-gray-700 mb-4">📞</div>
                        <h3 className="font-semibold text-xl">24/7 Customer Support</h3>
                         <p className="text-[10px] text-[#CCCCCC] mt-4">Our menu is carefully crafted <br /> by expert 
                            chefs </p>
                    </div>

                    <div className="flex flex-col items-center p-4">
                        {/* Icon for One-Stop Shop */}
                        <div className="text-5xl text-gray-700 mb-4">🛒</div>
                        <h3 className="font-semibold text-xl">One-Stop Shop</h3>
                         <p className="text-[10px] text-[#CCCCCC] mt-4">Our menu is carefully crafted <br /> by expert 
                            chefs </p>
                    </div>

                    <div className="flex flex-col items-center p-4">
                        {/* Icon for Crafted with Care */}
                        <div className="text-5xl text-gray-700 mb-4">❤️</div>
                        <h3 className="font-semibold text-xl">Crafted with Care</h3>
                         <p className="text-[10px] text-[#CCCCCC] mt-4">Our menu is carefully crafted <br /> by expert 
                            chefs </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Roast;