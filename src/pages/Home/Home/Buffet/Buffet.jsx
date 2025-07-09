import { Link } from "react-router-dom";
import Container from "../../../../components/Container";
import { motion as Motion } from "framer-motion";

const Buffet = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { ease: "easeOut", duration: 0.7 },
    },
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0 8px 15px rgba(255, 76, 21, 0.6)",
    transition: { duration: 0.3 },
  };

  const cardHover = {
    scale: 1.06,
    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.3)",
    transition: { duration: 0.4 },
  };

  const foodItems = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dxohwanal/image/upload/v1747027495/Mask_Group_7_ezrscz.png",
      alt: "Grilled Lamb Chops",
      ratingFull: 4,
      ratingHalf: true,
      ratingValue: "4.5 Rating",
      title: "Grilled Lamb Chops",
      description: "Succulent, spice-rubbed lamb chops grilled to perfection with fresh greens.",
    },
    {
      id: 2,
      img: "https://res.cloudinary.com/dxohwanal/image/upload/v1747027615/Mask_Group_8_o6fhcq.png",
      alt: "Grilled Super Steak",
      ratingFull: 5,
      ratingHalf: false,
      ratingValue: "5.0 Rating",
      title: "Grilled Super Steak",
      description: "Tender and juicy steak grilled to your liking, served with your choice side.",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dxohwanal/image/upload/v1747027686/Mask_Group_9_b1ncuh.png",
      alt: "Pan-Seared Steak",
      ratingFull: 4,
      ratingHalf: false,
      ratingValue: "4.0 Rating",
      title: "Pan-Seared Steak",
      description: "Succulent, spice-rubbed lamb chops grilled to perfection with fresh greens.",
    },
    {
      id: 4,
      img: "https://res.cloudinary.com/dxohwanal/image/upload/v1747027737/Mask_Group_10_mzcepf.png",
      alt: "Special Sandwich",
      ratingFull: 5,
      ratingHalf: false,
      ratingValue: "5.0 Rating",
      title: "Special Sandwich",
      description: "Delicious vegetarian pasta with fresh vegetables and a flavorful sauce.",
    },
  ];

  return (
    <Container>
      <section className="mb-36 z-50 3xl:mt-36 2xl:mt-20 xl:mt-16 lg:mt-14 3xl:-ml-0 2xl:-ml-0 xl:-ml-0 lg:-ml-3">
        <div className="px-4 sm:px-6 3xl:px-8 2xl:px-8 xl:px-8 lg:px-2">
          {/* Header with Background */}
          <Motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUpVariant}
            className="relative bg-[url('https://res.cloudinary.com/dxohwanal/image/upload/v1752039838/Buffet_z0iumv.png')] bg-no-repeat bg-contain bg-center h-[20rem] w-full flex flex-col items-center justify-center -mt-[15rem]"
          >
            <span className="bg-gradient-to-r from-[#FF6A00] via-[#FF4C15] to-[#FF6A00] text-white py-1 px-5 rounded-full flex items-center justify-center transform -rotate-[5deg] w-fit shadow-lg drop-shadow-md">
              <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center mr-3 animate-pulse">
                <img src="/svg.png" className="w-4 h-4" alt="Category Icon" />
              </div>
              <span className="text-xs font-semibold tracking-wider uppercase">
                Delicious <span className="font-thin lowercase">(Food)</span>
              </span>
            </span>
            <h2 className="3xl:text-6xl 2xl:text-5xl xl:text-4xl lg:text-3xl font-extrabold text-[#2C6252] mt-6 text-center drop-shadow-md">
              Buffet for Signature Food
            </h2>
          </Motion.div>

          {/* Food Cards */}
          <Motion.div
            className="grid grid-cols-1 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            {foodItems.map(({ id, img, alt, ratingFull, ratingHalf, ratingValue, title, description }, idx) => (
              <Motion.div
                key={id}
                variants={fadeUpVariant}
                transition={{ delay: idx * 0.15 }}
                whileHover={cardHover}
                className="overflow-hidden relative cursor-pointer"
              >
                <img src={img} alt={alt} className="w-full h-52 object-cover mb-3" />
                <span className="absolute top-2 right-2 bg-gradient-to-r from-[#FFCA46] to-[#FFD966] text-xs px-2 py-1 text-[#F6F6F6] font-semibold flex items-center backdrop-blur-sm bg-opacity-80">
                  <img src="/svg.svg" className="w-4 h-4 mr-1" alt="Available Food Icon" />
                  Food Available
                </span>
                <div className="p-5">
                  <div className="flex items-center mb-3">
                    {[...Array(ratingFull)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400 mr-1 drop-shadow" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z" />
                      </svg>
                    ))}
                    {ratingHalf && (
                      <svg className="w-5 h-5 text-yellow-400 mr-1 drop-shadow" fill="currentColor" viewBox="0 0 20 20">
                        <defs>
                          <clipPath id={`half-star-${id}`}>
                            <rect x="0" y="0" width="10" height="20" />
                          </clipPath>
                        </defs>
                        <path
                          d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 3.635 1.123 6.545z"
                          clipPath={`url(#half-star-${id})`}
                        />
                      </svg>
                    )}
                    <span className="text-[#777777] font-semibold text-sm ml-2 select-none whitespace-nowrap">
                      ({ratingValue})
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#2C6252] mb-4">{title}</h3>
                  <p className="text-[#666666] text-sm mb-5 leading-relaxed">{description}</p>
                  <Link to="/chefs">
                    <Motion.button
                      whileHover={buttonHover}
                      className="bg-gradient-to-r from-[#FF4C15] to-[#FF6A00] text-white py-3 px-6 text-sm font-semibold transition-all duration-300 flex items-center justify-center w-full whitespace-nowrap"
                    >
                      Learn More
                      <svg
                        className="ml-2 w-5 h-5 text-white animate-bounce"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Motion.button>
                  </Link>
                </div>
              </Motion.div>
            ))}
          </Motion.div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-stretch overflow-hidden">
            <Motion.div
              className="flex flex-col justify-center px-6 py-10 w-full md:w-1/3 z-50"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUpVariant}
            >
              <h2 className="text-[#2C6252] text-3xl md:text-5xl font-extrabold tracking-wide drop-shadow-md">
                Deep <br /> Blue <br /> Delights
              </h2>
            </Motion.div>

            <div className="relative w-full h-64 md:h-96">
              <Motion.img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1747031825/Mask_Group_57_qgijfs.png"
                alt="Deep Blue Delights"
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
              />
              <Motion.div
                className="absolute bottom-20 left-10 text-white p-4 text-sm max-w-[300px] rounded-md z-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
              >
                Succulent, spice-rubbed lamb chops grilled to perfection and served with fresh greens.
              </Motion.div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Buffet;
