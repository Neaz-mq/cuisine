import Container from "../../../components/Container";

const Famous = () => {
    return (
        <Container>
            <div className="3xl:-mt-[44rem] 2xl:-mt-[50rem] 3xl:px-[4.3rem] 2xl:px-[1.3rem] mb-24">
            {/* Top Headings */}
            <div className="mt-20 mb-12">
                <h2 className="text-2xl lg:text-3xl font-bold text-[#2C6252] leading-snug">
                    Enjoy unbeatable deals every <br className="hidden lg:block" />
                    <span className="text-[#FF4C15] font-normal">week at Flavors & Feast!</span>
                </h2>
                <p className="text-[#2C6252] mt-2 font-medium text-sm">
                    – <span className=" font-semibold">Free Dessert</span> with any Main Course
                </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Left - Image with Overlay Label */}
                <div className="relative">
                    <img
                        src="https://res.cloudinary.com/dxohwanal/image/upload/v1750152925/Mask_Group_62_hvwc6j.png"
                        alt="Famous Chef"
                        className="w-full h-auto object-cover "
                    />
                    {/* 🔥 Orange label on bottom-right */}
                    <div className="absolute bottom-0 right-0 bg-[#FF4C15] text-white 3xl:px-12 3xl:py-14 2xl:px-[3.5rem] 2xl:py-[3.6rem] text-xl font-bold leading-snug">
                        World <br /> famous chef
                    </div>
                </div>

                {/* Right - 2x2 Service Grid */}
                <div className="grid grid-cols-2 3xl:gap-14 2xl:gap-10 ml-8 mt-8">
                    {Array.from({ length: 4 }).map((_, index) => (
                        <div key={index}>
                            <h3 className="text-[#2C6252] font-bold text-base leading-snug">
                                Outstanding <br />
                                <span className="text-[#2C6252]">Customer Service</span>
                            </h3>
                            <p className="text-[#CCCCCC] text-xs 3xl:mt-5 2xl:mt-3 leading-relaxed">
                                Our staff is dedicated to providing <br /> warm and attentive service, <br /> making  sure that
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom Right Text Block */}
            <div className="grid grid-cols-1 lg:grid-cols-2 3xl:-mt-[10.6rem] 2xl:-mt-[10.6rem] -ml-8">
                <div></div> {/* Left empty to align right side only */}
                <div className="bg-[#F8F8F8] 3xl:text-sm 2xl:text-[12px] text-[#2C6252] 3xl:px-14 3xl:py-10 2xl:px-[3.3rem] 2xl:py-[2.9rem] leading-relaxed ">
                    Thanks for the clarification — it sounds like you're asking for restaurant <br /> kitchen section names meant
                    for content purposes (<span className="text-[#FF4C15] font-medium">like a blog, video series, or social media</span>). Here's a set of catchy and
                    themed section <br /> name ideas that could help organize.
                </div>
            </div>
            </div>
        </Container>
    );
};

export default Famous;
