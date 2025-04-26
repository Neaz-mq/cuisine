import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const foodItems = [
  {
    title: 'Classic Combo',
    price: '$7.89',
    cuisine: 'Chinese',
    tags: ['Chicken Burger', 'French Fries', 'Soft Drinks'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1745657165/Mask_Group_13_nqpfnt.png',
    available: true,
  },
  {
    title: 'Chicken Delight',
    price: '$8.99',
    cuisine: 'Chinese',
    tags: ['Crispy Chicken Sandwich', 'French Fries', 'Soft Drinks'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1745657198/Mask_Group_14_c1b8ng.png',
    available: true,
  },
  {
    title: 'Family Feast',
    price: '$19.89',
    cuisine: 'Chinese',
    tags: ['Multiple dishes', 'Large portions', 'Soft Drinks'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1745657220/Mask_Group_15_fh4x2l.png',
    available: true,
  },
  {
    title: 'Mega Meal',
    price: '$29.99',
    cuisine: 'Chinese',
    tags: ['Party Platter', 'Extra Large', 'Drinks Included'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1745667692/mega_tgvowv.jpg',
    available: true,
  },

  
];

const Signature = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const carousel = carouselRef.current;
    if (carousel) {
      const card = carousel.querySelector('div');
      if (card) {
        const cardWidth = card.offsetWidth + 48; // card width + gap (48px = 3rem)
        const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-[#2C6252] text-white py-24 relative overflow-hidden mb-72 w-[100rem] 3xl:-ml-40 3xl:-mt-40">
      <div className="max-w-[1200px] mx-auto px-14 relative">
        <h2 className="text-5xl font-semibold rotate-[-90deg] absolute left-96 top-[24rem] origin-left">
          Signature Foods
        </h2>

        <div className="ml-[30rem] relative">
          <div
            ref={carouselRef}
            className="flex gap-12 overflow-x-hidden scroll-smooth w-[calc(18rem*3+3rem*2)] mx-auto"
          >
            {foodItems.map((item, index) => (
              <div key={index} className="bg-white text-black w-72 flex-shrink-0 shadow-md">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                  {item.available && (
                    <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1  text-black">
                      Food Available
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-gray-500 text-sm">{item.cuisine}</h3>
                  <h2 className="font-bold text-lg">{item.title} - {item.price}</h2>
                  <ul className="text-green-600 mt-2 list-none text-sm p-0">
                    {item.tags.map((tag, idx) => (
                      <li key={idx}>✔️ {tag}</li>
                    ))}
                  </ul>
                  <button
                    className="bg-[#FF4C15] hover:bg-orange-600 text-white mt-4 py-2 px-4  cursor-pointer border-none"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-14 left-0 w-full flex justify-start">
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="bg-white text-teal-900 p-2  shadow-md cursor-pointer"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => scroll('right')}
                className="bg-white text-teal-900 p-2  shadow-md cursor-pointer"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Signature;
