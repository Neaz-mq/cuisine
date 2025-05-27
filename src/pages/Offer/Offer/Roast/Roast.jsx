import React from 'react';

const Roast = () => {
    return (
        <div className="font-sans"> {/* Assuming a sans-serif font for the whole page */}
            {/* Header Section */}
            <div className="bg-green-800 text-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col md:flex-row items-center md:items-start justify-between">
                    {/* Left Content */}
                    <div className="md:w-1/2 z-10 text-center md:text-left mb-8 md:mb-0">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
                            Classic <br /> Roast Brew
                        </h1>
                        <p className="text-lg mb-8 max-w-md mx-auto md:mx-0">
                            Management reserves the right to modify or cancel the offer without prior notice.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out">
                            Order Now
                        </button>
                    </div>

                    {/* Right Image */}
                    <div className="md:w-1/2 flex justify-center md:justify-end">
                        <img
                            src="https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Roasted+Chicken" // Replace with your actual image
                            alt="Classic Roast Brew"
                            className="w-full max-w-lg rounded-lg shadow-2xl transform translate-x-12 translate-y-8 md:translate-x-16 md:translate-y-0"
                            // The `translate-x` and `translate-y` are to mimic the slightly off-center position of the image in the design.
                            // Adjust these values as needed based on your actual image and desired effect.
                        />
                    </div>
                </div>
            </div>

            {/* Enjoy Unbeatable Deals Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 relative z-20">
                <div className="bg-white p-8 rounded-lg shadow-xl text-center md:text-left max-w-2xl mx-auto md:ml-auto md:mr-0">
                    <h2 className="text-4xl font-bold text-orange-600 mb-4">
                        Enjoy unbeatable deals with us
                    </h2>
                    <p className="text-gray-700 text-lg">
                        Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee—our weekly offers have.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div className="flex flex-col items-center p-4">
                    {/* Icon for Speedy Delivery - using a placeholder for now */}
                    <div className="text-5xl text-gray-700 mb-4">🚚</div> {/* Replace with an actual icon */}
                    <h3 className="font-semibold text-lg">Speedy Delivery</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    {/* Icon for 24/7 Customer Support */}
                    <div className="text-5xl text-gray-700 mb-4">📞</div> {/* Replace with an actual icon */}
                    <h3 className="font-semibold text-lg">24/7 Customer Support</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    {/* Icon for One-Stop Shop */}
                    <div className="text-5xl text-gray-700 mb-4">🛒</div> {/* Replace with an actual icon */}
                    <h3 className="font-semibold text-lg">One-Stop Shop</h3>
                </div>

                <div className="flex flex-col items-center p-4">
                    {/* Icon for Crafted with Care */}
                    <div className="text-5xl text-gray-700 mb-4">❤️</div> {/* Replace with an actual icon */}
                    <h3 className="font-semibold text-lg">Crafted with Care</h3>
                </div>
            </div>
        </div>
    );
};

export default Roast;