import { Link } from "react-router-dom";
import Container from "../../../components/Container";
import { motion as Motion } from "framer-motion";

const textContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.8,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 350, damping: 18 },
  },
};

const Spend = () => {
  const headerText1 = "If you spend ";
  const headerText2 = "special time";

  return (
    <Container>
      <section
        className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 3xl:gap-16 2xl:gap-16 xl:gap-16 lg:gap-16 3xl:py-16 2xl:py-16 xl:py-16 lg:py-4 mb-28"
        aria-labelledby="spend-heading"
      >
        {/* Left: Image Section */}
        <Motion.div
          className="w-full flex justify-center 3xl:-ml-14 2xl:-ml-20 xl:-ml-10 lg:-ml-20 2xl:mt-8 3xl:mt-0 xl:mt-4 lg:mt-8"
          initial={{ opacity: 0, rotateY: 45, scale: 0.85 }}
          whileInView={{ opacity: 1, rotateY: 0, scale: 1 }}
          transition={{ duration: 1.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          viewport={{ once: true }}
          style={{ perspective: 900 }}
        >
          <img
            src="https://res.cloudinary.com/dxohwanal/image/upload/v1752120958/table1_jf0nwc.webp"
            alt="Couple enjoying quality dining time at Flavors & Feast"
            className="w-[90%] max-w-md lg:max-w-full h-auto"
          />
        </Motion.div>

        {/* Right: Text Section */}
        <Motion.div
          className="w-full text-center lg:text-left 3xl:mt-4 2xl:mt-10 xl:mt-10 lg:mt-10 3xl:ml-36 2xl:ml-20 xl:ml-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textContainer}
        >
          <header>
            <h2
              id="spend-heading"
              className="text-4xl 3xl:text-6xl 2xl:text-6xl xl:text-5xl lg:text-4xl font-bold text-[#2C6252] leading-relaxed mb-4"
            >
              {[...headerText1].map((char, index) => (
                <Motion.span
                  key={`char1-${index}`}
                  variants={letter}
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </Motion.span>
              ))}
              <br />
              <span className="text-[#2C6252] leading-relaxed">
                {[...headerText2].map((char, index) => (
                  <Motion.span
                    key={`char2-${index}`}
                    variants={letter}
                    style={{ display: "inline-block" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </Motion.span>
                ))}
              </span>
            </h2>
          </header>

          <p className="text-[#D7D7D7] text-sm 3xl:text-base 2xl:text-base xl:text-sm lg:text-xs mt-4 max-w-md">
            Discover unforgettable moments at Flavors & Feast — where every bite brings joy. Whether it’s a romantic evening, a friends' hangout, or a cozy weekend brunch, we’ve got unbeatable food deals just for you.
          </p>

          <Link to="/order" aria-label="Go to menu page">
            <Motion.button
              className="mt-6 px-6 py-3 bg-[#FA4A0C] text-white font-semibold shadow-md"
              whileHover={{
                scale: 1.12,
                boxShadow: "0 0 15px rgb(250 74 12 / 0.8)",
                transition: {
                  duration: 0.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              whileTap={{ scale: 0.95 }}
            >
              Checkout Menu
            </Motion.button>
          </Link>
        </Motion.div>
      </section>
    </Container>
  );
};

export default Spend;
