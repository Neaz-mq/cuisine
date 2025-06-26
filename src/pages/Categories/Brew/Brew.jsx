import Container from "../../../components/Container";

const Brew = () => {
  return ( 
      <Container>
        <div className="3xl:px-16 2xl:px-6 xl:px-16 3xl:mb-72 2xl:mb-72 xl:mb-[24rem] 3xl:-mt-28">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
          {/* Left Section */}
          <div className="relative max-w-2xl w-full text-center lg:text-left">
            {/* Background Vertical Box */}
            <div className="absolute top-0 -left-2 w-40 h-[22rem] bg-gray-100 opacity-60 hidden lg:block"></div>

            {/* Text Content */}
            <div className="relative z-10 px-4 lg:px-0">
              <h2 className="3xl:text-[3rem] 2xl:text-[2.5rem] xl:text-[2.4rem] sm:text-6xl font-bold ">
                <span className="text-[#2C6252] block leading-snug tracking-wide">Classic</span>
                <span className="text-[#FF4C15] block mt-2 tracking-wide">Roast Brew</span>
              </h2>

              <p className="text-[#D7D7D7] mt-10 text-sm leading-relaxed absolute left-72 ">
                Enjoy unbeatable deals every week at Flavors & Feast! Whether
                you're craving a hearty meal, a sweet treat, or a refreshing coffee — our weekly offers have something for everyone.
              </p>

              <button className="mt-40 px-6 py-2 bg-[#FF4C15] text-white font-semibold absolute left-72">
                Claim Offer
              </button>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative top-28">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1750668908/pngegg_34_hj3lzk.png"
              alt="Roast Brew Dish"
              className="w-full h-auto object-cover "
            />
            {/* Optional large faded text */}
            <span className="hidden xl:block absolute -z-10 text-[10rem] font-bold text-gray-100 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 select-none pointer-events-none">
              Off
            </span>
          </div>
        </div>
        </div>
      </Container>
    
  );
};

export default Brew;


