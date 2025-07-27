import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Container from '../../../components/Container';
import { motion as Motion } from 'framer-motion';

const Banner = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div className="flex items-center justify-center overflow-hidden z-20 3xl:-mt-10 md:-ml-16 sm:-ml-36  3xl:-ml-0 2xl:-ml-0 xl:-ml-0 lg:-ml-0">
      <Container>
        <div className="relative bg-white">
          <div className="flex items-start justify-between">
            <Motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative 3xl:p-8 2xl:p-8 xl:p-8 lg:p-0 md:p-0 3xl:top-4 2xl:top-4 xl:top-4 lg:top-8 md:top-3 3xl:left-2 2xl:-left-12 xl:-left-6 lg:-left-8 md:-left-12 sm:-left-12"
            >
              <img
                className="absolute 3xl:left-[-20px] 3xl:right-10 3xl:-top-10 2xl:left-[-20px] 2xl:right-10 2xl:-top-10 xl:left-[-20px] xl:right-10 xl:-top-10 lg:left-[-36px] lg:right-16 lg:-top-16 md:left-[-36px] md:right-16 md:-top-16 opacity-60 blur-sm md:hidden sm:hidden 3xl:block 2xl:block xl:block lg:block"
                src="/Ellipse 9.svg"
                alt="Background Ellipse"
              />

              <div className="3xl:ml-4 2xl:ml-4 xl:ml-4 lg:ml-4 md:ml-16 sm:ml-16">
                <div className='md:block sm:block 3xl:hidden 2xl:hidden xl:hidden lg:hidden md:-ml-2 sm:-ml-2'>
                  <Link to="/offer" aria-label="Go to offers">
                    <button className="bg-[#2C6252] text-white md:px-3 sm:px-2 md:py-1 sm:py-0 rounded-full flex items-center md:space-x-4 sm:space-x-1 border-2 border-orange-500 transition-all duration-300 hover:scale-105 3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[10px]">
                      <span>Up to 50% Off</span>
                      <div className="bg-white md:p-2 sm:p-1 rounded-full flex items-center justify-center">
                        <img src="/arrow.svg" alt="Arrow Right" className="h-3 w-3" />
                      </div>
                    </button>
                  </Link>
                </div>
                <Motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="3xl:text-6xl 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl font-bold text-[#2C6252] leading-tight flex items-center 3xl:-mt-3 2xl:-mt-3 xl:-mt-3 lg:-mt-3 md:mt-3 sm:mt-3"
                >
                  Savor the
                  <div className='md:hidden sm:hidden 3xl:block 2xl:block xl:block lg:block'>
                    <button
                      className="bg-white text-black py-1 3xl:px-3 2xl:px-3 xl:px-3 lg:px-2 md:px-2 sm:px-2 rounded-full flex items-center space-x-2 ml-8 text-sm border border-black transition-all duration-300 hover:scale-105 "
                      onClick={() => setIsModalOpen(true)}
                      aria-label="Watch Live Kitchen"
                    >
                      <span className="flex items-center 3xl:text-[20px] 2xl:text-[17px] xl:text-[15px] lg:text-[14px] md:text-[14px]">
                        <span className="text-red-500 ml-2 mr-1">Live</span>
                        <span className="text-[#2C6252]">kitchen</span>
                      </span>
                      <div className="bg-[#FF4C15] rounded-full p-2 ml-2 3xl:w-8 2xl:w-8 xl:w-8 lg:w-6 md:w-6 sm:w-6 3xl:h-8 2xl:h-8 xl:h-8 lg:h-6 md:h-6 sm:h-6  flex items-center justify-center">
                        <img src="/Polygon 2.svg" alt="Play" className="h-2 w-5" />
                      </div>
                    </button>
                  </div>
                </Motion.h1>

                <Motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
                  className="3xl:text-6xl 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-2xl font-bold text-[#2C6252] leading-tight 3xl:mt-3 2xl:mt-2 xl:mt-2 lg:mt-1 md:mt-1 sm:mt-1"
                >
                  Flavor, Relish
                </Motion.h2>
              </div>

              <Motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="flex items-center space-x-4 ml-4 3xl:mt-3 2xl:mt-2 xl:mt-2 lg:mt-1 md:mt-1 sm:mt-1"
              >
                <span className="text-[#FF4C15] 3xl:text-6xl 2xl:text-4xl xl:text-2xl lg:text-2xl md:text-2xl font-bold md:ml-12 sm:ml-12 3xl:ml-0 2xl:ml-0 xl:ml-0 lg:ml-0">
                  Every Bite!
                </span>
                <div className='md:hidden sm:hidden 3xl:block 2xl:block xl:block lg:block'>
                  <Link to="/offer" aria-label="Go to offers">
                    <button className="bg-[#2C6252] text-white 3xl:py-2 2xl:py-2 xl:py-2 lg:py-1 3xl:px-3 2xl:px-3 xl:px-3 lg:px-2 md:px-2 sm:px-2 rounded-full flex items-center space-x-2 border-2 border-orange-500 transition-all duration-300 hover:scale-105 3xl:text-[20px] 2xl:text-[16px] xl:text-[13px] lg:text-[12px] md:text-[12px] sm:text-[12px]">
                      <span>Up to 50% Off</span>
                      <div className="bg-white p-2 rounded-full flex items-center justify-center">
                        <img src="/arrow.svg" alt="Arrow Right" className="h-3 w-3" />
                      </div>
                    </button>
                  </Link>
                </div>
              </Motion.div>

              <Motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="3xl:-mt-6 2xl:-mt-6 xl:-mt-6 lg:-mt-6 md:-mt-16 sm:-mt-16"
              >
                <p
                  className="mb-8 3xl:text-[20px] 2xl:text-[16px] xl:text-[12px] lg:text-[9px] md:text-[9px] sm:text-[8px] 3xl:ml-2 2xl:ml-2 xl:ml-2 lg:ml-2 md:ml-10 sm:ml-9 p-4 bg-cover bg-center 3xl:w-[650px] 2xl:w-[500px] xl:w-[480px] lg:w-[480px] md:w-[400px] sm:w-[400px] 3xl:h-[250px] 2xl:h-[220px] xl:h-[180px] lg:h-[150px] md:h-[200px] sm:h-[200px] flex flex-col justify-center"
                  style={{
                    backgroundImage: "url('https://res.cloudinary.com/dxohwanal/image/upload/v1742627149/Tasty_uw9ilh.png')",
                  }}
                >
                  <span className="inline-flex">
                    
                      <span className="text-[#FF4C15] whitespace-nowrap md:ml-3 sm:ml-3 3xl:ml-0 2xl:ml-0 xl:ml-0 lg:ml-0 md:block sm:hidden 3xl:block 2xl:block xl:block lg:block ">
                      Experience the perfect blend of taste and joy—
                    </span>
                     <span className="text-[#FF4C15] whitespace-nowrap md:ml-3 sm:ml-3 3xl:ml-0 2xl:ml-0 xl:ml-0 lg:ml-0 md:hidden sm:block 3xl:hidden 2xl:hidden xl:hidden lg:hidden">
                      Experience the perfect blend of taste and joy
                    </span>
                    <span className="text-[#AAAAAA] ml-2 whitespace-nowrap md:block sm:hidden 3xl:block 2xl:block xl:block lg:block">every bite is a</span>
                    <span className="text-[#AAAAAA] ml-2 whitespace-nowrap md:block sm:hidden 3xl:hidden 2xl:hidden xl:hidden lg:hidden">every bite is a</span>
                  </span>
                  
                  <span className="text-[#AAAAAA] md:hidden sm:hidden 3xl:block 2xl:block xl:block lg:block mt-2">
                    moment of delight, crafted to satisfy your cravings!
                  </span>
                  <span className="text-[#AAAAAA] md:block sm:hidden 3xl:hidden 2xl:hidden xl:hidden lg:hidden mt-2 md:ml-3 sm:ml-3 3xl:ml-0 2xl:ml-0 xl:ml-0 lg:ml-0">
                    moment of delight
                  </span>
                </p>
              </Motion.div>


              <div className="flex items-center 3xl:space-x-20 2xl:space-x-20 xl:space-x-20 lg:space-x-10 md:space-x-10 sm:space-x-6 3xl:-mt-20 2xl:-mt-20 xl:-mt-20 lg:-mt-20 md:-mt-28 sm:-mt-28 3xl:ml-5 2xl:ml-5 xl:ml-5 lg:ml-5 md:ml-14 sm:ml-14 sm:w-60 3xl:w-full 2xl:w-full xl:w-full lg:w-full md:w-full">
                {[
                  {
                    src: 'https://res.cloudinary.com/dxohwanal/image/upload/v1752050418/banner2_wtpney.webp',
                    price: '20$',
                    extraClass: '3xl:mt-[10px] 2xl:mt-[10px] xl:mt-[10px] lg:mt-[0px] md:mt-[00px] sm:mt-0',
                    priceTopClass: '3xl:top-[60px] 2xl:top-[60px] xl:top-[60px] lg:top-[40px] md:top-[60px] sm:top-[30px]',
                  },
                  {
                    src: 'https://res.cloudinary.com/dxohwanal/image/upload/v1752050599/banner3_yocvwl.webp',
                    price: '10$',
                    extraClass: '3xl:-mt-16 2xl:-mt-16 xl:-mt-16 lg:-mt-16 md:-mt-16 sm:-mt-8',
                    priceTopClass: 'top-[20px]',
                  },
                ].map((item, i) => (
                  <Motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.3, duration: 0.8 }}
                    className="relative"
                  >
                    <img
                      src={item.src}
                      alt={`Dish ${i + 1}`}
                      className={`3xl:w-auto 2xl:w-auto xl:w-auto lg:w-40 md:w-40 ${item.extraClass || ''}`}
                    />
                    <div className={`absolute right-[-20px] ${item.priceTopClass}`}>
                      <img src="/flowershape.svg" alt="Price Tag" className="w-16" />
                      <span className="absolute top-[29px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-sm">
                        {item.price}
                      </span>
                    </div>
                  </Motion.div>
                ))}
              </div>

            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative 3xl:-mt-36 3xl:-ml-20 2xl:-ml-32 w-full 2xl:-mt-32 xl:-mt-28 xl:-ml-28 lg:-mt-[5.2rem] md:-mt-[5.9rem] lg:-ml-44 md:-ml-44 object-cover z-20"
            >
              <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1752045017/banner1_p7xkxk.webp"
                alt="Delicious Dish"
                className="3xl:w-full 2xl:w-full xl:w-[44rem] lg:w-[32rem] md:w-[32rem]  3xl:-ml-24 2xl:-ml-10 xl:-ml-16 lg:-ml-0 md:ml-32 3xl:h-[50rem] 2xl:h-[44rem] xl:h-[38rem] lg:h-[30rem] md:h-[34rem] object-cover md:block sm:hidden 3xl:block 2xl:block xl:block lg:block"
              />
            </Motion.div>
          </div>

          {isModalOpen && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-4 rounded-lg relative" data-aos="zoom-in" data-aos-duration="600">
                <button
                  className="absolute top-2 right-0 text-white rounded-full p-2 bg-[#FF4C15] transition duration-300"
                  onClick={() => setIsModalOpen(false)}
                  aria-label="Close modal"
                >
                  X
                </button>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/LVI8veUnSLQ"
                  title="Live Kitchen YouTube video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}
        </div>
        <img
                src="https://res.cloudinary.com/dxohwanal/image/upload/v1752045017/banner1_p7xkxk.webp"
                alt="Delicious Dish"
                className=" sm:block md:hidden 3xl:hidden 2xl:hidden xl:hidden lg:hidden relative bottom-[21rem] left-36 z-0"
              />
      </Container>
    </div>
  );
};

export default Banner;
