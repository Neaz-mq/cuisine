const Delights = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 py-12 max-w-7xl mx-auto mt-60">
            {/* Top Left - Shrimp */}
            <div className="flex flex-col lg:flex-row gap-4">
                <img
                    src="https://via.placeholder.com/300x200" // Replace with actual image
                    alt="Shrimp"
                    className="rounded-xl w-full lg:w-1/2 object-cover"
                />
                <div className="flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-semibold">
                            Fresh and High-
                            <span className="text-red-500">Quality</span> Ingredients
                        </h3>
                        <p className="text-sm text-gray-600 mt-2">
                            At Ocean’s Bounty, every dish tells a story of the sea — fresh,
                            vibrant, and full of life.
                        </p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <div className="text-sm text-gray-500">(4.8 Rating)</div>
                        <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Top Right - Sushi */}
            <div>
                <img
                    src="https://via.placeholder.com/600x400" // Replace with actual image
                    alt="Sushi"
                    className="rounded-xl w-full object-cover"
                />
            </div>

            {/* Bottom Left - Discount Offer */}
            <div className="flex flex-col lg:flex-row gap-4">
                <img
                    src="https://via.placeholder.com/300x200" // Replace with actual image
                    alt="Chef Cooking"
                    className="rounded-xl w-full lg:w-1/2 object-cover"
                />
                <div className="bg-orange-500 text-white p-6 rounded-xl flex flex-col justify-between">
                    <h2 className="text-3xl font-bold">50%<br />Discount Offer</h2>
                    <p className="mt-2 text-sm">
                        We source only the freshest and highest-quality ingredients to ensure every dish bursts with flavor.
                    </p>
                </div>
            </div>

            {/* Bottom Right - Deep Blue Delights */}
            <div className="flex flex-col justify-between">
                <h2 className="text-3xl font-bold">
                    Deep <span className="text-orange-500">Blue<br />Delights</span>
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                    Savor the Secrets of the Sea
                </p>
                <p className="text-xs text-gray-400 mt-4 max-w-xs">
                    Experience the perfect blend of taste and joy—every bite is a moment of delight, crafted to satisfy your cravings!
                </p>
                <div className="flex items-center justify-between mt-4">
                    <div className="text-sm text-gray-500">(4.8 Rating)</div>
                    <button className="bg-orange-500 text-white px-4 py-1 rounded hover:bg-orange-600">
                        Order Now
                    </button>
                </div>
                <img
                    src="https://via.placeholder.com/300x200" // Replace with actual image
                    alt="Fish Dish"
                    className="rounded-xl mt-4 object-cover"
                />
            </div>
        </div>
    );
};

export default Delights;
