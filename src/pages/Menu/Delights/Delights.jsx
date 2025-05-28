const Delights = () => {
    return (

       <div className="container mx-auto">
         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12 max-w-7xl mx-auto mt-20">

            {/* Top Left - Shrimp */}
            <div className="flex flex-col bg-white overflow-hidden p-6">
                <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146051/Mask_Group_51_pfs869.png"
                    alt="Shrimp"
                    className="w-full h-auto object-cover"
                />
                <div className="flex flex-col mt-16">
                    <div className="flex items-center justify-between mb-2">
                        <h3 className="text-2xl font-medium text-[#2C6252]">
                            Fresh and High- <span className="text-[#FF4C15]">Quality Ingredients</span>
                        </h3>
                        <div className="flex items-center space-x-1">
                            <span className="text-[#FFE61C]">★★★★★</span>
                            <span className="text-xs text-[#CCCCCC] whitespace-nowrap">(4.8 Rating)</span>
                        </div>

                    </div>
                    {/* New flex container for paragraph and button */}
                    <div className="flex items-center justify-between mt-6"> {/* Added flex, items-center, justify-between */}
                        <p className="text-xs text-[#AAAAAA] w-2/3 pr-4"> {/* Added w-2/3 and pr-4 for text width and spacing */}
                            At Ocean’s Bounty, every dish tells a story of the sea — fresh,
                            vibrant, and full of life. We believe great seafood should taste like a
                            seaside escape, where the salt air kisses your skin and every bite
                            feels like a wave of pure flavor.
                        </p>
                        <button className="bg-[#FF4C15] text-white px-3 py-2  hover:bg-orange-600 text-lg font-semibold -mt-4 whitespace-nowrap">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Top Right - Sushi */}
            <div className="flex justify-center items-center mt-5">
                <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146115/Mask_Group_54_uywl3m.png"
                    alt="Sushi"
                    className=" w-full 3xl:h-[700px] 2xl:h-[700px] xl:h-[700px] lg:h-[600px] object-cover"
                />
            </div>

            {/* Bottom Left - Discount Offer (Modified to match the new screenshot) */}
            <div className="relative  overflow-hidden w-full h-[350px] 3xl:h-[700px] 2xl:h-[700px] xl:h-[800px] lg:h-auto 3xl:left-7 2xl:left-7 xl:left-8  lg:left-6    -top-8"> {/* Increased height for better background visibility */}
                <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146155/Mask_Group_55_ndcfj6.png"
                    alt="Chef Cooking"
                    className="absolute inset-0 3xl:w-[35rem] 2xl:w-[35rem] xl:w-[30rem] lg:w-[22rem]  h-auto object-cover object-center" // Image as full background
                />
                {/* Orange overlay with content */}
                <div className="absolute top-0 3xl:right-12 2xl:right-12 xl:right-12 3xl:w-[20rem] 2xl:w-[20rem] xl:w-[16rem] h-72 bg-[#FF4B16] bg-opacity-80 text-white p-8 flex flex-col justify-center"> {/* Adjusted width, full height, opacity, padding, and flex for content alignment */}
                    <h2 className="text-7xl font-bold leading-none mt-4">50%</h2> {/* Larger 50% */}
                    <p className="text-2xl font-semibold leading-tight mt-2">Discount Offer</p> {/* Larger "Discount Offer" */}
                    <p className="mt-4 text-sm leading-relaxed max-w-xs"> {/* Added descriptive text and max-width */}
                        We source only the freshest and highest-quality ingredients to ensure every dish bursts with flavor.
                    </p>
                </div>
            </div>

            {/* Bottom Right - Deep Blue Delights */}
            <div className="relative  overflow-hidden w-full lg:h-[450px] xl:h-[630px] 3xl:h-[700px] 2xl:h-[700px] bg-white  p-6 flex -top-3 right-4" >
                {/* Left content area: descriptive text, rating, button */}
                <div className="flex flex-col justify-end w-full lg:w-1/2 pr-4 z-10">
                    <p className="text-sm text-[#EFEFEF] mb-4 max-w-xs ">
                        Experience the perfect <br /> blend  of taste and joy—every <br /> bite is a moment of <br /> delight, crafted <br /> to satisfy your cravings!
                    </p>
                    <div className="flex items-center space-x-1 text-base text-gray-500 mb-4 ">
                        <span className="text-yellow-500">★★★★★</span>
                        <span className="text-sm text-[#CCCCCC] whitespace-nowrap">(4.8 Rating)</span>
                    </div>
                    <button className="bg-[#FF4C15] text-white px-3 py-2  hover:bg-orange-600 text-xl font-semibold w-full max-w-[150px] ">
                        Order Now
                    </button>
                </div>

                {/* Right content area: Headline and Savor text - Left-aligned */}
                <div className="flex flex-col items-center justify-center w-full lg:w-1/2 pl-4 z-10 text-left -ml-24 ">
                    <h2 className="lg:text-4xl 3xl:text-6xl 2xl:text-6xl  xl:text-6xl font-bold space-y-4 3xl:-mt-[25rem] 2xl:-mt-[25rem] xl:-mt-[20rem] lg:-mt-[16rem]">
                        <div className="text-[#2C6252]">Deep</div>
                        <div className="text-[#2C6252]">Blue</div>
                        <div className="text-[#FF4C15]">Delights</div>
                    </h2>

                    <p className="text-sm text-[#AAAAAA] mt-4 3xl:-ml-12 2xl:-ml-12 xl:ml-10 lg:ml-5">
                        Savor the Secrets of the Sea
                    </p>
                </div>


                {/* Image on the right, overlapping */}
                <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146220/pngegg_70_kfw3ly.png"
                    alt="Fish Dish"
                    className="absolute bottom-0 right-0 3xl:left-60 2xl:left-60 xl:left-60  lg:left-44 3xl:w-3/5 2xl:w-3/5 xl:w-3/6 lg:w-64 h-auto object-contain z-0 3xl:top-80 2xl:top-80 xl:top-80 lg:top-44"
                />
            </div>
        </div>
       </div>
    );
};

export default Delights;



