import { motion as Motion } from "framer-motion";
import Container from "../../../components/Container";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: i * 0.15,
            ease: "easeOut",
        },
    }),
};

const slideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.8, ease: "easeOut" },
    },
};

const Famous = () => {
    return (
        <Container>
            <div className="3xl:-mt-[44rem] 2xl:-mt-[50rem] xl:-mt-[50rem] lg:-mt-[70rem] 3xl:px-[4.3rem] 2xl:px-[1.3rem] xl:px-[3.4rem] lg:px-[0.2rem] mb-24">

                {/* Top Headings */}
                <Motion.div
                    className="mt-20 mb-12"
                    initial="hidden"
                    whileInView="visible"
                    variants={fadeUp}
                    viewport={{ once: true }}
                >
                    <h2 className="text-2xl 3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-xl font-bold text-[#2C6252] leading-snug">
                        Enjoy unbeatable deals every <br className="hidden lg:block" />
                        <Motion.span
                            className="text-[#FF4C15] font-normal inline-block"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            week at Flavors & Feast!
                        </Motion.span>
                    </h2>
                    <p className="text-[#2C6252] mt-2 font-medium text-sm">
                        – <span className=" font-semibold">Free Dessert</span> with any Main Course
                    </p>
                </Motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 3xl:gap-8 2xl:gap-8 xl:gap-8 lg:gap-6 items-start">

                    {/* Left - Image with Overlay Label */}
                    <Motion.div
                        className="relative"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                    >
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1750152925/Mask_Group_62_hvwc6j.png"
                            alt="Famous Chef"
                            className="w-full h-auto object-cover"
                        />

                        <Motion.div
                            className="absolute bottom-0 right-0 bg-[#FF4C15] text-white 3xl:px-[3.5rem] 3xl:py-[3.5rem] 2xl:px-[3.5rem] 2xl:py-[3.6rem] xl:px-[3.2rem] xl:py-[3.1rem] lg:px-[2.5rem] lg:py-[2rem] 3xl:text-xl 2xl:text-xl xl:text-xl lg:text-lg font-bold leading-snug"
                            initial={{ x: -150, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            viewport={{ once: true }}
                        >
                            World <br /> famous chef
                        </Motion.div>

                    </Motion.div>

                    {/* Right - 2x2 Service Grid */}
                    <div className="grid grid-cols-2 3xl:gap-14 2xl:gap-10 xl:gap-6 lg:gap-6 ml-8 mt-8">
                        {Array.from({ length: 4 }).map((_, index) => (
                            <Motion.div
                                key={index}
                                custom={index}
                                initial="hidden"
                                whileInView="visible"
                                variants={fadeUp}
                                viewport={{ once: true }}
                            >
                                <h3 className="text-[#2C6252] font-bold 3xl:text-base 2xl:text-base xl:text-sm lg:text-[12px] leading-snug">
                                    Outstanding <br />
                                    <span className="text-[#2C6252]">Customer Service</span>
                                </h3>
                                <p className="text-[#CCCCCC] 3xl:text-xs 2xl:text-xs xl:text-[10px] lg:text-[8px] 3xl:mt-5 2xl:mt-3 xl:mt-3 lg:mt-3 leading-relaxed">
                                    Our staff is dedicated to providing <br /> warm and attentive service, <br /> making sure that
                                </p>
                            </Motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Right Text Block */}
                <Motion.div
                    className="grid grid-cols-1 lg:grid-cols-2 3xl:-mt-[10.5rem] 2xl:-mt-[10.6rem] xl:-mt-[9.6rem] lg:-mt-[7.6rem] -ml-8"
                    initial="hidden"
                    whileInView="visible"
                    variants={slideRight}
                    viewport={{ once: true }}
                >
                    <div></div>
                    <div className="bg-[#F8F8F8] 3xl:text-sm 2xl:text-[12px] xl:text-[10px] lg:text-[8px] text-[#2C6252] 3xl:px-[3.3rem] 3xl:py-[2.8rem] 2xl:px-[3.3rem] 2xl:py-[2.9rem] xl:px-[2.4rem] xl:py-[2.8rem] lg:px-[3rem] lg:py-[2.2rem] 3xl:w-full 2xl:w-full xl:w-full lg:w-[25.3rem] leading-relaxed">
                        Thanks for the clarification — it sounds like you're asking for restaurant <br /> kitchen section names meant
                        for content purposes (<span className="text-[#FF4C15] font-medium">like a blog, video series, or social media</span>). Here's a set of catchy and
                        themed section <br /> name ideas that could help organize.
                    </div>
                </Motion.div>
            </div>
        </Container>
    );
};

export default Famous;
