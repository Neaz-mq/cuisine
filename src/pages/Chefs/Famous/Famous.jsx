import Container from "../../../components/Container";

const Famous = () => {
    return (
        <Container>
            <div className="3xl:-mt-[45rem] 3xl:px-[4.3rem] mb-24">
            {/* Top Headings */}
            <div className="mt-20 mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#2C6252] leading-snug">
                    Enjoy unbeatable deals every <br className="hidden lg:block" />
                    <span className="text-[#FF4C15]">week at Flavors & Feast!</span>
                </h2>
                <p className="text-[#2C6252] mt-2 font-medium text-sm">
                    – <span className="italic font-semibold">Free Dessert</span> with any Main Course
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left - Image with Overlay Label */}
                <div className="relative">
                    <img
                        src="https://images.unsplash.com/photo-1551218808-94e220e084d2"
                        alt="Famous Chef"
                        className="w-full h-[300px] object-cover rounded-lg"
                    />
                    {/* 🔥 Orange label on bottom-right */}
                    <div className="absolute bottom-0 right-0 bg-[#FF4C15] text-white px-6 py-4 text-xl font-bold leading-snug">
                        World <br /> famous chef
                    </div>
                </div>

                {/* Right - 2x2 Service Grid */}
                <div className="grid grid-cols-2 gap-4">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index}>
                            <h3 className="text-[#2C6252] font-bold text-base leading-snug">
                                Outstanding <br />
                                <span className="text-[#FF4C15]">Customer Service</span>
                            </h3>
                            <p className="text-[#A9A2A2] text-xs mt-2 leading-relaxed">
                                Our staff is dedicated to providing warm and attentive service, making sure that
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Right Text Block */}
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-6">
                <div></div> {/* Left empty to align right side only */}
                <div className="bg-[#F8F8F8] text-sm text-[#2C6252] p-6 leading-relaxed">
                    Thanks for the clarification — it sounds like you're asking for restaurant kitchen section names meant
                    for content purposes (<span className="text-[#FF4C15] font-medium">like a blog, video series, or social media</span>). Here's a set of catchy and
                    themed section name ideas that could help organize.
                </div>
            </div>
            </div>
        </Container>
    );
};

export default Famous;
