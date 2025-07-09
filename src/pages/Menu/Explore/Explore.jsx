import Container from "../../../components/Container";
import { motion as Motion } from "framer-motion";

const Explore = () => {
  return (
    <Container>
      <section
        className="relative bg-white 3xl:-top-4"
        aria-labelledby="explore-heading"
      >
        {/* Content and Image Container */}
        <div className="flex items-start justify-between 2xl:-ml-10 3xl:-ml-0 xl:-ml-0 lg:-ml-16">
          {/* Left Side Content */}
          <Motion.div
            className="relative w-1/2 p-8 z-0"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            viewport={{ once: true }}
          >
            <img
              className="absolute left-[-20px] right-10 -top-10 opacity-60 blur-sm"
              src="/Ellipse 9.svg"
              alt=""
              role="presentation"
              aria-hidden="true"
            />

            <div className="ml-4">
              <Motion.h1
                id="explore-heading"
                className="3xl:text-6xl 2xl:text-4xl xl:text-3xl lg:text-2xl font-bold text-[#2C6252] flex flex-col items-start -mt-3"
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <span className="3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-2">Explore Our</span>
                <span className="3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-2">Full Menu of</span>
                <span className="3xl:mb-4 2xl:mb-4 xl:mb-3 lg:mb-2">Signature</span>
                <span>Dishes</span>
              </Motion.h1>
            </div>

            <Motion.div
              className="-mt-6"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut", delay: 0.3 }}
              viewport={{ once: true }}
            >
              <p
                className="mb-8 3xl:text-[20px] 2xl:text-[16px] xl:text-[14px] lg:text-[12px] 3xl:ml-2 2xl:ml-2 xl:ml-1 lg:ml-1 p-4 bg-cover bg-center 3xl:w-[650px] 2xl:w-[650px] xl:w-[500px] lg:w-[480px] 3xl:h-[250px] 2xl:h-[250px] xl:h-[250px] lg:h-[200px] flex flex-col justify-center"
                style={{
                  backgroundImage:
                    "url('https://res.cloudinary.com/dxohwanal/image/upload/v1742627149/Tasty_uw9ilh.png')",
                }}
              >
                <span className="inline-flex">
                  <span className="text-[#FF4C15] whitespace-nowrap">
                    Experience the perfect blend of taste and joy—
                  </span>
                  <span className="text-[#AAAAAA] ml-2 whitespace-nowrap">
                    every bite is a
                  </span>
                </span>
                <span className="text-[#AAAAAA] block mt-2">
                  moment of delight, crafted to satisfy your cravings!
                </span>
              </p>
            </Motion.div>
          </Motion.div>

          {/* Right Side Background Image */}
          <Motion.figure
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1752054404/menu1_nkbnfg.webp"
              alt="Delicious full menu dishes display banner"
              className="w-full max-w-[800px] object-contain 3xl:-mt-10 2xl:-mt-8 xl:-mt-6 lg:-mt-6 3xl:-ml-20 2xl:-ml-20 xl:-ml-20"
            />
            <figcaption className="sr-only">
              Image showcasing a variety of signature dishes available on our menu.
            </figcaption>
          </Motion.figure>
        </div>
      </section>
    </Container>
  );
};

export default Explore;
