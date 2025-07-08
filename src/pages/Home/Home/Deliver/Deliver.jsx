import { Link } from "react-router-dom";
import Container from "../../../../components/Container";
import { motion as Motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Deliver = () => {
  return (
    <Container>
      <div className="relative bg-white px-8 3xl:px-3 2xl:px-2 xl:px-2 lg:px-2 3xl:mt-32 2xl:mt-56 xl:mt-44 lg:mt-32 mb-44">
        <div className="grid grid-cols-1 3xl:grid-cols-2 2xl:grid-cols-2 xl:grid-cols-2 lg:grid-cols-2 gap-8 items-center">
          {/* Left Animated Text Content */}
          <Motion.div
            className="space-y-6 3xl:ml-14 2xl:ml-4 xl:ml-12 lg:-ml-5 3xl:-mt-4 2xl:-mt-6 xl:-mt-10 lg:-mt-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Motion.h2
              className="text-4xl 3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl text-[#33856D] flex flex-col xl:mt-4 2xl:mt-0 3xl:mt-0"
              custom={0}
              variants={textVariants}
            >
              <span className="mb-3">We Deliver</span>
              <span className="mb-3">Food Within</span>
              <span className="text-[#FF4C15] mb-3">30 Min ⏰</span>
            </Motion.h2>

            <Motion.p
              className="text-[#CCCCCC] max-w-md 3xl:text-[14px] 2xl:text-[13px] xl:text-[13px] lg:text-[9px] mt-2 2xl:pt-3 3xl:pt-0 3xl:pb-5 2xl:pb-5 xl:pb-5 lg:pb-0"
              custom={1}
              variants={textVariants}
            >
              When I research companies online, I don’t just want to hear the company’s pitch; I want to hear from its customers...
            </Motion.p>

            <Motion.div className="flex space-x-4 mt-20" custom={2} variants={textVariants}>
              <Link to="/order">
                <Motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#FF4C15] text-white 3xl:px-6 3xl:py-3 2xl:px-4 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-2 flex items-center 3xl:text-[17px] 2xl:text-[17px] xl:text-[17px] lg:text-[10px] whitespace-nowrap mt-2"
                >
                  <img src="/order.svg" alt="Order Icon" className="w-4 h-4 mr-2" />
                  Order Now
                </Motion.button>
              </Link>
              <Motion.button
                whileHover={{ scale: 1.05 }}
                className="border border-[#707070] text-[#FF4C15] hover:bg-orange-50 3xl:px-6 3xl:py-3 2xl:px-4 2xl:py-2 xl:px-4 xl:py-2 lg:px-2 lg:py-0 flex items-center 3xl:text-[17px] 2xl:text-[17px] xl:text-[17px] lg:text-[10px] whitespace-nowrap mt-2"
              >
                <img src="/download.svg" alt="Download Icon" className="w-4 h-4 mr-2" />
                Download Apps
              </Motion.button>
            </Motion.div>
          </Motion.div>

          {/* Right Image Float Animation */}
          <div
            className="flex justify-end relative 3xl:-left-4 2xl:-left-2 xl:-left-6 lg:left-2"
            style={{
              backgroundImage: `url('https://res.cloudinary.com/dxohwanal/image/upload/v1747286119/Group_532_yxgunv.png')`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          >
            <Motion.div
              className="3xl:-ml-44 3xl:-mt-52 2xl:-ml-56 2xl:-mt-48 xl:-ml-56 xl:-mt-48 lg:-ml-60 lg:-mt-48"
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1747282614/young-smiling-courier-guy-red-uniform-sitting-scooter-holding-paper-bag-saying-hello-white-wall_haw6vn.png"
                alt="Delivery Guy"
                className="object-contain h-auto w-full 3xl:-ml-32 2xl:-ml-8 xl:-ml-4 lg:ml-4"
              />
            </Motion.div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Deliver;
