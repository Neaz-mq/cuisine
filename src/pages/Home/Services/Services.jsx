import Container from "../../../components/Container";
import { motion as Motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: "/Path 67.svg",
      title: "Fresh and High-Quality Ingredients",
      desc: "We source only the freshest and highest-quality ingredients ",
    },
    {
      icon: "/unique.svg",
      title: "Unique and Delicious Menu",
      desc: "Our menu is carefully crafted by expert chefs who bring creativity",
    },
    {
      icon: "/customer.svg",
      title: "Outstanding Customer Service",
      desc: "Our staff is dedicated to providing warm and attentive services",
    },
    {
      icon: "/cazy.svg",
      title: "Cozy and Inviting Atmosphere",
      desc: "We have designed our restaurant to offer a comfortable and stylish",
    },
    {
      icon: "/safety.svg",
      title: "Commitment to Cleanliness and Safety",
      desc: "We adhere to the highest standards of hygiene and food safety",
    },
    {
      icon: "/value.svg",
      title: "Affordable Prices with Great Value",
      desc: "We believe that exceptional food should be accessible to everyone",
    },
  ];

  return (
    <div className="3xl:-mt-[3rem] 2xl:-mt-[3rem] xl:-mt-[4rem] lg:-mt-[6rem] flex justify-center">
      <Container>
        <section className="relative w-full flex flex-col items-center justify-center mb-8 2xl:mr-5 3xl:mr-0 xl:mr-0 lg:right-3">
          <div
            className="absolute inset-0 bg-no-repeat bg-center bg-contain pointer-events-none 3xl:-top-[40rem] 2xl:-top-[40rem] xl:-top-[40rem] lg:-top-[30rem]"
            style={{
              backgroundImage:
                'url("https://res.cloudinary.com/dxohwanal/image/upload/v1745037051/Stand_out_aj6upw.png")',
            }}
            aria-hidden="true"
          />

          {/* Section Header */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative z-10 text-center mt-[15rem]"
          >
            <h2 className="text-gray-500 text-xs font-semibold tracking-wide mb-2">
              <span className="bg-[#FF4C15] text-white py-1 px-4 rounded-full flex items-center justify-center rotate-[5deg] w-fit mx-auto">
                <span className="bg-white rounded-full w-5 h-5 flex items-center justify-center mr-2">
                  <img src="/svg.png" className="w-3 h-3" alt="Service Badge Icon" />
                </span>
                <span className="text-xs">
                  Your Services <span className="font-thin">(And Benefits)</span>
                </span>
              </span>
            </h2>

            <h1 className="3xl:text-5xl 2xl:text-4xl xl:text-3xl lg:text-2xl font-semibold text-[#2C6252] 3xl:mt-10 2xl:mt-10 xl:mt-8 lg:mt-10 mb-6">
              What Makes Us Stand Out
            </h1>

            <p className="text-[#888888] 3xl:text-base 2xl:text-base xl:text-base lg:text-sm font-normal leading-relaxed max-w-2xl mx-auto">
              At <span className="font-medium">[Restaurant Name]</span>, we don’t just serve food—
              we create unforgettable dining experiences. From the moment you step through our doors.
            </p>
          </Motion.div>

          {/* Services Grid */}
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.15,
                },
              },
            }}
            className="relative z-10 grid grid-cols-1 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 3xl:gap-y-16 2xl:gap-y-16 xl:gap-y-16 lg:gap-y-16 3xl:gap-24 2xl:gap-24 xl:gap-16 lg:gap-4 mt-20 2xl:mr-10 lg:mr-3 3xl:mr-0 xl:mr-0"
          >
            {services.map((service, index) => {
              const words = service.desc.split(" ");
              const firstLine = words.slice(0, 5).join(" ");
              const secondLine = words.slice(4).join(" ");

              return (
                <Motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex items-start gap-4 max-w-md"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 3xl:w-16 3xl:h-16 2xl:w-16 2xl:h-16 xl:w-14 xl:h-14 lg:w-14 lg:h-14 bg-[#2C6252] flex items-center justify-center">
                    <img
                      src={service.icon}
                      alt={`${service.title} Icon`}
                      className="3xl:w-7 3xl:h-7 2xl:w-10 2xl:h-10 xl:w-6 xl:h-6 lg:w-4 lg:h-4 object-contain"
                    />
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <h3 className="3xl:text-lg 2xl:text-lg xl:text-base lg:text-[16px] font-semibold text-[#2C6252] mb-1 leading-snug max-w-[220px]">
                      {service.title}
                    </h3>
                    <p className="text-[#CCCCCC] 3xl:text-[12px] 2xl:text-[9px] xl:text-[8px] lg:text-[8px] py-2 leading-snug">
                      {firstLine}
                      <br />
                      {secondLine}
                    </p>
                    <button className="text-[11px] text-[#2C6252] font-medium hover:underline">
                      Discover More
                    </button>
                  </div>
                </Motion.div>
              );
            })}
          </Motion.div>

          <div className="py-24" />
        </section>
      </Container>
    </div>
  );
};

export default Services;
