import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";
import Container from "../../../components/Container";

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const Delights = () => {
  return (
    <Container>
      <div className="grid grid-cols-1 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 3xl:gap-4 2xl:gap-0 3xl:px-10 2xl:px-0 xl:px-6 lg:px-12 py-12 mt-20 3xl:ml-1 2xl:-ml-1 xl:ml-3 3xl:mb-44 2xl:mb-36 xl:mb-14 lg:mb-28 lg:-ml-20">

        {/* Top Left - Shrimp */}
        <Motion.div {...fadeInUp} className="flex flex-col bg-white overflow-hidden p-6">
          <Motion.img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146051/Mask_Group_51_pfs869.png"
            alt="Shrimp"
            className="w-full h-auto object-cover"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
          <div className="flex flex-col mt-16">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-medium text-[#2C6252]">
                Fresh and High- <span className="text-[#FF4C15]">Quality Ingredients</span>
              </h3>
              <div className="flex items-center space-x-1">
                <span className="text-[#FFE61C]">★★★★★</span>
                <span className="text-xs text-[#CCCCCC] whitespace-nowrap">(4.8 Rating)</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <p className="text-xs text-[#AAAAAA] w-2/3 pr-4">
                At Ocean’s Bounty, every dish tells a story of the sea — fresh,
                vibrant, and full of life. We believe great seafood should taste like a
                seaside escape, where the salt air kisses your skin and every bite
                feels like a wave of pure flavor.
              </p>
              <Link to="/order">
                <button className="bg-[#FF4C15] text-white px-3 py-2 hover:bg-orange-600 text-lg font-semibold -mt-4 whitespace-nowrap">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </Motion.div>

        {/* Top Right - Sushi */}
        <Motion.div {...fadeInUp} className="flex justify-center items-center mt-5 w-full">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146115/Mask_Group_54_uywl3m.png"
            alt="Sushi"
            className="3xl:w-full 2xl:w-[32rem] xl:w-[29rem] 3xl:h-[700px] 2xl:h-[650px] xl:h-[640px] lg:h-[600px] object-cover"
          />
        </Motion.div>

        {/* Middle Banner - Chef Cooking */}
        <Motion.div {...fadeInUp} className="relative overflow-hidden w-full h-[350px] 3xl:h-[700px] 2xl:h-[680px] xl:h-[680px] lg:h-auto 3xl:left-7 2xl:left-7 xl:left-6 lg:left-6 3xl:-top-4 2xl:-top-0">
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146155/Mask_Group_55_ndcfj6.png"
            alt="Chef Cooking"
            className="absolute inset-0 3xl:w-[39.2rem] 2xl:w-[33.1rem] xl:w-[27.5rem] lg:w-[22rem] h-auto object-cover object-center"
          />
          <Motion.div
            initial={{ x: 300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute top-0 3xl:right-12 2xl:right-12 3xl:w-[20rem] 2xl:w-[20rem] xl:w-[20rem] lg:w-[22rem] h-72 bg-[#FF4B16] bg-opacity-80 text-white p-8 flex flex-col justify-center"
          >
            <h2 className="text-7xl font-bold leading-none mt-4">50%</h2>
            <p className="text-2xl font-semibold leading-tight mt-2">Discount Offer</p>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              We source only the freshest and highest-quality ingredients to ensure every dish bursts with flavor.
            </p>
          </Motion.div>
        </Motion.div>

        {/* Bottom Right - Deep Blue Delights */}
        <Motion.div {...fadeInUp} className="relative overflow-hidden w-full lg:h-[485px] xl:h-[602px] 3xl:h-[700px] 2xl:h-[700px] bg-white p-6 flex 3xl:right-4 3xl:left-0 2xl:right-0 2xl:left-4">
          <div className="flex flex-col justify-end w-full lg:w-1/2 pr-4 z-10">
            <p className="text-sm text-[#EFEFEF] mb-4 max-w-xs">
              Experience the perfect <br /> blend of taste and joy—every <br /> bite is a moment of <br /> delight, crafted <br /> to satisfy your cravings!
            </p>
            <div className="flex items-center space-x-1 text-base text-gray-500 mb-4">
              <span className="text-yellow-500">★★★★★</span>
              <span className="text-sm text-[#CCCCCC] whitespace-nowrap">(4.8 Rating)</span>
            </div>
            <Link to="/order">
              <button className="bg-[#FF4C15] text-white px-3 py-2 hover:bg-orange-600 text-xl font-semibold w-full max-w-[150px]">
                Order Now
              </button>
            </Link>
          </div>

          <div className="flex flex-col items-center justify-center w-full lg:w-1/2 pl-4 z-10 text-left 3xl:-ml-24 2xl:-ml-32 xl:-ml-24 lg:-ml-20">
            <h2 className="lg:text-2xl 3xl:text-6xl 2xl:text-5xl xl:text-4xl font-bold 3xl:space-y-4 2xl:space-y-4 xl:space-y-2 lg:space-y-0 3xl:-mt-[25rem] 2xl:-mt-[22rem] xl:-mt-[20rem] lg:-mt-[16rem]">
              <div className="text-[#2C6252]">Deep</div>
              <div className="text-[#2C6252]">Blue</div>
              <div className="text-[#FF4C15]">Delights</div>
            </h2>
            <p className="3xl:text-sm 2xl:text-sm xl:text-sm lg:text-xs text-[#AAAAAA] mt-4 3xl:-ml-12 2xl:-ml-1 xl:ml-10 lg:ml-14 whitespace-nowrap">
              Savor the Secrets of the Sea
            </p>
          </div>

          <Motion.img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1748146220/pngegg_70_kfw3ly.png"
            alt="Fish Dish"
            className="absolute bottom-0 right-0 3xl:left-60 2xl:left-60 xl:left-60 lg:left-52 3xl:w-3/6 2xl:w-72 xl:w-3/6 lg:w-48 h-auto object-contain z-0 3xl:top-[22rem] 2xl:top-96 xl:top-80 lg:top-[16.5rem]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          />
        </Motion.div>
      </div>
    </Container>
  );
};

export default Delights;