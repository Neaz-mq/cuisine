const Delights = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12 max-w-7xl mx-auto mt-20">

            {/* Top Left - Shrimp */}
           <div className="flex flex-col bg-white rounded-xl shadow-lg overflow-hidden p-6">
                <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146051/Mask_Group_51_pfs869.png"
                    alt="Shrimp"
                    className="rounded-xl w-full h-[250px] object-cover"
                />
                <div className="flex flex-col mt-4">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-3xl font-bold text-gray-800">
                            Fresh and High-Quality <span className="text-red-500">Ingredients</span>
                        </h3>
                        <div className="flex items-center space-x-1">
                            <span className="text-yellow-500">★★★★★</span>
                            <span className="text-base text-gray-500">(4.8 Rating)</span>
                        </div>
                    </div>
                    {/* New flex container for paragraph and button */}
                    <div className="flex items-center justify-between mt-2"> {/* Added flex, items-center, justify-between */}
                        <p className="text-base text-gray-600 w-2/3 pr-4"> {/* Added w-2/3 and pr-4 for text width and spacing */}
                            At Ocean’s Bounty, every dish tells a story of the sea — fresh,
                            vibrant, and full of life. We believe great seafood should taste like a
                            seaside escape, where the salt air kisses your skin and every bite
                            feels like a wave of pure flavor.
                        </p>
                        <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 text-lg font-semibold">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Top Right - Sushi */}
            <div className="flex justify-center items-center">
                <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146115/Mask_Group_54_uywl3m.png"
                    alt="Sushi"
                    className="rounded-xl w-full h-full object-cover"
                />
            </div>

            {/* Bottom Left - Discount Offer (Modified to match the new screenshot) */}
            <div className="relative rounded-xl overflow-hidden w-full h-[350px] lg:h-[450px]"> {/* Increased height for better background visibility */}
                <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146155/Mask_Group_55_ndcfj6.png"
                    alt="Chef Cooking"
                    className="absolute inset-0 w-full h-full object-cover object-center" // Image as full background
                />
                {/* Orange overlay with content */}
                <div className="absolute top-0 right-0 w-2/3 h-64 bg-orange-500 bg-opacity-80 text-white p-8 flex flex-col justify-center"> {/* Adjusted width, full height, opacity, padding, and flex for content alignment */}
                    <h2 className="text-6xl font-bold leading-none">50%</h2> {/* Larger 50% */}
                    <p className="text-3xl font-semibold leading-tight mt-2">Discount Offer</p> {/* Larger "Discount Offer" */}
                    <p className="mt-6 text-base leading-relaxed max-w-xs"> {/* Added descriptive text and max-width */}
                        We source only the freshest and highest-quality ingredients to ensure every dish bursts with flavor.
                    </p>
                </div>
            </div>

            {/* Bottom Right - Deep Blue Delights */}
          <div className="relative rounded-xl overflow-hidden w-full h-auto lg:h-[550px] bg-white shadow-lg p-6 flex">
                {/* Left content area: descriptive text, rating, button */}
                <div className="flex flex-col justify-end w-full lg:w-1/2 pr-4 z-10">
                    <p className="text-lg text-gray-500 mb-4 max-w-xs">
                        Experience the perfect blend of taste and joy—every bite is a moment of delight, crafted to satisfy your cravings!
                    </p>
                    <div className="flex items-center space-x-1 text-base text-gray-500 mb-4">
                        <span className="text-yellow-500">★★★★★</span>
                        <span>(4.8 Rating)</span>
                    </div>
                    <button className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 text-xl font-semibold w-full max-w-[200px]">
                        Order Now
                    </button>
                </div>

                {/* Right content area: Headline and Savor text - Left-aligned */}
                <div className="flex flex-col items-start justify-start w-full lg:w-1/2 pl-4 z-10 text-left "> {/* Changed items-center to items-start and text-center to text-left */}
                    <h2 className="text-6xl lg:text-7xl font-bold leading-tight ">
                        <span className="text-teal-700">Deep</span><br />
                        <span className="text-teal-700">Blue</span><br />
                        <span className="text-orange-500">Delights</span>
                    </h2>
                    <p className="text-lg text-gray-500 mt-4 mb-28">
                        Savor the Secrets of the Sea
                    </p>
                </div>

                {/* Image on the right, overlapping */}
                <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146220/pngegg_70_kfw3ly.png"
                    alt="Fish Dish"
                    className="absolute bottom-0 right-0 left-80 w-3/5 h-auto object-contain z-0 top-80"
                />
            </div>
        </div>
    );
};

export default Delights;


