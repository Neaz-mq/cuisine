import React, { useState } from 'react';

const categoryItems = [
  { label: 'BURGERS', image: '/burger.png' },
  { label: 'CHICKEN', image: '/chicken.png' },
  { label: 'PIZZA', image: '/pizza.png' },
  { label: 'SALAD', image: '/salad.png' },
  { label: 'APPETIZER', image: '/appetizer.png' },
  { label: 'DRINKS', image: '/drinks.png' },
];

const Items = () => {
  const [selected, setSelected] = useState('CHICKEN');

  return (
    <div className='mt-64'>
      {/* Category Navigation */}
      <div className="bg-[#2C6252] py-4 flex justify-center space-x-8">
        {categoryItems.map((item) => (
          <div
            key={item.label}
            onClick={() => setSelected(item.label)}
            className="flex flex-col items-center cursor-pointer"
          >
            <img src={item.image} alt={item.label} className="w-10 h-10" />
            <span
              className={`mt-1 text-xs font-semibold ${
                selected === item.label ? 'text-white' : 'text-green-200'
              }`}
            >
              {selected === item.label ? (
                <span className="font-bold">{item.label}</span>
              ) : (
                item.label
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Main Section */}
      <div className="bg-white py-12 px-4 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-10 mt-10">
        {/* Left Section - Today Special */}
        <div className="bg-[#FF4C15] text-white rounded-lg p-6 relative overflow-hidden shadow-lg">
          <div className="text-5xl font-bold leading-tight">Today<br />special<br /><span className="text-orange-300">burger</span></div>
          <p className="mt-4 text-sm leading-relaxed">
            We source only the freshest and highest-quality ingredients to ensure every dish bursts with flavor. We source only the freshest and highest-quality ingredients to ensure every dish bursts with
          </p>
          <div className="mt-6 text-2xl font-semibold">$360 <span className="block text-sm font-normal">Special price</span></div>
          <img src="/pepsi.png" alt="Pepsi" className="absolute bottom-0 left-0 w-40 ml-2 mb-2" />
          <img src="/burger-fries.png" alt="Burger with Fries" className="absolute bottom-0 right-0 w-44" />
        </div>

        {/* Right Section - Menu Items */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Array.from({ length: 4 }).map((_, idx) => (
            <div key={idx} className="bg-white shadow-md rounded-lg p-4 flex flex-col items-start">
              <h2 className="text-lg font-semibold text-[#2C6252]">
                Fresh and High-<span className="text-[#FF4C15]">Quality Ingredients</span>
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                We source only the freshest and highest-quality ingredients to ensure every dish bursts with
              </p>
              <div className="flex items-center justify-between w-full mt-4">
                <div className="text-xl font-bold text-[#2C6252]">$300 <span className="text-sm line-through text-gray-400 ml-2">$562</span></div>
                {idx === 1 && (
                  <button className="bg-[#FF4C15] text-white text-sm font-bold px-3 py-1 rounded">Order Now</button>
                )}
              </div>
              <img
                src={
                  idx === 0
                    ? '/burger-pepsi.png'
                    : idx === 1
                    ? '/sandwich-coke.png'
                    : idx === 2
                    ? '/sushi.png'
                    : '/fried-chicken.png'
                }
                alt="Food"
                className="w-24 mt-4"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Items;
