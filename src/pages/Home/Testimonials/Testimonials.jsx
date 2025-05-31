import { useState } from "react";
import { AnimatePresence, motion as Motion } from "framer-motion";

const Testimonials = () => {
  const images = [
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748515898/Mask_Group_17_ke16wb.jpg",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748516128/pexels-nicole-michalou-5778894_hz19iu.jpg",
    "https://res.cloudinary.com/dxohwanal/image/upload/v1748516355/pexels-askar-abayev-5638751_vinx63.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const swipeConfidenceThreshold = 10000;

  const swipePower = (offset, velocity) => {
    return Math.abs(offset) * velocity;
  };

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
    <div className="container mx-auto">
      <div className="relative bg-white px-8 md:px-16 mx-24 3xl:-top-60 2xl:-top-56 xl:-top-36 lg:-top-32">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left content */}
        <div>
          <h2 className="3xl:text-5xl 2xl:text-5xl xl:text-4xl lg:text-3xl font-regular text-[#2C6252] 3xl:leading-snug 2xl:leading-snug xl:leading-normal 3xl:mt-52 2xl:mt-48 xl:mt-28 lg:mt-24 3xl:ml-3 2xl:ml-12 xl:ml-8 lg:-ml-20">
            Customer <br /> Testimonial <br />
            <span className="text-[#FF4C15]">Examples</span>
          </h2>
          <div className="flex">
            <div>
              <p className="text-[#CCCCCC] 3xl:mt-14 2xl:mt-8 xl:mt-6 lg:mt-3 max-w-md 3xl:text-[16px] 2xl:text-[16px] xl:text-[12px] lg:text-[10px] 3xl:ml-4 2xl:ml-12  xl:ml-9 lg:-ml-20">
                When I research companies online, I don’t just want to hear the company’s pitch; I want to hear from its customers.
              </p>
            </div>
            <div className="3xl:-mt-14 2xl:-mt-14 xl:-mt-12 lg:-mt-8 ml-6">
              <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1747212688/asset1_rbxyxt.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Right image with swipe carousel */}
        <div className="relative w-full 3xl:h-[400px] 2xl:h-[400px] xl:h-[400px] lg:h-[200px] overflow-hidden 3xl:ml-4 2xl:right-6 xl:right-2 lg:ml-20" >
          <AnimatePresence initial={false} custom={direction}>
            <Motion.img
              key={currentIndex}
              src={images[currentIndex]}
              custom={direction}
              className="absolute w-full h-full object-cover"
              initial={{ x: direction > 0 ? -300 : 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction > 0 ? 300 : -300, opacity: 0 }}
              transition={{ duration: 0.5 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) {
                  paginate(-1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(1);
                }
              }}
            />
          </AnimatePresence>
          {/* Dots below the image */}
          <div className="absolute bottom-8 left-12 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 
        ${index === currentIndex
                    ? "bg-white border-2 border-[#FF4C15]"
                    : "bg-gray-300 border border-transparent"}
      `}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Cards */}
      <div className="grid grid-cols-1 3xl:grid-cols-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-2 3xl:gap-8 2xl:gap-8 xl:gap-8 lg:gap-14 3xl:-mt-20 2xl:-mt-10 xl:mt-10 lg:mt-10 3xl:ml-5 2xl:ml-12 2xl:mr-6 xl:ml-10 xl:mr-2  ">
        {/* Card 1 */}
        <div className="border border-orange-200 p-12 ">
          <h4 className="text-lg font-semibold text-green-900 mb-4">— Emily R.</h4>
          <p className="text-sm text-gray-700">
            "The food was absolutely delicious, and the service was top-notch! The ambiance
            made our dinner even more special. Highly recommend!"
          </p>
          <div className="flex items-center mt-4 space-x-[10px]">
            {/* Left half white, right half green circle */}        
             <span className="w-6 h-6 bg-[#2C6252] rounded-full"></span> 
            {/* Avatar with orange background and border */}
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1748515898/Mask_Group_17_ke16wb.jpg"
              alt="avatar"
              className="w-6 h-6 rounded-full border-2 border-[#FF4C15] bg-[#FF4C15] object-cover"
            />
          </div>

        </div>

        {/* Card 2 */}
        <div className="border border-orange-200 p-12 ">
          <h4 className="text-lg font-semibold text-green-900 mb-4">— James T.</h4>
          <p className="text-sm text-gray-700">
            "I've been coming here for years, and the quality has never changed.
            Fresh ingredients, amazing flavors, and a welcoming staff. A must-visit!"
          </p>
          <div className="flex space-x-2 mt-4">
             <span className="w-6 h-6 bg-[#2C6252] rounded-full"></span>
           <span className="w-6 h-6 bg-[#FF4C15] rounded-full"></span>
       
          </div>
        </div>
        {/* Card 3 */}
        <div className="border border-orange-200 p-12 3xl:block 2xl:block xl:block lg:hidden ">
          <h4 className="text-lg font-semibold text-green-900 mb-4">— Sophia M.</h4>
          <p className="text-sm text-gray-700">
            "From the moment we walked in, we were treated like family. The dishes
            were flavorful and beautifully presented. 10/10!"
          </p>
          <div className="flex space-x-2 mt-4">
            <span className="w-6 h-6 bg-[#FF4C15] rounded-full"></span>
             <span className="w-6 h-6 bg-[#2C6252] rounded-full"></span>       
            
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Testimonials;


