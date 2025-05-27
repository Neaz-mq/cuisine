const Picks = () => {
    return (
        <div className="font-sans antialiased text-gray-800 bg-white">
            {/* Top Section */}
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Chef's Weekly Picks - Just for You! */}
                    <div className="bg-orange-50 p-6 md:p-10 rounded-lg shadow-sm">
                        <h2 className="text-3xl md:text-4xl font-semibold text-orange-600 leading-tight mb-4">
                            Chef's Weekly Picks <br /> <span className="text-gray-700">- Just for You!</span>
                        </h2>
                        <p className="text-sm md:text-base text-gray-600 mb-6">
                            Management reserves the right to modify or cancel the offer without prior notice.
                        </p>
                        <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full transition duration-300 ease-in-out">
                            Order Now &gt;
                        </button>
                        <div className="mt-8 flex justify-end">
                            {/* Image of Chicken Nuggets and Fries */}
                            <img
                                src="https://via.placeholder.com/500x300?text=Chicken+Nuggets+%26+Fries" // Replace with your actual image path
                                alt="Chicken Nuggets and Fries"
                                className="rounded-lg w-full max-w-lg object-cover"
                            />
                        </div>
                    </div>

                    {/* Right Column (Enjoy unbeatable deals & Don't Miss This Week's Delights) */}
                    <div className="space-y-8">
                        {/* Enjoy unbeatable deals with us */}
                        <div className="bg-orange-50 p-6 md:p-8 rounded-lg shadow-sm flex items-center">
                            <div className="w-1/3 pr-4">
                                <img
                                    src="https://via.placeholder.com/150x150?text=Grilled+Meat" // Replace with your actual image path
                                    alt="Grilled Meat"
                                    className="rounded-lg w-full object-cover"
                                />
                            </div>
                            <div className="w-2/3">
                                <h3 className="text-2xl font-semibold text-orange-600 mb-2">
                                    Enjoy unbeatable deals <br /> with us
                                </h3>
                                <p className="text-sm text-gray-600">
                                    Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee—our weekly offers have.
                                </p>
                            </div>
                        </div>

                        {/* Don't Miss This Week's Delights */}
                        <div className="bg-green-700 p-6 md:p-8 rounded-lg shadow-md text-white flex items-center">
                            <div className="w-2/3 pr-4">
                                <h3 className="text-2xl font-semibold mb-2">
                                    Don't Miss This Week's <br /> Delights
                                </h3>
                                <p className="text-sm mb-4">
                                    Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee
                                </p>
                                <a href="#" className="text-sm text-yellow-300 underline hover:no-underline">
                                    learn more
                                </a>
                            </div>
                            <div className="w-1/3 flex justify-end">
                                <img
                                    src="https://via.placeholder.com/150x150?text=Pizza" // Replace with your actual image path
                                    alt="Pizza"
                                    className="rounded-lg w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chef's Weekly Picks - Bottom Section (UPDATED to place text on the right) */}
            <div className="container mx-auto px-4 py-8 md:py-12">
                <div className="flex flex-col md:flex-row md:items-start md:space-x-8 mb-6"> {/* Use flex for horizontal layout on medium screens and up */}
                    {/* Left: Chef's Weekly Picks title with horizontal line */}
                    <div className="flex items-center flex-shrink-0 mb-4 md:mb-0 md:w-1/3"> {/* flex-shrink-0 to prevent title from shrinking */}
                        <h2 className="text-3xl font-semibold text-gray-700 whitespace-nowrap">Chef's Weekly <span className="text-orange-600">Picks</span></h2>
                        <div className="flex-grow border-b border-gray-300 ml-4 hidden md:block"></div> {/* Horizontal line, hidden on small screens */}
                    </div>

                    {/* Right: Text content */}
                    <div className="md:w-2/3"> {/* Take up remaining space */}
                        <p className="text-sm text-gray-600 leading-relaxed mb-4"> {/* Added mb-4 for spacing between paragraphs */}
                            Cheesy Bites Pizza Return: Pizza Hut has reintroduced its popular Cheesy Bites Pizza for a limited time. This large, one-topping pizza features a crust made of 28 pull-apart, cheese-filled bites, perfect for dipping 50% Off Online Orders.
                        </p>
                        <p className="text-sm text-red-500 leading-relaxed"> {/* Adjusted color to red-500 for the Domino's offer */}
                            Domino's is offering <span className="font-bold">50% off all menu-priced pizzas</span> ordered online from March 17 to 23, 2025. Customers can choose from any size pizza with any type. <a href="#" className="text-blue-600 underline hover:no-underline">Learn more.</a>
                        </p>
                    </div>
                </div>

                {/* Product Grid (Original product grid remains) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {/* Product Card 1 */}
                    <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="p-4">
                            <p className="text-sm text-gray-500">Cheesy</p>
                            <p className="font-semibold text-gray-800">Crust Deluxe</p>
                        </div>
                        <img
                            src="https://via.placeholder.com/300x200?text=Crispy+Chicken+Burger" // Replace with actual image path
                            alt="Crispy Chicken Burger"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-lg font-medium text-gray-700">Crispy Garden Glory</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">- $10.99</p>
                        </div>
                        <div className="absolute top-4 right-4 bg-orange-500 text-white font-bold text-sm px-3 py-1 rounded-full">
                            30% off
                        </div>
                    </div>

                    {/* Product Card 2 */}
                    <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="p-4">
                            <p className="text-sm text-gray-500">Cheesy</p>
                            <p className="font-semibold text-gray-800">Crust Deluxe</p>
                        </div>
                        <img
                            src="https://via.placeholder.com/300x200?text=Shrimp+Fritters" // Replace with actual image path
                            alt="Shrimp Fritters"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-lg font-medium text-gray-700">Crispy Garden Glory</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">- $10.99</p>
                        </div>
                        <div className="absolute top-4 right-4 bg-red-500 text-white font-bold text-sm px-3 py-1 rounded-full">
                            10% off
                        </div>
                    </div>

                    {/* Product Card 3 */}
                    <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="p-4">
                            <p className="text-sm text-gray-500">Cheesy</p>
                            <p className="font-semibold text-gray-800">Crust Deluxe</p>
                        </div>
                        <img
                            src="https://via.placeholder.com/300x200?text=Chicken+Nuggets" // Replace with actual image path
                            alt="Chicken Nuggets"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-lg font-medium text-gray-700">Crispy Garden Glory</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">- $10.99</p>
                        </div>
                        <div className="absolute top-4 right-4 bg-blue-600 text-white font-bold text-sm px-3 py-1 rounded-full">
                            36% off
                        </div>
                    </div>

                    {/* Product Card 4 */}
                    <div className="relative bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                        <div className="p-4">
                            <p className="text-sm text-gray-500">Cheesy</p>
                            <p className="font-semibold text-gray-800">Crust Deluxe</p>
                        </div>
                        <img
                            src="https://via.placeholder.com/300x200?text=Fried+Chicken+Pieces" // Replace with actual image path
                            alt="Fried Chicken Pieces"
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <p className="text-lg font-medium text-gray-700">Crispy Garden Glory</p>
                            <p className="text-xl font-bold text-gray-900 mt-1">- $10.99</p>
                        </div>
                        <div className="absolute top-4 right-4 bg-red-600 text-white font-bold text-sm px-3 py-1 rounded-full">
                            45% off
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Picks;