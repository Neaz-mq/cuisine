import Container from "../../../components/Container";

const Support = () => {
    return (
        <Container>
        <div className=" px-4 sm:px-6 lg:px-8">
            {/* Main layout grid for desktop: 2/3 for content, 1/3 for image */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 md:p-8 font-inter">
                {/* Left Section: Contains the two top cards and the bottom large section */}
                <div className="lg:col-span-2 flex flex-col space-y-6">

                    {/* Top Row: Two customer service cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 1: Light greenish-grey background */}
                        <div className="bg-[#E7F3F1] p-6  flex flex-col items-start text-left">
                            {/* Icon/Logo Placeholder (simulating the 24/7 icon from the image) */}
                            <div className="mb-4 bg-white p-3  shadow-inner flex items-end justify-end w-full">
                               <img src="/call.svg" alt="" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Outstanding Customer Service</h3>
                            <p className="text-sm text-gray-600">
                                Our staff is dedicated to providing warm and attentive service, making sure that every interaction is pleasant and helpful.
                            </p>
                        </div>

                        {/* Card 2: Light reddish-pink background */}
                        <div className="bg-[#E7F3F1] p-6  flex flex-col items-start text-left">
                            {/* Icon/Logo Placeholder (simulating the 24/7 icon from the image) */}
                            <div className="mb-4 bg-white p-3  shadow-inner flex items-end justify-end w-full">
                               <img src="/call.svg" alt="" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Outstanding Customer Service</h3>
                            <p className="text-sm text-gray-600">
                                Our staff is dedicated to providing warm and attentive service, making sure that every interaction is pleasant and helpful.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row: Large "Enjoy unbeatable deals" section */}
                    <div className="bg-[#2D6A5E] p-6 md:p-8 rounded-xl shadow-md text-left text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Enjoy unbeatable deals every</h2>
                        <p className="text-base md:text-lg opacity-90">
                            Discover exclusive offers and promotions available daily for a limited time.
                        </p>
                    </div>
                </div>

                {/* Right Section: Chef Image */}
                <div className="lg:col-span-1 flex justify-center items-center">
                    <img
                        src="https://res.cloudinary.com/dxohwanal/image/upload/v1750141710/Mask_Group_63_b6f8fz.png" // Placeholder image URL
                        alt="Chef holding a dish"
                        className="w-full h-full object-cover rounded-xl shadow-md max-h-[500px] lg:max-h-full"
                        // Fallback in case the image fails to load
                        onError={(e) => {
                            e.target.onerror = null; // Prevent infinite loop
                            e.target.src = 'https://placehold.co/600x800/A0A0A0/FFFFFF?text=Image+Error';
                        }}
                    />
                </div>
            </div>
        </div>
        </Container>
    );
};

export default Support;
