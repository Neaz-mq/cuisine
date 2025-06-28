import Container from "../../../components/Container";

const Support = () => {
    return (
        <Container>
        <div className="3xl:px-[2.2rem] 2xl:px-0 xl:px-10 3xl:mt-48 2xl:mt-36 xl:mt-28">
            {/* Main layout grid for desktop: 2/3 for content, 1/3 for image */}
            <div className="grid grid-cols-1 lg:grid-cols-3 3xl:gap-6 2xl:gap-6 xl:gap-6 p-4 3xl:p-8 2xl:p-6 xl:p-4 ">
                {/* Left Section: Contains the two top cards and the bottom large section */}
                <div className="lg:col-span-2 flex flex-col space-y-6">

                    {/* Top Row: Two customer service cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Card 1: Light greenish-grey background */}
                        <div className="bg-[#F8F8F8] p-8  flex flex-col items-start text-left">
                            {/* Icon/Logo Placeholder (simulating the 24/7 icon from the image) */}
                            <div className="mb-4 bg-white 3xl:p-3 2xl:p-3 xl:p-0   flex items-end justify-end w-full">
                               <img src="/call.svg" alt="" />
                            </div>
                            <h3 className="text-xl 3xl:text-2xl 2xl:text-2xl xl:text-lg font-bold text-[#3F7765] mb-2 mt-2">Outstanding Customer Service</h3>
                            <p className="3xl:text-xs 2xl:text-xs xl:text-[10px] text-[#CCCCCC] mt-2">
                                Our staff is dedicated to providing warm and attentive service, making sure that every interaction is pleasant and helpful.
                            </p>
                        </div>

                        {/* Card 2: Light reddish-pink background */} 
                        <div className="bg-[#FFFAF8] p-8  flex flex-col items-start text-left">
                            {/* Icon/Logo Placeholder (simulating the 24/7 icon from the image) */}
                            <div className="mb-4 bg-white 3xl:p-3 2xl:p-3 xl:p-0   flex items-end justify-end 3xl:w-full 2xl:w-full xl:w-full">
                               <img src="/call.svg" alt="" />
                            </div>
                            <h3 className="text-xl 3xl:text-2xl 2xl:text-2xl xl:text-lg font-bold text-[#3F7765] mb-2 mt-2">Outstanding Customer Service</h3>
                            <p className="3xl:text-xs 2xl:text-xs xl:text-[10px] text-[#CCCCCC] mt-2">
                                Our staff is dedicated to providing warm and attentive service, making sure that every interaction is pleasant and helpful.
                            </p>
                        </div>
                    </div>

                    {/* Bottom Row: Large "Enjoy unbeatable deals" section */}
                    <div className="bg-[#2D6A5E] p-6 3xl:p-10 2xl:p-10 xl:p-6  text-left text-white mt-6">
                        <h2 className="text-3xl 3xl:text-4xl 2xl:text-3xl xl:text-xl font-bold mb-3 ">Enjoy unbeatable</h2>
                        <h2 className="text-3xl 3xl:text-4xl 2xl:text-3xl xl:text-xl font-bold mb-4 ">deals every</h2>
                        <p className="text-base 3xl:text-sm 2xl:text-sm xl:text-[12px] opacity-90 mt-6">
                           Thanks for the clarification — it sounds like you're asking for restaurant <br /> kitchen section names meant for content purposes 
                        </p>
                    </div>
                </div>

                {/* Right Section: Chef Image */}
                <div className="lg:col-span-1 flex justify-center items-center">
                    <img
                        src="https://res.cloudinary.com/dxohwanal/image/upload/v1750141710/Mask_Group_63_b6f8fz.png" // Placeholder image URL
                        alt="Chef holding a dish"
                        className="w-full h-full object-cover  max-h-[565px] "
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
