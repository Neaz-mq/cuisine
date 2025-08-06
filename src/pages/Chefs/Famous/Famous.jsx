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
  hidden: { opacity: 0, x: 40 }, // was 80, reduced to prevent overflow
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Famous = () => {
  return (
    <Container>
      <section
        className="relative overflow-hidden 3xl:-mt-[44rem] 2xl:-mt-[50rem] xl:-mt-[58rem] lg:-mt-[71rem] md:-mt-[81rem] sm:-mt-[101rem] 3xl:px-[4.3rem] 2xl:px-[1.3rem] xl:px-[3.4rem] lg:px-[0.2rem] md:px-[0.8rem] sm:px-[0.8rem] mb-24 md:-ml-0 sm:-ml-36 3xl:-ml-0 2xl:-ml-0 xl:-ml-0 lg:-ml-0"
        aria-label="Weekly Deals and Chef Section"
      >
        {/* Headings */}
        <Motion.header
          className="mt-20 mb-12"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl 3xl:text-3xl 2xl:text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-sm font-bold text-[#2C6252] leading-snug">
            Enjoy unbeatable deals every <br className="hidden lg:block" />
            <Motion.span
              className="text-[#FF4C15] font-normal inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              week at Flavors &amp; Feast!
            </Motion.span>
          </h2>
          <p className="text-[#2C6252] mt-2 font-medium 3xl:text-sm 2xl:text-sm xl:text-sm lg:text-sm md:text-sm sm:text-xs">
            – <span className="font-semibold">Free Dessert</span> with any Main Course
          </p>
        </Motion.header>

        <div className="grid grid-cols-1 lg:grid-cols-2 3xl:gap-8 2xl:gap-8 xl:gap-8 lg:gap-6 md:gap-6 sm:gap-6 items-start">
          {/* Left Image */}
          <Motion.figure
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            role="img"
            aria-label="Famous Chef Image with Label"
          >
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1752058500/chef2_ivfy0a.webp"
              alt="Portrait of a world-famous chef"
              className="w-full h-auto object-cover"
            />
            <Motion.figcaption
              className="absolute bottom-0 right-0 bg-[#FF4C15] text-white 3xl:px-[3.5rem] 3xl:py-[3.5rem] 2xl:px-[3.5rem] 2xl:py-[3.6rem] xl:px-[3.2rem] xl:py-[3.1rem] lg:px-[2.5rem] lg:py-[2rem] md:px-[2.5rem] md:py-[2rem] sm:px-[2.5rem] sm:py-[2rem] 3xl:text-xl 2xl:text-xl xl:text-xl lg:text-lg md:text-xs sm:text-xs font-bold leading-snug"
              initial={{ x: -150, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              World <br /> famous chef
            </Motion.figcaption>
          </Motion.figure>

          {/* Right Grid Services */}
          <section
            className="grid grid-cols-2 3xl:gap-14 2xl:gap-10 xl:gap-6 lg:gap-6 md:gap-6 sm:gap-6 ml-8 mt-8"
            aria-label="Service Highlights"
          >
            {Array.from({ length: 4 }).map((_, index) => (
              <Motion.article
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={fadeUp}
                viewport={{ once: true }}
              >
                <h3 className="text-[#2C6252] font-bold 3xl:text-base 2xl:text-base xl:text-sm lg:text-[12px] md:text-[10px] sm:text-[8px] leading-snug">
                  Outstanding <br />
                  <span className="text-[#2C6252]">Customer Service</span>
                </h3>
                <p className="text-[#CCCCCC] 3xl:text-xs 2xl:text-xs xl:text-[10px] lg:text-[8px] md:text-[8px] sm:text-[8px] 3xl:mt-5 2xl:mt-3 xl:mt-3 lg:mt-3 md:mt-2 leading-relaxed">
                  Our staff is dedicated to providing <br /> warm and attentive service, <br /> making sure that
                </p>
              </Motion.article>
            ))}
          </section>
        </div>

        {/* Right Text Block */}
        <Motion.div
          className="grid grid-cols-1 lg:grid-cols-2 3xl:-mt-[10.5rem] 2xl:-mt-[10.6rem] xl:-mt-[9.6rem] lg:-mt-[7.6rem] md:mt-[1.8rem] sm:mt-[1.8rem] 3xl:-ml-8 2xl:-ml-7 xl:-ml-7 lg:-ml-5 md:-ml-0 sm:-ml-0"
          initial="hidden"
          whileInView="visible"
          variants={slideRight}
          viewport={{ once: true }}
          aria-label="Content Summary Section"
        >
          <div></div>
          <aside
            className="bg-[#F8F8F8] 3xl:text-sm 2xl:text-[12px] xl:text-[10px] lg:text-[8px] md:text-[8px] sm:text-[8px] text-[#2C6252] 3xl:px-[3.3rem] 3xl:py-[2.8rem] 2xl:px-[3.3rem] 2xl:py-[2.9rem] xl:px-[2.4rem] xl:py-[2.8rem] lg:px-[3rem] lg:py-[2.2rem] px-6 py-6 w-full leading-relaxed"
            role="complementary"
          >
            Thanks for the clarification — it sounds like you're asking for restaurant <br /> kitchen section names meant
            for content purposes (<span className="text-[#FF4C15] font-medium">like a blog, video series, or social media</span>). Here's a set of catchy and
            themed section.
          </aside>
        </Motion.div>
      </section>
    </Container>
  );
};

export default Famous;
