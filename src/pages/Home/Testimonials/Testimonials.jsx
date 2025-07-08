import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import Container from "../../../components/Container";

const Testimonials = () => {
  const images = [
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748515898/Mask_Group_17_ke16wb.jpg",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748516128/pexels-nicole-michalou-5778894_hz19iu.jpg",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748516355/pexels-askar-abayev-5638751_vinx63.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

  const paginate = (newDirection) => {
    const newIndex = currentIndex - newDirection;
    if (newIndex >= 0 && newIndex < images.length) {
      setDirection(newDirection);
      setCurrentIndex(newIndex);
    }
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? -1 : 1);
    setCurrentIndex(index);
  };

  return (
    <Container>
      <section className="relative bg-white px-8 3xl:px-2 2xl:px-6 xl:px-6 lg:px-2 mx-12 3xl:-top-56 2xl:-top-28 xl:-top-32 lg:-top-48">
        {/* Heading + Description */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <Motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="3xl:text-5xl 2xl:text-5xl xl:text-4xl lg:text-3xl font-regular text-[#2C6252] 3xl:leading-snug 2xl:leading-snug xl:leading-normal 3xl:mt-52 2xl:mt-14 xl:mt-28 lg:mt-24 3xl:ml-2 2xl:-ml-14 xl:-ml-7 lg:-ml-16">
              Customer <br /> Testimonial <br />
              <span className="text-[#FF4C15]">Examples</span>
            </h2>
            <div className="flex">
              <p className="text-[#CCCCCC] 3xl:mt-14 2xl:mt-8 xl:mt-6 lg:mt-3 max-w-md 3xl:text-[16px] 2xl:text-[16px] xl:text-[12px] lg:text-[10px] 3xl:ml-3 2xl:-ml-[3.2rem] xl:-ml-[1.5rem] lg:-ml-16">
                When I research companies online, I don’t just want to hear the company’s pitch; I want to hear from its customers.
              </p>
              <Motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="3xl:-mt-14 2xl:-mt-[1.7rem] xl:-mt-[2.4rem] lg:-mt-[3.5em] ml-6"
              >
                <img
                  src="https://res.cloudinary.com/dxohwanal/image/upload/v1747212688/asset1_rbxyxt.png"
                  alt="Decorative testimonial icon"
                />
              </Motion.div>
            </div>
          </Motion.div>

          {/* Swipeable Image Section */}
          <div className="relative w-full 3xl:h-[400px] 2xl:h-[400px] xl:h-[400px] lg:h-[200px] overflow-hidden 3xl:ml-4 2xl:right-2 xl:right-12 lg:ml-12">
            <AnimatePresence initial={false} custom={direction}>
              <Motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`Testimonial visual ${currentIndex + 1}`}
                custom={direction}
                className="absolute w-full h-full object-cover"
                initial={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) paginate(-1);
                  else if (swipe > swipeConfidenceThreshold) paginate(1);
                }}
              />
            </AnimatePresence>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-12 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, index) => (
                <Motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  whileHover={{ scale: 1.2 }}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex
                    ? "bg-white border-2 border-[#FF4C15]"
                    : "bg-gray-300 border border-transparent"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 3xl:gap-8 2xl:gap-8 xl:gap-6 lg:gap-3 3xl:-mt-14 2xl:mt-24 xl:mt-14 lg:mt-10 3xl:ml-3 3xl:mr-3 2xl:ml-0 2xl:mr-4 xl:ml-0 xl:mr-4 lg:ml-0 lg:mr-4">
          {[
            {
              name: "— Emily R.",
              text: "The food was absolutely delicious, and the service was top-notch! The ambiance made our dinner even more special. Highly recommend!",
              dots: [true, false],
              img: "https://res.cloudinary.com/dxohwanal/image/upload/v1748515898/Mask_Group_17_ke16wb.jpg"
            },
            {
              name: "— James T.",
              text: "I've been coming here for years, and the quality has never changed. Fresh ingredients, amazing flavors, and a welcoming staff. A must-visit!",
              dots: [true, true]
            },
            {
              name: "— Sophia M.",
              text: "From the moment we walked in, we were treated like family. The dishes were flavorful and beautifully presented. 10/10!",
              dots: [false, true]
            },
          ].map((card, i) => (
            <Motion.div
              key={i}
              className="border border-orange-200 p-12 bg-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <h4 className="text-lg font-semibold text-green-900 mb-4">{card.name}</h4>
              <p className="text-sm text-gray-700">{card.text}</p>
              <div className="flex items-center mt-4 space-x-2">
                {card.img ? (
                  <>
                    <span className="w-6 h-6 bg-[#2C6252] rounded-full" />
                    <img
                      src={card.img}
                      alt={`Avatar of ${card.name}`}
                      className="w-6 h-6 border-2 border-[#FF4C15] rounded-full object-cover"
                    />
                  </>
                ) : (
                  [0, 1].map((idx) => (
                    <span
                      key={idx}
                      className={`w-6 h-6 rounded-full ${card.dots[idx] ? "bg-[#FF4C15]" : "bg-[#2C6252]"}`}
                    />
                  ))
                )}
              </div>
            </Motion.div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default Testimonials;
