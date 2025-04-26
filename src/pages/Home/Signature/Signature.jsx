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
];

const Signature = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  return (
    <div className="bg-[#2C6252] text-white py-16 relative overflow-hidden mb-72 w-[105rem] -ml-44 3xl:-mt-44 ">
      <div className="max-w-[1200px] mx-[28rem] px-14 relative ">
        <h2 className="text-4xl font-bold rotate-[-90deg] absolute left-0 top-96 transform -translate-y-1/2 origin-left">
          Signature Foods
        </h2>

        <div className="ml-32 relative">
          <div
            ref={carouselRef}
            className="flex space-x-12  pb-8 "
          >
            {foodItems.map((item, index) => (
              <div key={index} className="bg-white text-black  w-72 flex-shrink-0 shadow-lg">
                <div className="relative">
                  <img src={item.image} alt={item.title} className=" w-full h-48 object-cover" />
                  {item.available && (
                    <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded">
                      Food Available
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-gray-500 text-sm">{item.cuisine}</h3>
                  <h2 className="font-bold text-lg">{item.title} - {item.price}</h2>
                  <ul className="text-green-600 mt-2 space-y-1 text-sm">
                    {item.tags.map((tag, idx) => (
                      <li key={idx}>✔️ {tag}</li>
                    ))}
                  </ul>
                  <button className="bg-[#FF4C15] text-white mt-4 px-4 py-2  hover:bg-orange-600">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute -bottom-10 left-0 w-full flex justify-start">
            <div className="flex space-x-2">
              <button
                onClick={scrollLeft}
                className="bg-white text-green-900 p-2 rounded hover:bg-gray-100 shadow"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={scrollRight}
                className="bg-white text-green-900 p-2 rounded hover:bg-gray-100 shadow"
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
