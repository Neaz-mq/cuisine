import Container from "../../../components/Container";

const Explore = () => {
    return (
        <Container>
            <div className="relative bg-white 3xl:-top-4">
                {/* Content and Image Container */}
                <div className="flex items-start justify-between 6 2xl:-ml-10 3xl:-ml-0 xl:-ml-0 lg:-ml-8">
                    {/* Left Side Content */}
                    <div className="relative w-1/2 p-8 z-0">
                        <img className='absolute left-[-20px] right-10 -top-10 opacity-60 blur-sm' src="/Ellipse 9.svg" alt="" />
                        <div className="ml-4">
                            <h1 className="3xl:text-6xl 2xl:text-4xl xl:text-3xl lg:text-2xl font-bold text-[#2C6252] flex flex-col items-start -mt-3">
                                <span className="3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-2">Explore Our</span>
                                <span className="3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-2">Full Menu of</span>
                                <span className="3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-2">Signature</span>
                                <span>Dishes</span>
                            </h1>
                        </div>

                        <div className='-mt-6'>
                            <p className="mb-8 3xl:text-[20px] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] 3xl:ml-2 2xl:ml-2 xl:ml-1 lg:ml-1 p-4 bg-cover bg-center 3xl:w-[650px] 2xl:w-[650px] xl:w-[500px] lg:w-[480px] 3xl:h-[250px] 2xl:h-[250px] xl:h-[250px] lg:h-[200px] flex flex-col justify-center" style={{ backgroundImage: "url('https://res.cloudinary.com/dxohwanal/image/upload/v1742627149/Tasty_uw9ilh.png')" }}>
                                <span className="inline-flex">
                                    <span className="text-[#FF4C15] whitespace-nowrap">Experience the perfect blend of taste and joy—</span>
                                    <span className="text-[#AAAAAA] ml-2 whitespace-nowrap">every bite is a</span>
                                </span>
                                <span className="text-[#AAAAAA] block mt-2">moment of delight, crafted to satisfy your cravings!</span>
                            </p>
                        </div>
                    </div>

                    {/* Right Side Background Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src="https://res.cloudinary.com/dxohwanal/image/upload/v1747817792/pngegg_-_2025-05-10T174947.812_r4zzrj.png"
                            alt="Banner"
                            className="w-full max-w-[800px] object-contain 3xl:-mt-10 2xl:-mt-8 xl:-mt-6 lg:-mt-6 3xl:-ml-20 2xl:-ml-20 xl:-ml-20"
                        />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Explore;