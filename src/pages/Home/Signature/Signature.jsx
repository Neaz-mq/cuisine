import React, { useRef } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const foodItems = [
  {
    title: 'Classic Combo',
    price: '$7.89',
    cuisine: 'Chinese',
    tags: ['Chicken Burger', 'French Fries', 'Soft Drinks'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1745657165/Mask_Group_13_nqpfnt.png',
    description: 'Succulent, spice-rubbed lamb chops grilled to perfection and served with fresh greens.',
    available: true,
  },
  {
    title: 'Chicken Delight',
    price: '$8.99',
    cuisine: 'Chinese',
    tags: ['Crispy Chicken Sandwich', 'French Fries', 'Soft Drinks'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1745657198/Mask_Group_14_c1b8ng.png',
    description: 'Succulent, spice-rubbed lamb chops grilled to perfection and served with fresh greens.',
    available: true,
  },
  {
    title: 'Family Feast',
    price: '$19.89',
    cuisine: 'Chinese',
    tags: ['Multiple dishes', 'Large portions', 'Soft Drinks'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1745657220/Mask_Group_15_fh4x2l.png',
    description: 'Succulent, spice-rubbed lamb chops grilled to perfection and served with fresh greens.',
    available: true,
  },
  {
    title: 'Mega Meal',
    price: '$29.99',
    cuisine: 'Chinese',
    tags: ['Party Platter', 'Extra Large', 'Drinks Included'],
    image: 'https://res.cloudinary.com/dxohwanal/image/upload/v1745667692/mega_tgvowv.jpg',
    description: 'Succulent, spice-rubbed lamb chops grilled to perfection and served with fresh greens.',
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
        const cardWidth = card.offsetWidth + 48; // card width + gap
        const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
        carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
   <div className='container mx-auto'>
     <div className="bg-[#2C6252] text-white py-24  relative overflow-visible  mb-72 3xl:w-[89rem] 2xl:w-[65rem] xl:w-[58rem] lg:w-[42rem] 3xl:ml-44 2xl:ml-16 xl:ml-14 lg:ml-12 3xl:mt-60 2xl:mt-52 xl:mt-48 lg:mt-48">
      <div className="max-w-[1200px] mx-auto px-14 relative right-20 ">
        {/* Vertical Title */}

        <div className="absolute rotate-[-80deg] 3xl:top-[7rem] 2xl:top-[12rem] xl:top-[11rem] lg:top-[11rem] ">
          <div className="bg-[#FF4C15] text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-2 shadow-md 3xl:-ml-72 2xl:-ml-20 xl:-ml-24 lg:-ml-24">
            <div className="bg-white rounded-full w-6 h-6 flex items-center justify-center">
              <img src="/Group 811.svg" className="w-3.5 h-3.5" alt="" />
            </div>
            Foreign customer for (food menu)
          </div>
        </div>


       <div className='2xl:ml-8 xl:ml-[6.3rem] '>
         <h2 className="3xl:text-[40px] 2xl:text-[36px] xl:text-[36px] lg:text-[30px] font-semibold rotate-[-90deg] absolute  3xl:top-[14.5rem] 2xl:top-[14rem] xl:top-[14rem] lg:top-[14rem] 3xl:-left-28 2xl:-left-0 xl:-left-3 lg:left-6">
          Chinese Food Set Meals
        </h2>
       </div>

        {/* Cards Section */}
        <div className="3xl:ml-[14rem]  2xl:ml-[13rem] xl:ml-[13.8rem] lg:ml-[14rem]  relative z-10 ">
          <div
            ref={carouselRef}
            className="flex 3xl:gap-10 2xl:gap-12 xl:gap-4 lg:gap-10   overflow-hidden scroll-smooth 3xl:w-[calc(24rem*3+3rem*2)] 2xl:w-[calc(17.5rem*3+3rem*2)] xl:w-[calc(15rem*3+3rem*2)] lg:w-[calc(9.6rem*3+3rem*2)] mx-auto"
          >
            {foodItems.map((item, index) => (
              <div key={index} className="bg-white text-black 3xl:w-[20rem]  2xl:w-[18rem]  xl:w-[20rem] lg:w-[16rem] flex-shrink-0  ">
                <div className="relative">
                  <img src={item.image} alt={item.title} className="w-full h-48 object-cover " />
                  {item.available && (
                    <span className="absolute top-2 right-2 bg-[#FFCA46] text-xs px-2 py-1 text-[#F6F6F6] font-medium flex items-center">
                      <div className=" rounded-full w-4 h-4 flex items-center justify-center mr-1">
                        <img src="/svg.svg" className="w-3 h-3" alt="Food Icon" /> {/* Replace with your food icon path */}
                      </div>
                      Food Available
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-[#2C6252] text-lg font-medium mt-2 ml-2">{item.cuisine}</h3>
                  <h2 className="font-semibold text-lg text-[#2C6252] ml-2">{item.title} - {item.price}</h2>
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

                  <h4 className="text-[#c2c2c2] text-[12px] ml-2 mt-4">{item.description}</h4>
                  <button className="bg-[#FF4C15] hover:bg-orange-600 text-white mt-4 py-2 px-4 cursor-pointer border-none ml-2">
                    Order Now
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Buttons */}
          <div className="absolute -bottom-14 left-0 w-full flex justify-start z-20">
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="bg-white text-teal-900 p-2 shadow-md cursor-pointer"
              >
                <FaChevronLeft />
              </button>
              <button
                onClick={() => scroll('right')}
                className="bg-white text-teal-900 p-2 shadow-md cursor-pointer"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Signature;



