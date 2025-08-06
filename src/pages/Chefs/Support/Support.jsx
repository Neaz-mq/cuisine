import { motion as Motion } from "framer-motion";
import Container from "../../../components/Container";

const Support = () => {
  return (
    <Container>
      <section
        className="3xl:px-[2.2rem] 2xl:px-0 xl:px-10 lg:px-0 sm:px-0 md:px-0 3xl:mt-52 2xl:mt-44 xl:mt-40 lg:mt-40 md:mt-36 sm:mt-8 lg:-ml-3 3xl:-ml-0 2xl:-ml-0 xl:-ml-0 md:-ml-0 sm:-ml-36 overflow-hidden"
        aria-label="Customer Support Section"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 3xl:gap-6 2xl:gap-6 xl:gap-6 lg:gap-2 md:gap-2 sm:gap-2 p-4 3xl:p-8 2xl:p-6 xl:p-4 lg:p-4 ">
           <Motion.figure
            className="lg:col-span-1 flex justify-center items-center 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:block sm:block mb-10"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            role="img"
            aria-label="Chef Image"
          >
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1752058752/chef3_xhva7c.webp"
              alt="Chef holding a dish smiling"
              className="w-full h-auto"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x800/A0A0A0/FFFFFF?text=Image+Error";
              }}
            />
          </Motion.figure>
          
          {/* Left Content Area */}
          <div className="lg:col-span-2 flex flex-col space-y-6">
            <div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              aria-label="Support Cards"
            >
              {/* Card 1 */}
              <Motion.article
                className="bg-[#F8F8F8] p-8 flex flex-col items-start text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 bg-white 3xl:p-3 2xl:p-3 xl:p-0 lg:p-0 md:p-0 sm:p-0 flex items-end justify-end w-full">
                  <img src="/call.svg" alt="Phone support icon" />
                </div>
                <h3 className="text-xl 3xl:text-2xl 2xl:text-2xl xl:text-lg lg:text-lg md:text-base sm:text-base font-bold text-[#3F7765] mb-2 mt-2">
                  Outstanding Customer Service
                </h3>
                <p className="3xl:text-xs 2xl:text-xs xl:text-[10px] lg:text-[10px] md:text-xs sm:text-xs text-[#CCCCCC] mt-2">
                  Our staff is dedicated to providing warm and attentive service,
                  making sure that every interaction is pleasant and helpful.
                </p>
              </Motion.article>

              {/* Card 2 */}
              <Motion.article
                className="bg-[#FFFAF8] p-8 flex flex-col items-start text-left"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-4 bg-white 3xl:p-3 2xl:p-3 xl:p-0 lg:p-0 flex items-end justify-end w-full">
                  <img src="/call.svg" alt="Customer service icon" />
                </div>
                <h3 className="text-xl 3xl:text-2xl 2xl:text-2xl xl:text-lg lg:text-lg md:text-base sm:text-base font-bold text-[#3F7765] mb-2 mt-2">
                  Outstanding Customer Service
                </h3>
                <p className="3xl:text-xs 2xl:text-xs xl:text-[10px] lg:text-[10px] md:text-xs sm:text-xs text-[#CCCCCC] mt-2">
                  Our staff is dedicated to providing warm and attentive service,
                  making sure that every interaction is pleasant and helpful.
                </p>
              </Motion.article>
            </div>

            {/* Bottom Banner */}
            <Motion.aside
              className="bg-[#2D6A5E] p-6 3xl:p-10 2xl:p-10 xl:p-6 lg:p-6 text-left text-white mt-6"
              role="complementary"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: true }}
              aria-label="Support Summary"
            >
              <h2 className="text-3xl 3xl:text-4xl 2xl:text-3xl xl:text-xl lg:text-xl md:text-lg sm:text-lg font-bold 3xl:mb-3 2xl:mb-3 xl:mb-3 lg:mb-3 md:mb-0">
                Enjoy unbeatable
              </h2>
              <h2 className="text-3xl 3xl:text-4xl 2xl:text-3xl xl:text-xl lg:text-xl md:text-lg sm:text-lg font-bold mb-4">
                deals every
              </h2>
              <p className="text-base 3xl:text-sm 2xl:text-sm xl:text-[12px] lg:text-[12px] md:text-[12px] sm:text-[12px] opacity-90 mt-6">
                Thanks for the clarification — it sounds like you're asking for restaurant <br />
                kitchen section names meant for content purposes
              </p>
            </Motion.aside>
          </div>

          {/* Right Image */}
          <Motion.figure
            className="lg:col-span-1 flex justify-center items-center 3xl:block 2xl:block xl:block lg:block md:hidden sm:hidden"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            viewport={{ once: true }}
            role="img"
            aria-label="Chef Image"
          >
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1752058752/chef3_xhva7c.webp"
              alt="Chef holding a dish smiling"
              className="3xl:w-full 2xl:w-full xl:w-full lg:w-64 h-full object-cover 3xl:max-h-[565px] 2xl:max-h-[565px] xl:max-h-[565px] lg:max-h-[565px] "
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://placehold.co/600x800/A0A0A0/FFFFFF?text=Image+Error";
              }}
            />
          </Motion.figure>
        </div>
      </section>
    </Container>
  );
};

export default Support;
