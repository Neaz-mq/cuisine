import { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Container from '../../../components/Container';
import { toast } from 'react-toastify';
import useCart from '../../../hooks/useCart';
import { motion as Motion } from 'framer-motion';

const foodItems = [
  {
    title: 'Classic Combo',
    price: '$7.89',
    cuisine: 'Chinese',
    tags: ['Chicken Burger', 'French Fries', 'Soft Drinks'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1752052166/signature1_gyjebg.webp',
    description: 'Succulent, spice-rubbed lamb chops grilled to perfection and served with fresh greens.',
    available: true,
  },
  {
    title: 'Chicken Delight',
    price: '$8.99',
    cuisine: 'Chinese',
    tags: ['Crispy Chicken Sandwich', 'French Fries', 'Soft Drinks'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1752052270/signature2_wasgom.webp',
    description: 'Succulent, spice-rubbed lamb chops grilled to perfection and served with fresh greens.',
    available: true,
  },
  {
    title: 'Family Feast',
    price: '$19.89',
    cuisine: 'Chinese',
    tags: ['Multiple dishes', 'Large portions', 'Soft Drinks'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1752052450/signature3_td2pb9.webp',
    description: 'Succulent, spice-rubbed lamb chops grilled to perfection and served with fresh greens.',
    available: true,
  },
  {
    title: 'Mega Meal',
    price: '$29.99',
    cuisine: 'Chinese',
    tags: ['Party Platter', 'Extra Large', 'Drinks Included'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1752052734/signature4_ec4hsr.webp',
    description: 'Succulent, spice-rubbed lamb chops grilled to perfection and served with fresh greens.',
    available: true,
  },
];

const Signature = () => {
  const carouselRef = useRef(null);
  const { addToCart } = useCart();

  const scroll = (direction) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const card = carousel.querySelector('div');
      const cardWidth = card?.offsetWidth || 0;
      const scrollAmount = direction === 'left' ? -cardWidth - 48 : cardWidth + 48;
      carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <section className="bg-[#2C6252] text-white py-24 relative mb-72 3xl:w-[75rem] 2xl:w-[62rem] xl:w-[54rem] lg:w-[42rem] 3xl:ml-[4.3rem] 2xl:ml-4 xl:ml-12 lg:-ml-2 3xl:mt-60 2xl:mt-52 xl:mt-48 lg:mt-44">
        <div className="mx-auto px-14 relative left-6">

          {/* Rotated label */}
          <div className="absolute rotate-[-80deg] 3xl:top-[7rem] 2xl:top-[8rem] xl:top-[6rem] lg:top-[5rem]">
            <div className="bg-[#FF4C15] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2 shadow-md 3xl:-ml-72 2xl:-ml-60 xl:-ml-72 lg:-ml-72">
              <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
                <img src="/Group 811.svg" className="w-3.5 h-3.5" alt="Flag Icon" />
              </div>
              Foreign customer for (food menu)
            </div>
          </div>

          {/* Vertical headline */}
          <div className="2xl:ml-8">
            <h2 className="3xl:text-[40px] 2xl:text-[36px] xl:text-[36px] lg:text-[30px] font-semibold rotate-[-90deg] absolute 3xl:top-[14.5rem] 2xl:top-[14rem] xl:top-[14rem] lg:top-[14rem] 3xl:-left-32 2xl:-left-24 xl:-left-24 lg:-left-20">
              Chinese Food Set Meals
            </h2>
          </div>

          {/* Carousel */}
          <div className="3xl:ml-[11.6rem] 2xl:ml-[7.5rem] xl:ml-[7.5rem] lg:ml-[8.5rem] relative z-10">
            <div
              ref={carouselRef}
              className="flex overflow-hidden scroll-smooth 3xl:gap-12 2xl:gap-8 xl:gap-4 lg:gap-14 3xl:w-[calc(20rem*3+3rem*2)] 2xl:w-[calc(17rem*3+3rem*2)] xl:w-[calc(14rem*3+3rem*2)] lg:w-[calc(11rem*3+3rem*2)] mx-auto"
            >
              {foodItems.map((item, index) => {
                const parsedPrice = parseFloat(item.price.replace('$', '')) || 0;

                return (
                  <Motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.03, rotate: 0.5 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="bg-white text-black 3xl:w-[20rem] 2xl:w-[19rem] xl:w-[17rem] lg:w-[17rem] flex-shrink-0 shadow-md hover:shadow-lg"
                  >
                    <div className="relative">
                      <Motion.img
                        src={item.image}
                        alt={`${item.title} Image`}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5, ease: 'easeInOut' }}
                      />
                      {item.available && (
                        <span className="absolute top-2 right-2 bg-[#FFCA46] text-xs px-2 py-1 text-[#F6F6F6] font-medium flex items-center">
                          <img src="/svg.svg" className="w-3 h-3 mr-1" alt="Available Icon" />
                          Food Available
                        </span>
                      )}
                    </div>

                    <div className="p-4">
                      <h3 className="text-[#2C6252] text-lg font-medium mt-2 ml-2">{item.cuisine}</h3>
                      <h2 className="font-semibold text-lg text-[#2C6252] ml-2">
                        {item.title} - {item.price}
                      </h2>

                      <ul className="text-[#AAAAAA] mt-6 list-none text-sm p-0">
                        {item.tags.map((tag, idx) => (
                          <li key={idx} className="flex items-center gap-2 mb-1 ml-2">
                            <div className="w-5 h-5 bg-green-500 rounded-sm flex items-center justify-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-3.5 h-3.5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={3}
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-gray-400 text-sm">{tag}</span>
                          </li>
                        ))}
                      </ul>

                      <p className="text-[#c2c2c2] text-[12px] ml-2 mt-4">{item.description}</p>

                      <Motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          const formattedItem = { ...item, price: parsedPrice };
                          const result = addToCart(formattedItem);

                          if (result.success) {
                            toast.success(`${item.title} added to cart successfully!`, {
                              position: 'top-center',
                              autoClose: 2000,
                              hideProgressBar: true,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                            });
                          } else {
                            toast.warning(`${item.title} is already in cart!`, {
                              position: 'top-center',
                              autoClose: 2000,
                              hideProgressBar: true,
                              closeOnClick: true,
                              pauseOnHover: true,
                              draggable: true,
                            });
                          }
                        }}
                        className="bg-[#FF4C15] hover:bg-orange-600 text-white mt-4 py-2 px-4 cursor-pointer border-none ml-2 w-1/2"
                      >
                        Order Now
                      </Motion.button>
                    </div>
                  </Motion.div>
                );
              })}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute -bottom-14 left-0 w-full flex justify-start z-20">
              <div className="flex gap-2">
                <button
                  onClick={() => scroll('left')}
                  aria-label="Scroll Left"
                  className="bg-white text-teal-900 p-2 shadow-md cursor-pointer"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={() => scroll('right')}
                  aria-label="Scroll Right"
                  className="bg-white text-teal-900 p-2 shadow-md cursor-pointer"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Signature;
