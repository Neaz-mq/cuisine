import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const foodItems = [
  {
    title: 'Classic Combo',
    price: '$7.89',
    cuisine: 'Chinese',
    tags: ['Chicken Burger', 'French Fries', 'Soft Drinks'],
    image: 'https://via.placeholder.com/300x200',
    available: true,
  },
  {
    title: 'Chicken Delight',
    price: '$8.99',
    cuisine: 'Chinese',
    tags: ['Crispy Chicken Sandwich', 'French Fries', 'Soft Drinks'],
    image: 'https://via.placeholder.com/300x200',
    available: true,
  },
  {
    title: 'Family Feast',
    price: '$19.89',
    cuisine: 'Chinese',
    tags: ['Multiple dishes', 'Large portions', 'Soft Drinks'],
    image: 'https://via.placeholder.com/300x200',
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
    <div className="bg-[#2C6252] text-white py-16 relative overflow-hidden mb-72 w-[105rem] -ml-20 ">
      <div className="max-w-[1200px] mx-auto px-4 relative">
        <h2 className="text-4xl font-bold rotate-[-90deg] absolute left-0 top-96 transform -translate-y-1/2 origin-left">
          Signature Foods
        </h2>

        <div className="ml-32 relative">
          <div
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide"
          >
            {foodItems.map((item, index) => (
              <div key={index} className="bg-white text-black rounded-lg w-72 flex-shrink-0 shadow-lg">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="rounded-t-lg w-full h-48 object-cover" />
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
                  <button className="bg-orange-500 text-white mt-4 px-4 py-2 rounded hover:bg-orange-600">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-0 left-0 flex space-x-2 mt-4">
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
  );
};

export default Signature;
