import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import { motion as Motion } from "framer-motion";
import { useState, useEffect } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const Picks = () => {
  const discounts = ["30%", "10%", "36%", "45%"];
  const images = [
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752128290/offer19_xobxvx.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752128529/offer21_u9mern.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752128419/offer20_gpdke3.webp",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1752128742/offer22_oaxxn4.webp",
  ];

  const [visibleCount, setVisibleCount] = useState(4);

  // Responsive check
  useEffect(() => {
    const updateCount = () => {
      setVisibleCount(window.innerWidth < 640 ? 2 : 4);
    };
    updateCount();
    window.addEventListener("resize", updateCount);
    return () => window.removeEventListener("resize", updateCount);
  }, []);

  // Kitchen open logic (10am–10pm example)
  const isKitchenOpen = () => {
    const hour = new Date().getHours();
    return hour >= 10 && hour < 22;
  };

  return (
    <Container>
      {/* Main Section */}
      <section
        aria-labelledby="picks-heading"
        className="3xl:px-12 3xl:ml-7 3xl:mt-40 3xl:mb-52 2xl:px-0 2xl:ml-6 2xl:-mt-2 2xl:mb-44 xl:px-6 xl:ml-4 xl:-mt-2 xl:mb-36 lg:px-2 lg:-ml-5 lg:-mt-2 lg:mb-40 md:px-2 md:-ml-12 md:-mt-2 md:mb-32  sm:px-2 sm:-ml-[8rem] sm:-mt-[5rem] sm:mb-28 overflow-hidden sm:w-[14rem] 3xl:w-full 2xl:w-full xl:w-full lg:w-full md:w-full"
      >
        <Motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {/* Top Section Grid */}
          <div className="grid grid-cols-1 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 3xl:gap-12 2xl:gap-12 xl:gap-10 lg:gap-12 md:gap-4 gap-8 3xl:mb-24 2xl:mb-24 xl:mb-24 lg:mb-16 md:mb-16 sm:mb-16 ">
            {/* Left Hero Card */}
            <Motion.article
              className="bg-[#FFFAF8] p-6 3xl:p-16 2xl:p-16 xl:p-8 lg:p-10 md:p-8 sm:p-10 xl:ml-3 3xl:ml-0 2xl:ml-0 lg:ml-0 md:ml-0 sm:ml-0  "
              variants={fadeUp}
              custom={1}
              aria-label="Chef's Weekly Picks promotion"
            >
              <h2
                id="picks-heading"
                className="text-3xl 3xl:text-5xl 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl sm:text-lg font-semibold text-[#2C6252] 3xl:mb-4 2xl:mb-4 xl:mb-4 lg:mb-4 md:mb-6 sm:mb-6"
              >
                Chef's Weekly Picks <br />
                <span className="text-[#FF4C15] font-normal ">- Just for You!</span>
              </h2>
              <p className="3xl:text-sm 2xl:text-sm xl:text-[11px] lg:text-[9px] md:text-[10px] sm:text-[9px] text-[#2C6252] 3xl:mb-6 2xl:mb-6 xl:mb-6 lg:mb-6 md:mb-6 sm:mb-6 md:mt-6 3xl:mt-0 2xl:mt-0 xl:mt-0 lg:mt-0">
                Management reserves the right to modify or cancel the <br />
                offer without prior notice.
              </p>
              {/* Kitchen-aware Order Now button */}
             <div className="relative inline-block group">
  {isKitchenOpen() ? (
    <Link to="/menu" aria-label="Order now from menu">
      <button className="bg-[#FF4C15] text-white font-semibold py-2 px-6">
        Order Now &gt;
      </button>
    </Link>
  ) : (
    <button
      className="bg-gray-400 text-gray-200 font-semibold py-2 px-6 cursor-not-allowed"
      aria-label="Ordering unavailable: kitchen is closed"
      disabled
    >
      Unavailable
    </button>
  )}

  {!isKitchenOpen() && (
    <div className="absolute top-full left-0 mt-2 px-3 py-1 bg-black text-white text-center text-[10px] sm:text-xs rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-normal w-max max-w-[160px]">
      Kitchen will open at 10 AM
    </div>
  )}
</div>


              <div className="flex justify-end 3xl:-mt-[6.8rem] ml-44 2xl:-mt-[3.2rem] xl:-mt-[1.3rem] lg:-mt-[1rem] md:mt-[6rem] sm:-mt-[1rem]">
                <Motion.img
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  src="https://res.cloudinary.com/dxohwanal/image/upload/v1752127492/offer16_mnskf5.webp"
                  alt="Plate with chicken nuggets and fries"
                  className="rounded-lg  w-full max-w-lg   object-cover md:hidden sm:hidden 3xl:block 2xl:block xl:block lg:block"
                  draggable={false}
                />
              </div>
            </Motion.article>

            {/* Right Cards Section */}
            <div className="space-y-8" role="list" aria-label="Promotional cards">
              <Motion.article
                className="bg-[#F8F8F8] p-6 md:p-8 flex items-center xl:mr-4 3xl:mr-0 2xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0"
                variants={fadeUp}
                custom={2}
                role="listitem"
                aria-label="Unbeatable deals promotional card"
              >
                <div className="w-1/3 pr-4">
                  <img
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1752127749/offer17_z4vxy7.webp"
                    alt="Grilled meat on plate"
                    className="rounded-lg w-full object-cover"
                    draggable={false}
                  />
                </div>
                <div className="w-2/3">
                  <h3 className="3xl:text-2xl 2xl:text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-lg font-semibold text-[#2C6252] mb-2">
                    Enjoy unbeatable <br /> deals with us
                  </h3>
                  <p className="3xl:text-sm 2xl:text-sm xl:text-[10px] lg:text-[9px] md:text-[9px] sm:text-[9px] text-[#BCB1AD]">
                    Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee—our weekly offers have.
                  </p>
                </div>
              </Motion.article>

              <Motion.article
                className="bg-[#2C6252] p-6 md:p-8 text-white flex items-center xl:mr-4 3xl:mr-0 2xl:mr-0 lg:mr-0 md:mr-0 sm:mr-0"
                variants={fadeUp}
                custom={3}
                role="listitem"
                aria-label="This week's delights promotional card"
              >
                <div className="w-2/3 pr-4">
                  <h3 className="3xl:text-2xl 2xl:text-2xl xl:text-xl lg:text-[16px] md:text-[16px] sm:text-[16px] font-semibold mb-2">
                    Don't Miss This Week's <br /> Delights
                  </h3>
                  <p className="3xl:text-sm 2xl:text-sm xl:text-[10px] lg:text-[9px] md:text-[10px] sm:text-[10px] mb-4 text-[#BCB1AD]">
                    Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee
                  </p>
                  <a
                    href="#"
                    className="3xl:text-sm 2xl:text-sm xl:text-sm lg:text-sm text-white underline hover:no-underline"
                    aria-label="Learn more about this week's delights"
                  >
                    learn more
                  </a>
                </div>
                <div className="w-1/3 flex justify-end">
                  <Motion.img
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    src="https://res.cloudinary.com/dxohwanal/image/upload/v1752127873/offer18_bdlnxr.webp"
                    alt="Delicious pizza"
                    className="w-full object-cover relative top-12 left-6"
                    draggable={false}
                  />
                </div>
              </Motion.article>
            </div>
          </div>

          {/* Text Section */}
          <Motion.section
            className="py-8 md:py-12"
            variants={fadeUp}
            custom={4}
            aria-label="Additional offers and promotions"
          >
            <div className="flex flex-col md:flex-row md:items-start md:space-x-8 mb-6">
              <div className="flex items-center flex-shrink-0 mb-4 md:mb-0 md:w-1/3">
                <h2 className="3xl:text-3xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-base sm:text-sm font-semibold text-[#2C6252] whitespace-nowrap">
                  Chef's Weekly Picks{" "}
                </h2>
                <div className="flex-grow border-b border-[#D4D4D4] ml-10 hidden md:block"></div>
              </div>
              <div className="md:w-2/3 3xl:-mt-3 2xl:-mt-3 xl:-mt-3 lg:-mt-3 md:-mt-0">
                <p className="3xl:text-sm 2xl:text-sm xl:text-sm lg:text-[10px] md:text-[12px] sm:text-[12px] text-[#BCB1AD] leading-relaxed mb-4 3xl:ml-[13.5rem] 2xl:ml-[11.2rem] xl:ml-[10rem] lg:ml-[8.2rem]">
                  Cheesy Bites Pizza Return: Pizza Hut has reintroduced its popular Cheesy Bites Pizza for a limited time. This large, one-topping pizza features a crust made of 28 pull-apart, cheese-filled bites, perfect for dipping 50% Off Online Orders.
                </p>
                <p className="3xl:text-sm 2xl:text-sm xl:text-sm lg:text-[10px] md:text-[12px] sm:text-[10px] text-[#FF4C15] leading-relaxed 3xl:ml-[13.5rem] 2xl:ml-[11.2rem] xl:ml-[10rem] lg:ml-[8.3rem]">
                  Domino's is offering 50% off all menu-priced pizzas ordered online from March 17 to 23, 2025. Customers can choose from any size pizza with any type.{" "}
                  <a href="#" className="text-[#FF4C15] underline hover:no-underline" aria-label="Learn more about Domino's pizza offer">
                    Learn more.
                  </a>
                </p>
              </div>
            </div>

            {/* Product Grid */}
            <Motion.div
              className="grid grid-cols-1 md:grid-cols-2 3xl:grid-cols-4 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 gap-6 mt-24"
              variants={staggerContainer}
              role="list"
              aria-label="Discounted product picks"
            >
              {Array.from({ length: visibleCount }).map((_, i) => {
                const discount = discounts[i];
                const isGreen = discount === "30%" || discount === "36%";
                const badgeColor = isGreen ? "#2B6050" : "#FF4C15";

                return (
                  <Motion.article
                    key={i}
                    className="relative bg-[#E9EFED] overflow-hidden p-4"
                    variants={fadeUp}
                    custom={i + 5}
                    role="listitem"
                    aria-label={`Product pick with ${discount} discount`}
                  >
                    <div className="p-4">
                      <p className="font-semibold text-[#FF4C15] 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-[15px] md:text-[15px] sm:text-[13px]">
                        Cheesy
                      </p>
                      <p className="font-semibold text-[#FF4C15] 3xl:text-lg 2xl:text-lg xl:text-lg lg:text-[15px] md:text-[15px] sm:text-[13px]">
                        Crust Deluxe
                      </p>
                      <p className="mt-6 3xl:text-xs 2xl:text-xs xl:text-xs text-[#2D6252] lg:text-xs md:text-xs sm:text-[10px]">
                        Our menu is carefully crafted by expert chefs only
                      </p>
                    </div>
                    <div className="p-4">
                      <p className="3xl:text-xl 2xl:text-xl xl:text-xl lg:text-[13px] md:text-[13px] sm:text-[13px] font-semibold text-white -mt-4">
                        Crispy Garden Glory
                      </p>
                      <p className="3xl:text-2xl 2xl:text-2xl xl:text-2xl lg:text-xl md:text-xl sm:text-xl font-bold text-gray-900 mt-3">
                        - $10.99
                      </p>
                    </div>
                    <img
                      src={images[i]}
                      alt={`Food item ${i + 1}`}
                      className={`w-full object-cover mt-6 ${i === 2 ? " 3xl:mt-20 2xl:mt-20 xl:mt-16 lg:mt-16 md:mt-20 sm:mt-10" : ""
                        }`}
                      draggable={false}
                    />
                    <div
                      className="absolute right-6 3xl:top-80 2xl:top-80 xl:top-80 lg:top-72 md:top-72 sm:top-64 text-white rounded-full 3xl:w-20 3xl:h-20 2xl:w-16 2xl:h-16 xl:w-16 xl:h-16 lg:w-14 lg:h-14 md:w-14 md:h-14 sm:w-14  sm:h-14 flex flex-col items-center justify-center"
                      style={{ backgroundColor: badgeColor }}
                    >
                      <span className="3xl:text-lg 2xl:text-lg xl:text-[12px] lg:text-[10px] md:text-[10px] sm:text-[10px] font-bold leading-tight">
                        {discount}
                      </span>
                      <span className="3xl:text-lg 2xl:text-lg xl:text-[12px] lg:text-[10px] md:text-[10px] sm:text-[10px] font-medium">
                        off
                      </span>
                    </div>
                  </Motion.article>
                );
              })}
            </Motion.div>
          </Motion.section>
        </Motion.div>
      </section>
    </Container>
  );
};

export default Picks;
