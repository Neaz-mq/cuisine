import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import { motion as Motion } from "framer-motion";

const Brew = () => {
  return (
    <Container>
      <section
        className="3xl:px-16 2xl:px-6 xl:px-16 lg:px-2 3xl:mb-72 2xl:mb-72 xl:mb-[24rem] lg:mb-[22rem] 3xl:-mt-28 2xl:-mt-10 xl:mt-24 overflow-hidden"
        aria-labelledby="brew-heading"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative">
          {/* Left Section */}
          <div className="relative max-w-2xl w-full text-center lg:text-left">
            <div className="absolute top-0 -left-2 w-40 h-[22rem] bg-gray-100 opacity-60 hidden lg:block"></div>

            {/* Text Content */}
            <header className="relative z-10 px-4 lg:px-0">
              <Motion.h2
                id="brew-heading"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="3xl:text-[3rem] 2xl:text-[2.5rem] xl:text-[2.4rem] lg:text-[2.4rem] sm:text-6xl font-bold"
              >
                <span className="text-[#2C6252] block leading-snug tracking-wide">
                  Classic
                </span>
                <span className="text-[#FF4C15] block mt-2 tracking-wide">
                  Roast Brew
                </span>
              </Motion.h2>

              <Motion.p
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-[#D7D7D7] 3xl:mt-10 2xl:mt-10 xl:mt-10 lg:mt-4 text-sm leading-relaxed absolute left-72"
              >
                Enjoy unbeatable deals every week at Flavors & Feast! Whether
                you're craving a hearty meal, a sweet treat, or a refreshing coffee — our weekly offers have something for everyone.
              </Motion.p>

              <Link to="/carts" aria-label="Claim weekly offer for Roast Brew">
                <Motion.button
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  className="3xl:mt-40 2xl:mt-40 xl:mt-40 lg:mt-52 px-6 py-2 bg-[#FF4C15] text-white font-semibold absolute left-72"
                >
                  Claim Offer
                </Motion.button>
              </Link>
            </header>
          </div>

          {/* Right Image Section */}
          <Motion.figure
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative top-28"
          >
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1750668908/pngegg_34_hj3lzk.png"
              alt="Roast Brew Dish with weekly offer"
              className="w-full h-auto object-cover"
            />
            <Motion.figcaption
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              className="hidden xl:block absolute -z-10 text-[10rem] font-bold text-gray-100 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 select-none pointer-events-none"
              aria-hidden="true"
            >
              Off
            </Motion.figcaption>
          </Motion.figure>
        </div>
      </section>
    </Container>
  );
};

export default Brew;
