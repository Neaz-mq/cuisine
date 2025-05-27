import React from 'react';

const Week = () => {
  return (
    <div className="min-h-screen flex flex-col 3xl:mt-20 container  mx-auto">
      {/* Header */}
      <div className="bg-[#3D6A5D] text-white p-4 flex justify-between items-center  3xl:ml-12">
        <h1 className="text-2xl font-bold ml-8">Don't Miss This Week's Delights</h1>
        <span className="text-sm mr-[11.5rem]">* Authority suggested food</span>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row p-8 relative">
        {/* Left Section: Days */}
        <div className="lg:w-1/2 flex flex-col justify-center items-start p-4 3xl:space-y-20 3xl:-mt-48 z-10">
          {/* Monday */}
          <div className="relative flex items-start">
            <div className="w-1 bg-gray-400 h-24 mr-4  opacity-70"></div>
            <div>
              <h2 className="text-6xl font-extrabold mb-2 text-[#F6F6F6] opacity-70">Monday</h2>
              <p className="text-lg ml-0 text-[#E1E1E1]">- Buy 1 Get 1 Free on all Pizzas</p>
            </div>
          </div>

          {/* Wednesday */}
          <div className="relative flex items-start">
            <div className="w-1 bg-gray-400 h-24 mr-4  opacity-70"></div>
            <div>
              <h2 className="text-6xl font-extrabold mb-2 text-[#F6F6F6] opacity-70">Wednesday</h2>
              <p className="text-lg ml-0 text-[#E1E1E1]">- 50% OFF on all Pasta Dishes</p>
            </div>
          </div>

          {/* Friday */}
          <div className="relative flex items-start">
            <div className="w-1 bg-green-700 h-24 mr-4 rounded-full"></div>
            <div>
              <h2 className="text-6xl font-extrabold mb-2 text-[#FF4C15]">Friday</h2>
              <p className="text-lg ml-0 text-[#2C6252]">- Free Dessert with any Main Course</p>
            </div>
          </div>
        </div>

        {/* Right Section: Image Collage */}
        <div className="lg:w-1/2 relative min-h-[850px] flex items-center justify-center 3xl:mt-36 3xl:left-2">
          {/* Image 1 - Donuts */}
          <div className="absolute 3xl:top-4 3xl:left-[15%] 3xl:w-40 3xl:h-52  overflow-hidden z-30">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1748320998/Mask_Group_36_gbjtya.png"
              alt="Donuts"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 2 - Noodles */}
          <div className="absolute 3xl:top-[4.5rem] 3xl:left-[35%] 3xl:w-40 3xl:h-52 overflow-hidden  3xl:-translate-x-1/2 3xl:-translate-y-36 z-20">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1748321962/Mask_Group_39_emmfxr.png"
              alt="Noodles"
              className="w-full h-full object-cover"
            />
          </div>

         

          {/* Image 3 - Pasta */}
          <div className="absolute 3xl:top-4 3xl:left-[38%] 3xl:w-64 3xl:h-52  overflow-hidden  z-10">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1748321038/Mask_Group_35_csn6xf.png"
              alt="Pasta"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 4 - Snacks */}
          <div className="absolute 3xl:top-[16rem] 3xl:left-[38%] 3xl:w-40 h-52  overflow-hidden  z-10">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1748321078/Mask_Group_37_fqhmcm.png"
              alt="Snacks"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 5 - Chicken (moved closer) */}
          <div className="absolute top-[16rem] left-[6%] w-60 h-48  overflow-hidden  z-30">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1748321319/Mask_Group_34_mtkkiw.png"
              alt="Chicken"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Image 6 - Pancakes (moved closer) */}
          <div className="absolute top-[20rem] left-[28%] w-36 h-52  overflow-hidden   z-40">
            <img
              src="https://res.cloudinary.com/dxohwanal/image/upload/v1748322031/Mask_Group_38_xhbv7y.png"
              alt="Pancakes"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Customer Service Card */}
          <div className="absolute bottom-4 right-40  p-6  max-w-xs text-left z-40 top-56">
            <h3 className="text-lg font-bold text-[#2C6252] mb-2">Outstanding <br /> <span className='font-normal'>Customer Service</span></h3>
            <p className="text-xs text-[#CCCCCC]">
              Our staff is dedicated <br /> to providing warm and <br /> attentive service, <br /> making sure that
            </p>
          </div>

          {/* 50% Text */}
          <div className="absolute right-[8rem] top-[14%] transform -translate-y-1/2 rotate-90 text-[#FF4C15] text-7xl font-extrabold opacity-70 z-0">
            50%
          </div>
        </div>
      </div>
    </div>
  );
};

export default Week;
