import { Link } from "react-router-dom";
import Container from "../../../../components/Container";
import { motion as Motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3, duration: 0.7, ease: "easeOut" },
  }),
};

const Roast = () => {
  return (
    <Container>
      <div className="3xl:px-12 3xl:ml-7 3xl:mb-24 2xl:px-1 2xl:ml-7 2xl:mb-24 xl:px-6 xl:ml-7 xl:mb-24 lg:px-1 lg:-ml-3 lg:mb-24 ">
        {/* Header Section */}
        <Motion.div
          className="bg-[#2C6252] text-white relative overflow-hidden p-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 3xl:px-10 2xl:px-10 xl:px-10 lg:px-10 flex flex-col md:flex-row items-center md:items-start justify-between">
            {/* Left Content */}
            <Motion.div
              className="md:w-1/2 z-10 text-center md:text-left mb-8 md:mb-0"
              variants={fadeUp}
              custom={1}
            >
              <h1 className="text-3xl 3xl:text-4xl 2xl:text-4xl xl:text-3xl lg:text-3xl font-bold  mb-4 mt-12">
                Classic <br /> Roast Brew
              </h1>
              <p className="text-xs mb-8 max-w-md mx-auto md:mx-0 mt-6">
                Management reserves the right to modify or cancel the offer without prior notice.
              </p>
              <Link to="/menu">
                <button className="bg-[#FF4C15]  text-white font-semibold py-2 px-6">
                  Order Now &gt;
                </button>
              </Link>
            </Motion.div>

            {/* Right Image */}
            <Motion.div
              className="flex justify-center md:justify-end w-full"
              variants={fadeUp}
              custom={2}
            >
              <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1750073781/Mask_Group_49_lumoct.png"
                alt="Classic Roast Brew"
                className="translate-x-24 translate-y-10 md:translate-x-20 3xl:-mt-16 2xl:-mt-8 xl:mt-4 lg:mt-16"
              />
            </Motion.div>
          </div>
        </Motion.div>

        {/* Enjoy Unbeatable Deals Section */}
        <Motion.div
          className="max-w-xl mx-auto px-4 sm:px-6 3xl:px-10 2xl:px-10 xl:px-10 lg:px-20 -mt-10 md:-mt-16 relative z-20 left-28"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="bg-white p-12  text-center md:text-left max-w-xl shadow-lg mx-auto relative 3xl:left-64 2xl:left-36 xl:left-24 lg:left-10">
            <h2 className="3xl:text-3xl 2xl:text-2xl xl:text-2xl lg:text-xl font-bold text-[#2C6252] mb-4 leading-normal">
              Enjoy unbeatable <br /> deals with us
            </h2>
            <p className="text-[#BCB1AD] 3xl:text-sm 2xl:text-sm xl:text-sm lg:text-[10px]">
              Whether you're craving a hearty meal, a sweet treat, or a refreshing coffee—our weekly offers have.
            </p>
          </div>
        </Motion.div>

        {/* Features Section */}
        <Motion.div
          className="3xl:px-4 2xl:px-0 xl:px-0 lg:px-4 sm:px-6 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 3xl:gap-72 2xl:gap-44 xl:gap-36 lg:gap-28 text-center mt-20 whitespace-nowrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
        >
          {[
            { icon: "🚚", title: "Speedy Delivery" },
            { icon: "📞", title: "24/7 Customer Support" },
            { icon: "🛒", title: "One-Stop Shop" },
            { icon: "❤️", title: "Crafted with Care" },
          ].map((feature, i) => (
            <Motion.div
              key={i}
              className="flex flex-col items-center p-4"
              variants={fadeUp}
              custom={i + 1}
            >
              <div className="3xl:text-5xl 2xl:text-5xl xl:text-5xl lg:text-3xl text-gray-700 mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold 3xl:text-xl 2xl:text-xl xl:text-xl lg:text-lg">
                {feature.title}
              </h3>
              <p className="text-[10px] text-[#CCCCCC] mt-4">
                Our menu is carefully crafted <br /> by expert chefs
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </Container>
  );
};

export default Roast;
