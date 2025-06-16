const Feast = () => {
    return (
        <div className="font-sans max-w-6xl mx-auto p-5 md:p-8 lg:p-10">
            {/* Hero Section */}
            <div className="flex flex-col md:flex-row items-center justify-between bg-green-50 p-8 md:p-10 rounded-lg mb-10 md:mb-12">
                <div className="flex-1 min-w-[300px] md:mr-5 text-center md:text-left mb-8 md:mb-0">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight mb-2">
                        Enjoy unbeatable deals every <br /> week at <span className="text-orange-600">Flavors & Feast!</span>
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600">
                        – Free Dessert with any Main Course
                    </p>
                </div>
                <div className="flex-1 flex justify-center items-center min-w-[300px]">
                    <img
                        src="https://res.cloudinary.com/dxohwanal/image/upload/v1748323779/pngegg_63_yi9xit.png"
                        alt="Fried Chicken"
                        className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Menu Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Menu Item 1 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <div className="w-full h-48 overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748323910/Mask_Group_28_hem67i.png"
                            alt="Crispy Chicken Wings"
                            className="w-full h-full object-cover rounded-t-lg"
                        />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-1">Crispy <br /> Chicken Wings</h3>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">Our menu is carefully crafted by expert chefs who bring creativity</p>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-2xl font-bold text-gray-800">$12 <span className="text-sm text-gray-500 font-normal">/ pcs</span></span>
                            <button className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.769.746 1.769H19V8.5L16.293 5.707a1 1 0 00-1.414 0L12 8.5l-2.293-2.293a1 1 0 00-1.414 0L5.707 8.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu Item 2 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <div className="w-full h-48 overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748323817/Mask_Group_28_ovt62q.png"
                            alt="Santa's Stuffed Mushrooms"
                            className="w-full h-full object-cover rounded-t-lg"
                        />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-1">Santa's <br /> Stuffed Mushrooms</h3>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">Our menu is carefully crafted by expert chefs who bring creativity</p>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-2xl font-bold text-gray-800">$12 <span className="text-sm text-gray-500 font-normal">/ pcs</span></span>
                            <button className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.769.746 1.769H19V8.5L16.293 5.707a1 1 0 00-1.414 0L12 8.5l-2.293-2.293a1 1 0 00-1.414 0L5.707 8.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu Item 3 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <div className="w-full h-48 overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748323853/Mask_Group_28_vyk1th.png"
                            alt="Classic Roast Brew"
                            className="w-full h-full object-cover rounded-t-lg"
                        />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-1">Classic <br /> Roast Brew</h3>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">Our menu is carefully crafted by expert chefs who bring creativity</p>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-2xl font-bold text-gray-800">$12 <span className="text-sm text-gray-500 font-normal">/ pcs</span></span>
                            <button className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.769.746 1.769H19V8.5L16.293 5.707a1 1 0 00-1.414 0L12 8.5l-2.293-2.293a1 1 0 00-1.414 0L5.707 8.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menu Item 4 */}
                <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
                    <div className="w-full h-48 overflow-hidden">
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748323949/Mask_Group_28_re0mpe.png"
                            alt="Cheesy Crust Deluxe"
                            className="w-full h-full object-cover rounded-t-lg"
                        />
                    </div>
                    <div className="p-4 flex flex-col flex-grow">
                        <h3 className="text-xl font-semibold text-gray-800 leading-tight mb-1">Cheesy <br /> Crust Deluxe</h3>
                        <p className="text-sm text-gray-600 mb-4 flex-grow">Our menu is carefully crafted by expert chefs who bring creativity</p>
                        <div className="flex justify-between items-center mt-auto">
                            <span className="text-2xl font-bold text-gray-800">$12 <span className="text-sm text-gray-500 font-normal">/ pcs</span></span>
                            <button className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.769.746 1.769H19V8.5L16.293 5.707a1 1 0 00-1.414 0L12 8.5l-2.293-2.293a1 1 0 00-1.414 0L5.707 8.5z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feast;